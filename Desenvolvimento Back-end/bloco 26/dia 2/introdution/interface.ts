interface Automovel {
  marca: string;
  velocidadeMaxima: string;
  cor: string;
  lancamento: Date;
  empresaPertecente: string;
}

interface Felino {
  raca: string;
  alimento: string;
  localizacao: string;
  idadeTotal: number;
}

interface Aeronave {
  marca: string;
  qtdAssentos: number;
  empresaPertecente: string;
  gasolina: number;
  saidaDeEmergencia: boolean;
  guardaMalas: boolean;
  lancamento: Date;
}