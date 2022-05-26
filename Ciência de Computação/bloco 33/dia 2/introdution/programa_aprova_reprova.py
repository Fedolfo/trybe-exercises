file = open("reprovados.txt", mode="w")
CLASSS = [
    {
        "name": "Marcos",
        "note": 10,
    },
    {
        "name": "Felipe",
        "note": 4,
    },
    {
        "name": "José",
        "note": 6,
    },
    {
        "name": "Ana",
        "note": 10,
    },
    {
        "name": "Maria",
        "note": 9,
    },
    {
        "name": "Miguel",
        "note": 5,
    },
]
for i in CLASSS:
    if i["note"] < 6:
        file.write(f"{i['name']} \n")
file.close()
