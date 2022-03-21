class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if(value.length > 6) {
      throw new Error('Por favor insira o seu nome completo');
    }
    this._name = value;
  }
}

class OrderClient {
  private _name: string;
  private _price: number;
  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 2) {
      throw new Error('Não temos esse lanche em estoque');
    }
    this._name = value;
  }

  get price() {
    return this._price;
  }

  set price(value: number) {
    if(value < 0) {
      throw new Error('Não e permitido valores negativos');
    }
    this._price = value;
  }

}

class Dashboard {
  private _name: Client;
  private _order: OrderClient[];
  private _payment: string;
  private _discount: number;

  constructor(client: Client, order: OrderClient[], payment: string, discount: number) {
    this._name = client;
    this._order = order;
    this._payment = payment;
    this._discount = discount;
  }

  get name() {
    return this._name;
  }

  set name(value: Client) {
    this._name = value;
  }

  get order() {
    return this._order;
  }

  set order(value: OrderClient[]) {
    if(value.length === 0) {
      throw new Error('Deve ter um item para o registro')
    }

    this._order = value;
  }

  get payment() {
    return this._payment;
  }

  set payment(value: string) {
    if(value === 'dinheiro' || value === 'pix' || value === 'cartão') {
      throw new Error('aceitamos apenas dinheiro, pix ou cartão');
    }
    this._payment = value;
  }

  get discount() {
    return this._discount;
  }

  set discount(value: number) {
    if(value < 0) {
      throw new Error('Não e possivel ter valores negativos');
    }
    this._discount = value;
  }

  calculateTotal(): number {
    return this.order.
        reduce((previousValue, item) => {
            const total = previousValue += item.price;

            return total;
        }, 0)
  }

  calculateTotalWithDiscount(): number {
      return this.calculateTotal() * (1 - this.discount);
  }

}

const client = new Client('João');

const sandwiche = new OrderClient('Sandwiche Natural', 5.00);
const juice = new OrderClient('Suco de Abacaxí', 5.00);
const dessert = new OrderClient('Gelatina de Uva', 2.50);

const order = new Dashboard(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());