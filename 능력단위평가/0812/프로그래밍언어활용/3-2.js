numbers = [3, 2, 5, 1, 4];
let sum = 0;

function calculateSum(){
for (let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
  alert(`합은 ${sum} 입니다.`)
}

calculateSum();