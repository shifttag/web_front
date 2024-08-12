// 
const cars = [];
class Car{
  constructor(num, start, end){
    this.start = start;
    this.end = end;
    this.num = num;
  }

  in(){
    this.start = Date.now();
    cars.push(this.num,this.start, this.end ='');
  }
  out(){
    this.end = Date.now();
    cars.push(this.num ,this.start, this.end);
    const num1 = this.cars.find(car => car.num === num);
    cars.map(car => {
      if(num1 === this.num){
        fee();
      }
      console.log(num1);
  })
  console.log(this.num);
  console.log('등록된 차량이 없습니다');

}

  fee(){
    timeout = (this.end - this.start) / 60;
    if(timeout < 10){
      console.log("공짜입니다.");
    } else {
      let fee1 = timeout * 1000;
      console.log(`주차 요금은 : ${fee1}원 입니다.`);
    }
  }

  
}


const car1 = new Car('7021');
const car2 = new Car('1032');

car1.in();
car2.in();


console.log(car1);
console.log(car2);

car1.out('7021');
console.log(car1);
