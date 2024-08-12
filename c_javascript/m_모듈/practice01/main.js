// main.js

// 1) add
// : Named Import
import { add } from './mathModule.js';

// 2) subtract
// : Default Import
import subtraction from './mathModule.js';

// 3) multiply
// : Named Import (as구문: mp)
import { multiply as mp } from './mathModule.js';

// 4) divide
// : 모듈 전체 가져오기 (as 구문: math)
import * as mathModule from './mathModule.js';

console.log(add(10, 5));
console.log(subtraction(10, 5));
console.log(mp(10, 5));
console.log(mathModule.divide(10, 5));

// cf) 프로그래밍에서 0으로 나누는 경우
// >> 보통 0으로 나누는 경우 오류 발생
// >> 나누는 값(b)이 0이 되지 않도록 조건문
console.log(mathModule.divide(10, 0));