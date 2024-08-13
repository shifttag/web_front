var date = new Date();

const days_week = ['sunday', 'monday', 'tuesday', 'wenesday', 'thursday', 'friday', 'saturday'];
const days_month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = days_week[date.getDay()]
const months = days_month[date.getMonth()];
const dates = date.getDate();
const years = date.getFullYear();

let date1 = document.querySelector('#header');
date1.textContent = `${days}, ${months} ${dates}, ${years}`

let toggle = false;


document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('ellipse');
  const back = document.getElementById('weather-container');
  button.addEventListener('click', () => {
    toggle = !toggle;

    if(toggle === true){
      button.style.left = '1335px';
      back.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    } else {
      button.style.left = '1367px';
      back.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    }
  })
})
// 날씨 정보를 가져오는 비동기 함수
const city = "Seoul";
const apikey = "b3d2a174bd0bf979992c01994dd21eea";  // 수정
const lang = "kr";

const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

async function getWeatherData() {
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log(data.main.temp);
    } catch (error) {
        console.error('Error:', error);
    }
}

getWeatherData();

function updateWeatherUI(data){
  const weatherInfo = `
    <p>온도: ${data.current.temp_c}</p>
  `;

  document.getElementById('weather-info').innerHTML = weatherInfo;
}



