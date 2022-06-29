def pair_numbers_recursive(n):
    if n == 1:  # caso base
        return 0
    elif n % 2 == 0:
        return 1 + pair_numbers_recursive(n - 1)
    else:
        return pair_numbers_recursive(n - 1)


print(pair_numbers_recursive(10))
