"""
Número passado por parâmetro à função: 4

Execução: 4 + 3 + 2 + 1

Resultado: 10
"""


def somatorio(x):
    if x == 1:
        return 1
    else:
        return x + somatorio(x - 1)


print(somatorio(5))


"""
Iterativo x Recursivo!
"""


def countdown(n):
    if n == 0:  # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # caso recursivo


countdown(5)


def factorial(n):
    if n == 1:  # caso base
        return 1
    else:
        return n * factorial(n - 1)  # caso recursivo


"""
Iterativo
"""


def iterative_countdown(n):
    while n > 0:
        print(n)
        n = n - 1
    print("FIM!")


iterative_countdown(5)


def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    return fact


iterative_factorial(5)
