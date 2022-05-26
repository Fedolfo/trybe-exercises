def imprimir_em_escada(nome):
    for removed_letters in range(len(nome)):
        for i in range(len(nome) - removed_letters):
            print(nome[i], end="")
        print()


if __name__ == "__main__":
    name = input("Digite um nome: ")
    imprimir_em_escada(name)
