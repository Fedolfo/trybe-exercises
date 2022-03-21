var Client = /** @class */ (function () {
    function Client(name) {
        this._name = name;
    }
    Object.defineProperty(Client.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length > 6) {
                throw new Error('Por favor insira o seu nome completo');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
var OrderClient = /** @class */ (function () {
    function OrderClient(name, price) {
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(OrderClient.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 2) {
                throw new Error('Não temos esse lanche em estoque');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderClient.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Não e permitido valores negativos');
            }
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return OrderClient;
}());
var Dashboard = /** @class */ (function () {
    function Dashboard(client, order, payment, discount) {
        this._name = client;
        this._order = order;
        this._payment = payment;
        this._discount = discount;
    }
    Object.defineProperty(Dashboard.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (value) {
            if (value.length === 0) {
                throw new Error('Deve ter um item para o registro');
            }
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "payment", {
        get: function () {
            return this._payment;
        },
        set: function (value) {
            if (value === 'dinheiro' || value === 'pix' || value === 'cartão') {
                throw new Error('aceitamos apenas dinheiro, pix ou cartão');
            }
            this._payment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Não e possivel ter valores negativos');
            }
            this._discount = value;
        },
        enumerable: false,
        configurable: true
    });
    Dashboard.prototype.calculateTotal = function () {
        return this.order.
            reduce(function (previousValue, item) {
            var total = previousValue += item.price;
            return total;
        }, 0);
    };
    Dashboard.prototype.calculateTotalWithDiscount = function () {
        return this.calculateTotal() * (1 - this.discount);
    };
    return Dashboard;
}());
var client = new Client('João');
var sandwiche = new OrderClient('Sandwiche Natural', 5.00);
var juice = new OrderClient('Suco de Abacaxí', 5.00);
var dessert = new OrderClient('Gelatina de Uva', 2.50);
var order = new Dashboard(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);
console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());
