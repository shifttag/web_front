const city = "cuttack"
const apikey = "30c3d20b88379d841ed1cb7e8dda9873"; // API사이트에서 제공하는 개인 API_KEY
const lang = "kr";

const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=${lang}&units=metric`;

getWeatherData();
async function getWeatherData() {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    let weather = data.weather[0].main;
    let temp = data.main.temp;
    let mintemp = data.main.temp_min;
    let maxtemp = data.main.temp_max;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;
    let cloudy = data.clouds.all / 100;

    console.log(weather);
  } catch (error) {
    console.error("Error:", error);
  }
}
