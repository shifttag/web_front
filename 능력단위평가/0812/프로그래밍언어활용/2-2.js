// 다음 코드는 일부 오류가 포함된 애플리케이션 코드입니다. 코드에는 변수 명명 규칙, 조건문, 반복문과 관련된 문제가 있습니다. 코드를 분석하고, 오류를 찾아 수정하세요

class ShoppingCart {
  constructor() {
    this.items = [];  // 변수 명명 규칙 수정
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) { // 조건문 수정
      total += this.items[i].price; // error 
    }
    return total;
  }

  printReceipt() {
    if (this.items.length === 0) {  // 조건문 수정
      console.log("Your cart is empty.");
    } else {
      console.log("Receipt:");
      this.items.forEach(item => { // forEach문 수정
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
