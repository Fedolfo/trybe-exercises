from db import db

# book representa um dado obtido na raspagem
# book = {
#     "title": "A Light in the Attic",
# }
# document_id = db.books.insert_one(book).inserted_id
# print(document_id)
# documents = [
#     {
#         "title": "A Light in the Attic",
#     },
#     {
#         "title": "Tipping the Velvet",
#     },
#     {
#         "title": "Soumission",
#     },
# ]
# db.books.insert_many(documents)

print(db.books.find_one())
for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])
