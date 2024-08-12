
function input(e){
try {
  let input = Number(prompt(e));
  

  if(isNaN(input)){
    throw new Error('숫자를 입력하세요');
  }
  return input;

} catch(error){
  console.error(error.message);
  return null;
}

}

let a = input('첫 번째 숫자를 입력하세요');
let b = input('두 번째 숫자를 입력하세요');
let c = input('세 번째 숫자를 입력하세요');

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


