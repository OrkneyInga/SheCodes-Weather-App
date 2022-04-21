function showWeather(response) {
  let temperature = document.querySelector(".current-temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
  console.log(response);
  let windSpeed = document.querySelector(".wind");
  windSpeed.innerHTML = `Wind Speed: ${Math.round(response.data.wind.speed)}`;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = `Humidity: ${Math.round(response.data.main.humidity)}%`;
  let currentConditions = document.querySelector(".current-conditions");
  currentConditions.innerHTML = response.data.weather[0].description;
}

function searchCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  let apiKey = "235db3f842ef7e9844d677cca79bacc7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  console.log(apiUrl);

  axios.get(apiUrl).then(showWeather);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let now = new Date();

function setCurrentTime(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let todayDay = days[date.getDay()];

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${todayDay} ${hours}:${minutes}`;
}
let date = document.querySelector(".current-day");
date.innerHTML = setCurrentTime(now);

function convertToFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemp = document.querySelector(".current-temp");
  let convertF = Math.round((6 * 9) / 5 + 32);
  fahrenheitTemp.innerHTML = convertF;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertToFahrenheit);

function convertToCelcius(event) {
  event.preventDefault();
  let celciusTemp = document.querySelector(".current-temp");
  let convertC = Math.round(((43 - 32) * 5) / 9);
  celciusTemp.innerHTML = convertC;
}
let celcius = document.querySelector("#celcius-link");
celcius.addEventListener("click", convertToCelcius);

function currentPosition(position) {
  console.log(position);
}

navigator.geolocation.getCurrentPosition(currentPosition);
