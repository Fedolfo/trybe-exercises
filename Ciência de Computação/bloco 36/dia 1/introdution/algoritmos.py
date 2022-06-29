def multiply_array(
    numbers,
):  # crescimento linear, o(n) / Ao causar crescimento do array pode causar uma complexidade linear
    result = 1  # complexidade de espaço 0(1) / O retorno do espaço vai ser apenas um, por sempre substituir o numero inteiro do result
    for number in numbers:
        result *= number
        # print(result, number)
    return result


# print(multiply_array([10, 5, 5]))


def multiply_arrays(
    array1, array2
):  # complexidade desse algoritmo é dada por O(n²) e a chamamos de Complexidade Quadrática
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


# meu_array = [1, 2, 3, 4, 5]

# multiply_arrays(meu_array, meu_array)

# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while (
        start <= end
    ):  # os índices podem ser no máximo iguais, o início não pode ultrapassar o fim
        mid = (start + end) // 2  # encontro o meio

        if (
            numbers[mid] == target
        ):  # se o elemento do meio for o alvo, devolve a posição do meio
            return mid

        if target < numbers[mid]:  # se o elemento for menor, atualiza o índíce do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índíce do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


numbers = [2, 3, 4, 10, 40]
target = 40

# result = binary_search(numbers, target)
# print(f"Elemento encontrado na posição: {result}")


def calculations(n):  # Ordem de Complexidade, O(n + n² + n³).
    number1 = 0
    for n1 in range(n):
        number1 += n1

    number2 = 0
    for n1 in range(n):
        for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
        for n2 in range(n):
            for n3 in range(n):
                number3 += n1 + n2 + n3

    return number1, number2, number3


n1, n2, n3 = calculations(100)
print(f"{n1}, {n2}, {n3}")


def linear_search(numbers, target):
    n = len(numbers)  # N será a quantidade de elementos da lista
    for index in range(0, n):  # vamos iterar a lista completa
        if numbers[index] == target:  # se encontrar o elemento alvo, retorne a posição
            return index

    return -1  # Não encontrou? Retorne -1


print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1


"""
Constantes: O(1);
Logarítmicos: O(log n);
Linear: O(n);
Quadráticos: O(n²);
Cúbicos: O(n³);
Exponencial: O(2ⁿ);
Fatorial: O(n!).
"""
