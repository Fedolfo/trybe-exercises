list_name = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maiorPalavraDeUmaLista(list_name):
    name = list_name[0]
    for i in list_name:
        if len(i) > len(name):
            name = i
    return name


maiorPalavraDeUmaLista(list_name)

for name in list_name:
    if len(name) > len(list_name):
        maior_palavra = name
        print(maior_palavra)
