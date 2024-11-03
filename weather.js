const apiKey = '7d4f7b257efa9c21e37e66d9ef44a6fd';  // Replace with your OpenWeatherMap API key
  
      async function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          displayWeather(data);
          checkWeatherAlert(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = '<p>Unable to fetch weather data.</p>';
          weatherInfo.classList.add('hidden');
        }
      }
  
      function displayWeather(data) {
        const weatherInfo = document.getElementById('weatherInfo');
        if (data.cod !== '404') {
          const location = document.getElementById('location');
          const description = document.getElementById('description');
          const temperature = document.getElementById('temperature');
          const humidity = document.getElementById('humidity');
          const windSpeed = document.getElementById('wind-speed');
  
          location.innerText = `Weather in ${data.name}, ${data.sys.country}`;
          description.innerText = data.weather[0].description;
          temperature.innerText = `Temperature: ${data.main.temp}°C`;
          humidity.innerText = `Humidity: ${data.main.humidity}%`;
          windSpeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;
  
          const icon = data.weather[0].icon;
          const weatherIcon = document.querySelector('.weather-icon i');
          weatherIcon.className = `fas fa-${getWeatherIcon(icon)}`;
          
          weatherInfo.classList.remove('hidden');
        } else {
          weatherInfo.innerHTML = '<p>City not found.</p>';
          weatherInfo.classList.add('hidden');
        }
      }
  
      function checkWeatherAlert(data) {
        const weatherAlert = document.getElementById('weatherAlert');
        if (data.weather[0].main === 'Rain') {
          const alertMessage = document.querySelector('#weatherAlert .alert-message p');
          alertMessage.innerText = 'Weather Alert: Heavy rain expected.';
          weatherAlert.classList.remove('hidden');
        } else {
          weatherAlert.classList.add('hidden');
        }
      }
  
      function searchWeather() {
        const cityInput = document.getElementById('cityInput');
        const city = cityInput.value;
        fetchWeather(city);
      }
  
      function getWeatherIcon(iconCode) {
        // Map OpenWeatherMap icon codes to Font Awesome icons
        const iconMappings = {
          '01d': 'sun',
          '01n': 'moon',
          '02d': 'cloud-sun',
          '02n': 'cloud-moon',
          '03d': 'cloud',
          '03n': 'cloud',
          '04d': 'clouds',
          '04n': 'clouds',
          '09d': 'cloud-showers-heavy',
          '09n': 'cloud-showers-heavy',
          '10d': 'cloud-rain',
          '10n': 'cloud-rain',
          '11d': 'bolt',
          '11n': 'bolt',
          '13d': 'snowflake',
          '13n': 'snowflake',
          '50d': 'smog',
          '50n': 'smog'
        };
        return iconMappings[iconCode] || 'question';
      }
      