from abc import ABC, abstractmethod


class Grafico:  # code smell
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self, tipo_de_grafico):
        if tipo_de_grafico == "GraficoBarras":
            self.__desenharGraficoBarras()

        if tipo_de_grafico == "GraficoRadar":
            self.__desenharGraficoBarras()

        if tipo_de_grafico == "GraficoPizza":
            self.__desenharGraficoBarras()

    def __desenharGraficoBarras(self):
        print("Lógica para gráfico de barras")

    def __desenharGraficoRadar(self):
        print("Lógica para gráfico radar")

    def __desenharGraficoPizza(self):
        print("Lógica para gráfico de Pizza")


grafico_smell = Grafico([1, 2])
grafico_smell.desenhar("GraficoRadar")


class Grafico(ABC):
    @abstractmethod
    def desenhar(self):
        raise NotImplementedError


class GraficoBarras():
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico de barras")


class GraficoRadar():
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico radar")


class GraficoPizza():
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self):
        print("Lógica para gráfico de Pizza")


grafico_1 = GraficoRadar([1, 2])
grafico_1.desenhar()
