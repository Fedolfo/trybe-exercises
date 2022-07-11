def mdc(a, b):
    while b:
        a, b = b, a % b
    return a


print(mdc(70, 25))


def mdc(a, b):
    return a if not b else mdc(b, a % b)


print(mdc(70, 25))

from math import gcd

print(gcd(70, 25))  # 5
