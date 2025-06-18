document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("getWeatherBtn");
  const weatherDiv = document.getElementById("weatherData");

  // Replace this with your own API key from https://openweathermap.org/api
  const API_KEY = "YOUR_API_KEY_HERE"; 

  button.addEventListener("click", () => {
    weatherDiv.textContent = "Loading weather data...";

    // URL to fetch weather for London, metric units (Celsius)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Data example: data.weather is an array; we want data.weather[0].main (like Clouds, Clear)
      if (data && data.weather && data.weather.length > 0) {
        const weatherMain = data.weather[0].main;
        weatherDiv.textContent = `Current weather in London: ${weatherMain}`;
      } else {
        weatherDiv.textContent = "Weather data not available.";
      }
    })
    .catch(err => {
      weatherDiv.textContent = `Error fetching weather data: ${err.message}`;
    });
  });
});
