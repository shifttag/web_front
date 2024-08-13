// 숫자 입력을 받는 함수
function getNumberInput(promptMessage) {
  let input = prompt(promptMessage);
  let number = parseFloat(input);
  
  // 숫자가 아닌 경우 예외 처리
  if (isNaN(number)) {
      console.error("유효한 숫자를 입력하세요.");
      return null;
  }
  
  return number;
}

// 사용자로부터 세 개의 숫자 입력받기
let num1 = getNumberInput("첫 번째 숫자를 입력하세요:");
let num2 = getNumberInput("두 번째 숫자를 입력하세요:");
let num3 = getNumberInput("세 번째 숫자를 입력하세요:");

// 숫자가 유효한지 체크
if (num1 === null || num2 === null || num3 === null) {
  console.error("모든 입력값이 숫자가 아닙니다. 프로그램을 종료합니다.");
} else {
  // 세 숫자의 합
  let sum = num1 + num2 + num3;
  console.log(`세 숫자의 합: ${sum}`);
  
  // 세 숫자의 평균
  let average = sum / 3;
  console.log(`세 숫자의 평균: ${average}`);
  
  // 세 숫자 중 가장 큰 값
  let max = Math.max(num1, num2, num3);
  console.log(`세 숫자 중 가장 큰 값: ${max}`);
}
