from metodo_construtor_Inicializador import Liquidificador


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def __str__(self):
        return f'{self.nome} possui um {self.liquidificador}'


pessoa_cozinheira = Pessoa("Jacquin", 1000)
liquidificador_vermelho = Liquidificador('Vermelho', 250, 220)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
print(pessoa_cozinheira)
