const p = document.querySelector('p');
const Button = document.querySelector('button');
Button.onclick = function() {
  p.textContent = '버튼이 클릭되었습니다!';
  console.log('Button clicked!');
}


