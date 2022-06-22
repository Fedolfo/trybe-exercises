import string
import requests
from parsel import Selector

BASE_URL_HTTPBIN = "https://httpbin.org/encoding/utf8"
BASE_URL_GITHUB_USERS = "https://api.github.com/users"
BASE_URL_SCRAPET = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
BASE_URL_BOOKS = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"


class Response:
    @staticmethod
    def response_request(url):
        response = requests.get(url)
        return response


class DataScraping(Response):
    @staticmethod
    def scraping_with_json(url):
        return Response.response_request(url).json()

    @staticmethod
    def scraping_with_html(url):
        return Response.response_request(url).text

    @staticmethod
    def recover_details_scraping(url):
        selector = Selector(text=Response.response_request(url).text)
        for books in selector.css(".product_main"):
            title = books.css("h1::text").get()
            price = books.css(".price_color::text").re(r"£\d+\.\d{2}")
            description = selector.css("#product_description ~ p::text").get()
            suffix = "...more"
            if description.endswith(suffix):
                description = description[: -len(suffix)]
            img = BASE_URL_BOOKS + selector.css("#product_gallery img::attr(src)").get()
            availability = selector.css(".product_main .availability::text").re_first(
                "\d"
            )
            print(title, price, description, img, availability, sep=", ")


if __name__ == "__main__":
    dataScraping = DataScraping()
    # print(dataScraping.scraping_with_html(BASE_URL_HTTPBIN))
    # recover_data = dataScraping.scraping_with_json(BASE_URL_GITHUB_USERS)
    # for data in recover_data:
    # print(data["login"], data["html_url"])
    # print(dataScraping.scraping_with_html(BASE_URL_SCRAPET))
    dataScraping.recover_details_scraping(BASE_URL_BOOKS)
