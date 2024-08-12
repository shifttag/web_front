// 다음 코드는 일부 오류가 포함된 애플리케이션 코드입니다. 코드에는 변수 명명 규칙, 조건문, 반복문과 관련된 문제가 있습니다. 코드를 분석하고, 오류를 찾아 수정하세요

class ShoppingCart {
  constructor() {
    this.items = [];  // 변수 명명 규칙 수정 (변수명명: 항상 소문자로 시작)
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) { /* 반복문 수정 (items의 길이를 크거나 같다일 때 total구할때 items[i]의 마지막 인덱스 번호가 없기때문에 수정) 
      ex) this.items.length 가 2라면 items의 인덱스 번호는 0번과 1번까지 있다 조건부를 i <= this.items.length로 두면 i가 2일때도 참이기 때문에 total식에서 this.items[2].price 에서 this.items[2]라는 인덱스가 없기 때문에 오류가 난다 */
      total += this.items[i].price; 
    }
    return total;
  }

  printReceipt() {
    if (this.items.length === 0) {  // 조건문 수정 (this.items.length = 0 으로 대입연산자 사용이 아니라 비교연산자로 === 을 사용하여야 한다)
      console.log("Your cart is empty.");
    } else {
      console.log("Receipt:");
      this.items.forEach(function(item) {
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
