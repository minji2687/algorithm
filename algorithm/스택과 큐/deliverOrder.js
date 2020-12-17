function Customer(name, order) {
  this.name = name;
  this.order = order;
}

function Cashier() {
  this.customers = [];
}

Cashier.prototype.addOrder = function (customer) {
  this.customers.push(customer);
};

Cashier.prototype.deliverOrder = function () {
  let finishedCustomer = this.customers.shift();

  try {
    console.log(
      `${finishedCustomer.name} your ${finishedCustomer.order} is ready!`
    );
  } catch {
    throw new Error("No Order");
  }
};

const customer1 = new Customer("Jin", "Fries");
const customer2 = new Customer("Sammie", "Burger");
const customer3 = new Customer("Peter", "Drink");

const cashier1 = new Cashier();

cashier1.addOrder(customer1);
cashier1.addOrder(customer2);
cashier1.addOrder(customer3);
cashier1.deliverOrder();
cashier1.deliverOrder();
cashier1.deliverOrder();
cashier1.deliverOrder();
cashier1.deliverOrder();
