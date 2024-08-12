function Input(e) {
  try {
      let input = prompt(e);
      let number = Number(input);

      if (isNaN(number)) {
          throw new Error("유효한 숫자를 입력하세요."); // 예외 발생
      }

      return number;
  } catch (error) {
      console.error(error.message); // 에러 메시지 출력
      return null;
  }
}

let a = Input('첫 번째 숫자를 입력하세요');
let b = Input('두 번째 숫자를 입력하세요');
let c = Input('세 번째 숫자를 입력하세요');

if(a === null || b === null || c === null){
  console.log('모든 입력값이 숫자가 아닙니다.');
} else{
// 1. 세 숫자의 합
let sum = a + b + c;
console.log(sum);

// 2. 세 숫자의 평균
ave = sum / 3;
console.log(ave);

// 3. 세 숫자 중 가장 큰 값
max = Math.max(a, b, c)
console.log(max);
}