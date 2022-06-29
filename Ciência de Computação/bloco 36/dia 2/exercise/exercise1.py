def pair_numbers_not_recursive(n):
    even_count = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            even_count += 1
    return even_count


print(pair_numbers_not_recursive(10))
