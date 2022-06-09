from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%%s de %s>" % (self.valor, self.naipe)


class Iterador_cartas(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.indice = 0

    def __next__(self):
        if self.indice >= len(self.cartas):
            raise StopIteration
        carta = self.cartas[self.indice]
        self.indice += 1
        return carta


class Reverse_iterador_cartas(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.indice = len(cartas)

    def __next__(self):
        if self.indice <= 0:
            raise StopIteration
        carta = self.cartas[self.indice - 1]
        self.indice -= 1
        return carta


class Baralho(Iterador_cartas):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe) for naipe in self.naipes for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return Iterador_cartas(self._cartas)


class Baralho_invertido(Baralho):
    def __iter__(self):
        return Reverse_iterador_cartas(self._cartas)


baralho = Baralho_invertido()
print((baralho))

# usando strategy

from abc import ABC, abstractmethod
from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas, estrategia):
        self._cartas = cartas
        self._estrategia = estrategia
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos = self._estrategia.proxima_carta(self._pos)
            return carta


class EstrategiaIteracao(ABC):
    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaIteracao):
    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe) for naipe in self.naipes for valor in self.valores
        ]
        self.estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self.estrategia)
