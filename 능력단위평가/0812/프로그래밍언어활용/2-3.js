class Car{
  constructor(num, start, end){
    this.num = num;
    this.start = start;
    this.end = null;
  }
}

  

class Parking{
  constructor(){
    this.cars = [];
  }

  // 차량 입차
  inCar(num){
    let start = Date.now();
    const newCar = new Car(num ,start);
    this.cars.push(newCar);
    console.log(`${num} 차량이 입차되었습니다.`);
  }

  // 차량 출고
  outCar(num) {
    let end = Date.now();
    const car = this.cars.find(car => car.num === num);
    
    if (car) {
      car.end = end;
      let start = car.start;
      let timeout = (car.end - start) / (1000 * 60);

      if (timeout < 10) {
        console.log("공짜입니다.");
      } else {
        let fee = timeout * 1000;
        console.log(`주차 요금은 : ${fee}원 입니다.`);
      }

      // 차량 출고 시 금액 결제 후 삭제
      this.cars = this.cars.filter(car => car.num !== num);
    } else {
      console.log('등록된 차량이 없습니다');
    }
  }

  display() {
    let displayCar = this.cars.map(car => car.num);
    console.log("현재 주차장에 있는 차량들:" + displayCar);
  }
}

const parkingNumber = new Parking();
parkingNumber.inCar('7011');
parkingNumber.outCar('7011');
parkingNumber.outCar('9083'); 
console.log(parkingNumber);
parkingNumber.inCar('7011');
console.log(parkingNumber);
parkingNumber.display();