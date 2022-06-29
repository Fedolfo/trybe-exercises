import random

"""
Exercício 1 Dado um array de números de tamanho n,
escreva um algoritmo que retorna true se há no array um número duplicado e
false caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo
 para o melhor caso, pior caso e caso médio.
"""

"""
Reposta: O(n log n)
Resolução:
O melhor caso e medio caso seria o mínimo, ao passar pelo for e um algoritmo de pior caso o(n) onde passamos por um array inteiro
"""


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


# print(contains_duplicate([2, 3, 4]))


"""
 Exercício 2 Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado um array bidimensional com n linhas e m colunas,
 e um par de coordenadas x para linhas e y para colunas, o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:
"""

"""entrada = [ 0 0 0 0 1
 0 0 0 1
 1 1 1 1
 0 0 1 0 ]

resultado para (0, 4) = True
resultado para (1, 1) = False"""


"""
Qual seria a ordem de complexidade da solução para este problema? E a complexidade de espaço?
"""


def battleship(grid, line, column):
    if grid[line][column] == 1:
        return True

    return False


print(battleship([[0, 1, 0, 0], [0, 1, 0, 0]], 0, 1))

"""
Resposta:
 Mesmo para um array bidimensional, o acesso a um elemento é O(1).
A complexidade de espaço também é O(1), pois não consideramos a entrada em seu cálculo
"""

"""
Exercício 3 Utilize o módulo random da linguagem Python para gerar um array com 100 números.
Cada um desses números deve ser a média de n números gerados aleatoriamente.
Qual é a ordem de complexidade de tempo e de espaço deste programa?
"""


"""
Mesmo que, para o exemplo dado,
o valor de `n` seja muito menor que o valor da constante `100`,
para valores de `n` grandes o valor da constante se torna desprezível. Esse problema, então, é `O(n)`.
Pelo mesmo motivo, a complexidade de espaço é constante, ou seja, `O(1)`
"""


def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages


"""
Resposta: o(n)
"""
