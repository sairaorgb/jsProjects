document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const errorMsg = document.getElementById("error-message");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");

  const apiKey = "e3788168ef4876915ffc0e5ba25d3c21";

  getWeatherBtn.addEventListener("click", async () => {
    const cityName = cityInput.value.trim();

    let response = await fetchData();

    response = await response.json();

    let msglink = response["message"];

    let img = document.createElement("img");

    img.setAttribute("src", msglink);
    img.setAttribute("alt", "doggie");
    weatherInfo.appendChild(img);
    // displayData(response);
    weatherInfo.classList.remove("hidden");
  });

  async function fetchData(city) {
    const cityname = city;
    try {
      // const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      // );
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      return response;
    } catch (error) {
      new showError("failed to get response");
    }
  }

  function displayData(data) {
    const { city, list } = data;
    cityName.textContent = city.name;
    temperature.textContent = list[0].main.temp;
    description.textContent = list[0].weather[0].description;

    weatherInfo.classList.remove("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
});
