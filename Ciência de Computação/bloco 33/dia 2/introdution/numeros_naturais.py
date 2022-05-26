enter_natural_numbers = input("Digite Números naturais separados em virgulas:")

for letters_number_natural in enter_natural_numbers.split(", "):
    if letters_number_natural.isdigit():
        print(letters_number_natural)
    elif letters_number_natural.isalpha():
        error = "Poxa não pode ter letras"
        print(f"{error}")
    elif letters_number_natural.split(",  "):
        error = "Poxa não pode ter dois espaços"
        print(f"{error}")
    else:
        error = "Poxa não pode ter outros caracteres"
        print(f"{error}")
