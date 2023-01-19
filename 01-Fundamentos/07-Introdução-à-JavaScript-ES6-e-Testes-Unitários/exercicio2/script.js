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
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  

  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const deliveryTo = order.name;
    const celNumber = order.phoneNumber;
    const addressStreet = order.address.street;
    const adressNumber = order.address.number;
    const adressAp = order.address.apartment;
    return `Olá ${deliveryPerson}, entrega para: ${deliveryTo}, Telefone: ${celNumber}, ${addressStreet}, Nº: ${adressNumber}, AP: ${adressAp}`
  };

  console.log(customerInfo(order));
  ;

  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  console.log(pizza);
  }
  
  orderModifier(order);