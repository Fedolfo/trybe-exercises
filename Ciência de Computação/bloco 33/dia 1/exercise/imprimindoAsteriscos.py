def imprimindoAsteriscos(n):
    for i in range(n):
        print("*" * n)


imprimindoAsteriscos(5)

n = 5
for i in range(n):  # simplificado
    print("*" * (n))

for i in range(n):  # complexo e dando valores incorretos
    print("*")
    for j in range(i):
        print("", end="")
    for i in range(n - 1):
        print("*", end="")

for i in range(n):  # complexo e dando valores corretos
    for j in range(n - i - 1):
        print("*", end="")
    for j in range(i + 1):
        print("*", end="")
    print()
