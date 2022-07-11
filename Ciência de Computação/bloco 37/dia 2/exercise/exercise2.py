"""
Exemplo 1:
cartas = [2, 6, 4, 5]
cartas por parte = 2

resultado = [2, 4, 6, 5]

Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
cartas por parte = 3

resultado = [1, 7, 4, 6, 4, 6]
"""


def shuffle_cards(array, n):  # Complexidade o(n)
    aswer = []
    new_array_index = 0

    for index in range(n):
        aswer.insert(new_array_index, array[index])
        new_array_index += 1
        aswer.insert(new_array_index, array[index + n])
        new_array_index += 1
    return aswer


cartas = [1, 4, 4, 7, 6, 6]
print(shuffle_cards(cartas, 4))
