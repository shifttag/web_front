class Car{
  constructor(num, start, end){
    this.start = start;
    this.end = end;
    this.num = num;
  }
}

  

class parking{
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
  
  fee(){
    timeout = (this.end - this.start) / 60;
    if(timeout < 10){
      console.log("공짜입니다.");
    } else {
      let fee1 = timeout * 1000;
      console.log(`주차 요금은 : ${fee1}원 입니다.`);
    }
  }

  outCar(num){
    let end = Date.now();
    const car = this.cars.find(car => car.num === num);
    if(car){
      this.cars.end = end;
      let timeout = this.cars.end - this.cars.start;
      timeout /= timeout;
      

      if(timeout < 10){
        console.log("공짜입니다.");
      } else {
        let fee1 = timeout * 1000;
        console.log(`주차 요금은 : ${fee1}원 입니다.`);
      }
    } else{
      console.log('등록된 차량이 없습니다');
    }
    // 차량 출고 시 금액 결제 후 삭제
    this.cars = this.cars.filter(car => car.num !== num);

  }
  
}



const car1 = new parking();
car1.inCar('7011');
car1.outCar('7011');
car1.outCar('9083')
console.log(car1);
car1.inCar('7011');
console.log(car1);