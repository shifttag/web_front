class User{
  constructor(name, age, email){
  this.name = name;
  this.age = age;
  this.email = email;
}
  printInfo(){
    console.log(`이름: ${this.name}, 나이: ${this.age}, 이메일: ${this.email}`);
  }
}

class Product{
  constructor(name, price){
  this.name = name
  this.price = price
  }
  printProduct(){
    console.log(`상품명: ${this.name}, 가격: ${this.price}`);
  }
}

class Order{
  constructor(user, product, quantity){
    this.user = user;
    this.product = product;
    this.quantity = quantity;
  }
  printOrderSummary(){
    const total = this.product.price * this.quantity;
    console.log(`총 주문 금액: ${total}`);
  }
}

const user1 = new User('홍길동', 30, 'fdsa879@naver.com');

const product1 = new Product('데스크탑', 1200000);

const order1 = new Order(user1, product1, 2);

user1.printInfo();
product1.printProduct();
order1.printOrderSummary();