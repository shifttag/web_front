const city = "Seoul";
const apikey = "30c3d20b88379d841ed1cb7e8dda9873";  // API사이트에서 제공하는 개인 API_KEY
const lang = "kr";

const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}&lang=${lang}&units=metric

// ?q=${city}&lang=${lang}&units=metric

// >> 제공된 API를 사용하여 지역의 이름을 바탕으로
// >> 해당 날씨에 대한 데이터를 lang(언어)속성을 지정하여 원하는 언어로 호출
// >> &units=metric: 시간이 지남에 따라 변화하는 데이터를 의미

async function getWeatherData() {
    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // API로 가져오는 데이터는 JSON 문자열 형식
        // >> 객체로 변환
        const data = await response.json();
        
          let weather = data.weather[0].main;
          let temp = data.main.temp;
          let mintemp = data.main.temp_min;
          let maxtemp = data.main.temp_max;
          let humidity = data.main.humidity;
          let wind = data.wind.speed;
          let cloudy = (data.clouds.all) / 100;
          console.log(`${weather}, ${temp}, ${mintemp}, ${maxtemp}, ${humidity}, ${wind}, ${cloudy}`);

          temperature.style.textContent = temp + '℃';
          tem2.style.textContent = `${mintemp}℃ / ${maxtemp}℃`;
          tem3.style.textContent = humidity;
          tem4.style.textContent = wind;
          tem5.style.textContent = cloudy
          backgroundimg(weather);
          
        
    } catch (error) {
        console.error('Error:', error);
    }
}
getWeatherData();