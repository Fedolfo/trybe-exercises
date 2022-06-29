def most_number_list(list, size):
    if size == 1:
        return list[0]
    else:
        most_rest_number_list = most_number_list(list, size - 1)
        if most_rest_number_list > list[size - 1]:
            return most_rest_number_list
        else:
            return list[size - 1]


def most_number(list):
    size = len(list)
    return most_number_list(list, size)


print(most_number([1, 21, 300, 4, 57]))
