let toggle = false;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('ellipse');
  button.addEventListener('click', () => {
    toggle = !toggle;

    if(toggle === true){
      button.style.left = '1330px';
    } else {
      button.style.left = '1367px';
    }
  })
})