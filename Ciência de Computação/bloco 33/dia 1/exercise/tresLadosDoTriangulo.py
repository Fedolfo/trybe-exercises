def type_of_triangle(a, b, c):
    if not (a, b, c):
        return "Não é um triângulo"
    if a == b == c:
        return "Triângulo Equilátero: três lados iguais"
    elif a == b or a == c or b == c:
        return "Triângulo Isósceles: quaisquer dois lados iguais"
    else:
        return "Triângulo Escaleno: três lados diferentes"


type_of_triangle(1, 2, 3)
type_of_triangle(1, 1, 1)
type_of_triangle(1, 2, 2)
