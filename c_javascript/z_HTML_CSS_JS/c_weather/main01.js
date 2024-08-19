var date = new Date();

const days_week = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const days_month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = days_week[date.getDay()];
const months = days_month[date.getMonth()];
const dates = date.getDate();
const years = date.getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("ellipse");
  let date1 = document.querySelector("#header");
  date1.textContent = `${days}, ${months} ${dates}, ${years}`;

  let toggle = false;
  button.addEventListener("click", () => {
    toggle = !toggle;

    if (toggle === true) {
      button.style.left = "1335px";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      header.style.color = "#fff";
      weather_info.style.color = "#fff";
      Rectangle.style.color = "#fff";
      theme.style.backgroundColor = "#D9D9D9";
      ellipse.style.backgroundColor = "#4B4B4B";
    } else {
      button.style.left = "1367px";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
      header.style.color = "#000";
      weather_info.style.color = "#000";
      Rectangle.style.color = "#000";
      theme.style.backgroundColor = "#4F4F4F";
      ellipse.style.backgroundColor = "#F5F5F5";
    }
  });                           
});
// 날씨 정보를 가져오는 비동기 함수
let city = "Seoul";
function research() {
re = document.getElementById('input')
if(re === ''){
    city = re;
} else{
    city = 'Seoul'
}
}
// >> input창에서 입력받을 경우 capitalize 사용

// ex) London, Tokyo etc..
const apikey = "30c3d20b88379d841ed1cb7e8dda9873"; // API사이트에서 제공하는 개인 API_KEY
const lang = "kr";

const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}&lang=${lang}&units=metric

// ?q=${city}&lang=${lang}&units=metric

// >> 제공된 API를 사용하여 지역의 이름을 바탕으로
// >> 해당 날씨에 대한 데이터를 lang(언어)속성을 지정하여 원하는 언어로 호출
// >> &units=metric: 시간이 지남에 따라 변화하는 데이터를 의미
getWeatherData();
async function getWeatherData() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // API로 가져오는 데이터는 JSON 문자열 형식
    // >> 객체로 변환
    const data = await response.json();

    const temperature = document.querySelector("#temperature");
    const tem2 = document.querySelector("#tem2");
    const tem3 = document.querySelector("#tem3");
    const tem4 = document.querySelector("#tem4");
    const tem5 = document.querySelector("#tem5");

    let weather = data.weather[0].main;
    let temp = data.main.temp;
    let mintemp = data.main.temp_min;
    let maxtemp = data.main.temp_max;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let cloudy = data.clouds.all / 100;

    temperature.textContent = temp + "℃";
    tem2.textContent = `${mintemp}℃ / ${maxtemp}℃`;
    tem3.textContent = humidity + "%";
    tem4.textContent = wind + "km/h";
    tem5.textContent = cloudy + "%";
    backgroundimg(weather);
  } catch (error) {
    console.error("Error:", error);
  }
}

function backgroundimg(weather) {
  const weather_container = document.querySelector("#weather_container");
  const weather_image = document.querySelector("#weather_image");
  switch (weather) {
    case "Sunny":
      weather_container.backgroundimg = "url(./images/sunny.jpg)";
      weather_image.textContent = "🌤️";
      break;
    case "Cloudy":
      weather_container.backgroundimg = "url(./images/cloudy.jpg)";
      weather_image.textContent = "☁️";
      break;
    case "Rainy":
      weather_container.backgroundimg = "url(./images/rainy.jpg)";
      weather_image.textContent = "🌧️";
      break;
    case "Snow":
      weather_container.backgroundimg = "url(./images/snow.jpg)";
      weather_image.textContent = "☀";
      break;
  }
}

function updateWeatherUI(data) {
  const weatherInfo = `
    <p>온도: ${data.current.temp_c}</p>
  `;

  document.getElementById("weather_info").innerHTML = weatherInfo;
}
/*
! coord: 좌표 정보

lon: 경도 (126.9778)
lat: 위도 (37.5683)

! weather: 날씨 상태에 대한 정보 (배열로 표현)

id: 날씨 조건 ID (800, 이 경우 맑음을 나타냄)
main: 날씨의 주 상태 ('Clear', 맑음)
description: 날씨 설명 ('맑음')
icon: 날씨 아이콘 코드 ('01d')
base: 기지 데이터 (기상 관측의 출처, 'stations')

! main: 주요 기상 데이터

temp: 현재 온도 (35.96°C)
feels_like: 체감 온도 (42.59°C)
temp_min: 최저 기온 (33.69°C)
temp_max: 최고 기온 (36.66°C)
pressure: 기압 (1006 hPa)
humidity: 습도 (49%)
sea_level: 해수면 기준 기압 (1006 hPa)
grnd_level: 지상 기준 기압 (1000 hPa)

! visibility: 가시 거리 (10000미터)

! wind: 바람 정보

speed: 바람 속도 (3.09m/s)
deg: 바람의 방향 (320도, 북서풍)

! clouds: 구름 정보

all: 구름의 양 (0%, 맑은 날씨)

! dt: 데이터 계산 시간 (Unix 타임스탬프, 1723530221)

! sys: 시스템 정보

type: 시스템 타입 (1)
id: 시스템 ID (8105)
country: 국가 코드 ('KR', 대한민국)
sunrise: 일출 시간 (Unix 타임스탬프, 1723495575)
sunset: 일몰 시간 (Unix 타임스탬프, 1723544872)

! timezone: 시간대 오프셋 (32400초, 즉 GMT+9)

! id: 도시 ID (1835848, 서울)
! name: 도시 이름 ('Seoul')
! cod: 응답 코드 (200, 성공적인 응답)

# ===== #
서울의 현재 날씨가 맑고, 기온이 35.96°C이며, 체감 온도는 42.59°C

습도는 49%이며, 바람은 북서쪽에서 3.09m/s 속도 불고있음

구름은 거의 없고 가시 거리는 10km

일출과 일몰 시간은 Unix 타임스탬프로 출력 - 한국 표준시(GMT+9) 기준

* ===== main: 날씨의 주 상태 ('Clear', 맑음) ===== *
Clear: 맑음
Clouds: 구름 많음
Rain: 비
Drizzle: 이슬비
Thunderstorm: 뇌우 (천둥번개)
Snow: 눈
Mist: 안개
Smoke: 연기
Haze: 실안개
Dust: 먼지
Fog: 짙은 안개
Sand: 모래
Ash: 화산재
Squall: 돌풍
Tornado: 토네이도
*/
