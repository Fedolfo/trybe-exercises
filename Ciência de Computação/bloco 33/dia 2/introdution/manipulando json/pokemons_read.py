import json  # json é um modulo que vem embutido, porém precisamos importá-lo

with open("pokemons.json") as file:
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]

print(pokemons[0])  # imprime o primeiro pokemon da lista
