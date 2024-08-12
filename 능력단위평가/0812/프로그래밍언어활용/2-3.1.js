//! 차량 관리 시스템

//# 프로젝트 기능 정의

// 1) 주차장 (객체)
// 속성: 여러 차량
// 기능
// - 차량 추가
// - 차량 목록 출력
// - 특정 차량 입차 서비스
// - 특정 차량 출차 서비스

// 2) 차 (객체)
// 속성: 차 번호판 / 차량 이름 / 차량 회사 / 차랑 입차, 출차 여부

//# 프로젝트 구현
//? Car 클래스: 각 차의 정보 저장 & 입출차 관리

class Car {
  constructor(numbers, name, company) {
    this.numbers = numbers;
    this.name = name;
    this.company = company;
    this.isExisted = true;
  }

  outServise() {
    if(this.isExisted) {
      this.isExisted = false;
      console.log(`${this.numbers} - ${this.name}은 출차서비스 가능힙니다.`);
    } else {
      console.log(`${this.numbers} - ${this.name}은 존재하지 않습니다.`);
    }
  }

  enter() {
    this.isExisted = true;
    console.log(`${this.numbers} - ${this.name}은 입차 서비스 가능합니다.`);
  }
}


//? PackingArea 클래스: Car 객체 목록 관리 (차량 추가, 출력, 차량 존재 유무(출차가능))
class ParkingArea {
  constructor() {
    this.cars = [];
  }

  // 차량 추가
  addCar(numbers, name, company) {
    const newCar = new Car(numbers, name, company);
    this.cars.push(newCar);
    console.log(`${numbers} - ${name}: 차량이 입차하였습니다.`);
  }

  // 차량 목록 출력
  displayCars() {
    console.log('==== ParkingList ====');
    this.cars.forEach(car => {
      console.log(`${car.numbers} - ${car.name}(${car.company}): ${car.isExisted ? '(입차중)출차서비스가능' : '(출차중)입차서비스가능'}`);
    });
  }

  // 특정 번호 차량 출차 서비스(입차중일때)
  outCar(numbers) {
    const car = this.cars.find(car => car.numbers === numbers);

    if(car) {
      car.outServise();
      // 입차 유무 확인 -> 출차서비스 가능한지
    } else {
      console.log('해당 차량 없습니다.');
    }
  }

  // 특정 번호 차량 입차 서비스
  inCar(numbers) {
    const car = this.cars.find(car => car.numbers === numbers);

    if(car) {
      car.enter();
      // 입차 서비스 가능한지
    } else {
      console.log('해당 차량 출차 중입니다.');
    }
  }
}

const newParkingArea = new ParkingArea();
newParkingArea.addCar('1234', 'a차량', 'a회사');
newParkingArea.addCar('5678', 'b차량', 'b회사');
newParkingArea.addCar('9123', 'c차량', 'c회사');

newParkingArea.displayCars();

newParkingArea.outCar('1234');
newParkingArea.displayCars();

newParkingArea.inCar('1234');
newParkingArea.displayCars();