from connection import client

# o banco de dados catalogue será criado se não existir
db = client.catalogue
# a coleção books será criada se não existir
students = db.books
# client.close()  # fecha a conexão com o banco de dados
