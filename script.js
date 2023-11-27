const apiKey = "044c56df325e9601bf5633bc78069128";
const apiId = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBtn = document.querySelector("#searchBtn");
let searchValue = document.querySelector("#inputBox");
// when i click on search button
searchBtn.addEventListener("click", () => {
  checkWeather(searchValue.value);
});

// when i press enter on input section
let inputBox = document.querySelector("#inputBox");
inputBox.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    checkWeather(searchValue.value);
  }
});

// functin that is responsable to fetch api
async function checkWeather(searchValue) {
  const response = await fetch(apiId + `&q=${searchValue}&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  let cityName = data.name;
  let cityTemp = data.main.temp;
  let weatherName = data.weather[0].description;
  let humidity = data.main.humidity;
  let windSpeed = data.wind.speed;
  let pressure = data.main.pressure;

  document.querySelector("#cityName").textContent = cityName;
  document.querySelector("#cityTemp").textContent = Math.round(cityTemp) + "°C";
  document.querySelector("#weatherName").textContent = weatherName;
  document.querySelector("#humidity").textContent = humidity + "%";
  document.querySelector("#windSpeed").textContent = windSpeed + " km/h";
  document.querySelector("#pressure").textContent = pressure;

  console.log(data);
  console.log("current weather " + data.weather[0].main);


  let weatherIcon = document.querySelector("#weatherIcon");
  switch (data.weather[0].main) {
    case `Mist`:
     weatherIcon.innerHTML = `<span class="material-symbols-outlined">
     mist
     </span>`;
     break;

    case `Rain`:
      weatherIcon.innerHTML = `<span class="material-symbols-outlined">
      weather_mix
      </span>`;
      break;

    case `Clouds`:
      weatherIcon.innerHTML = `<span class="material-symbols-outlined">
      cloud
      </span>`;
      break;

    case `Clear`:
      weatherIcon.innerHTML = `<span class="material-symbols-outlined">
      clear_day
      </span>`;

    default:
      break;
  }
}
