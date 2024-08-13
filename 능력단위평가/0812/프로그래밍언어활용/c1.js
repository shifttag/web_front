class ShoppingCart {
  constructor() {
    this.items = []; // 변수 명명 규칙 수정
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) { // 반복문 조건 수정
      total += this.items[i].price;
    }
    return total;
  }

  printReceipt() {
    if (this.items.length === 0) { // 조건문 수정
      console.log("Your cart is empty.");
    } else {
      console.log("Receipt:");
      this.items.forEach(item => { // 화살표 함수 사용
        console.log(`${item.name}: $${item.price}`);
      });
      console.log(`Total: $${this.calculateTotal()}`);
    }
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 1.5 });
cart.addItem({ name: "Banana", price: 2.0 });
cart.printReceipt();


class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) { 
      total += this.items[i].price; // error 
    }
    return total;
  }

  printReceipt() {
    if (this.items.length === 0) {
      console.log("Your cart is empty.");
    } else {
      console.log("Receipt:");
      this.items.forEach(item => { // error
        console.log(`${item.name}: $${item.price}`);
      });
      console.log(`Total: $${this.calculateTotal()}`);
    }
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 1.5 });
cart.addItem({ name: "Banana", price: 2.0 });
cart.printReceipt();
