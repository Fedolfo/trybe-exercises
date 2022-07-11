"""
- OK
 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4
"""


def max_time_server(array):  # Complexidade o(n)
    max_time = 0
    current_time = 0

    for value in array:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time

    return max_time


print(max_time_server([1, 1, 1, 1, 0, 0, 1, 1]))
