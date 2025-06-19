document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const city = 'London';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById('weatherData').textContent = `Current weather in ${city}: ${weather}`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('weatherData').textContent = 'Failed to load weather data.';
    });
}
