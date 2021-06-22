const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const nameList2 = order['name'];
  const number = order['phoneNumber'];
  const listAddress = order['address'].street;
  const numberAdrress = order['address'].number;
  const numberApartment = order['address'].apartment;

  console.log(`Olá ${deliveryPerson} entrega para: ${nameList2}, Telefone: ${number}, R.${listAddress}, Nº: ${numberAdrress}, AP: ${numberApartment}.`);

  }

customerInfo(order);

const orderModifier = (order) => {
  const nameList = order['name'] = "Luiz Silva";
  const drink = order.order.drinks.coke.type
  const payment = order.payment.total = "50,00"
  console.log(`Olá ${nameList}, o total do seu pedido de muzzarella, calabresa e ${drink} é R$ ${payment}.`)
}

orderModifier(order);