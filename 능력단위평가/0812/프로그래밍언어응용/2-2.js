const userInput = "Hello World";

let a = userInput.trim();
console.log(a);

let b = a.split(' ').join('');
console.log(b);


let c = b.split('').reverse().join('');
console.log(c);

let d = c.toUpperCase();
console.log(d);

let str = userInput.trim().split(' ').join('').split('').reverse().join('');
console.log(str);