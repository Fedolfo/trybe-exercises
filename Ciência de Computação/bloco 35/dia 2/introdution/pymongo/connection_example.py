from pymongo import MongoClient

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
client = MongoClient("mongodb://example:example@localhost:27017/admin")
