let isCelsius = true;

function generateRandomTemperature() {
  // Simulate fetching temperature data (replace with actual data from sensors)
  return Math.random() * 30 + 10; // Generating a random temperature between 10 to 40 degrees Celsius for demonstration
}

function updateTemperatureDisplay() {
  const temperatureValueElement = document.getElementById('temperatureValue');
  const temperatureUnitElement = document.getElementById('temperatureUnit');

  const temperature = generateRandomTemperature();
  temperatureValueElement.innerText = temperature.toFixed(2);
  temperatureUnitElement.innerText = getTemperatureUnit();
}

function getTemperatureUnit() {
  return isCelsius ? '°C' : '°F';
}

function toggleTemperatureUnit() {
  isCelsius = !isCelsius;
  updateTemperatureDisplay();
}

// Update temperature display on page load
updateTemperatureDisplay();

// Update temperature display every 5 seconds (for demonstration)
setInterval(updateTemperatureDisplay, 5000);

function generateRandomTemperature() {
  // Simulate temperature data with fluctuations
  const baseTemperature = isCelsius ? 25 : 77; // Base temperature in Celsius or Fahrenheit
  const fluctuation = (Math.random() * 5 - 2.5); // Random fluctuation between -2.5 to 2.5

  return baseTemperature + fluctuation;
}

  // Update temperature icon and color based on temperature range
  if (temperature < 10) {
    temperatureIcon.className = 'fas fa-thermometer-empty';
    temperatureValueElement.style.color = '#4CAF50';  // Green color for colder temperatures
  } else if (temperature < 25) {
    temperatureIcon.className = 'fas fa-thermometer-half';
    temperatureValueElement.style.color = '#FFEB3B';  // Yellow color for moderate temperatures
  } else {
    temperatureIcon.className = 'fas fa-thermometer-full';
    temperatureValueElement.style.color = '#FF5722';  // Red color for warmer temperatures
  }

  // Smooth animation for temperature update
  temperatureValueElement.classList.remove('animate');
  void temperatureValueElement.offsetWidth; // Trigger reflow to restart the animation
  temperatureValueElement.classList.add('animate');


function getTemperatureUnit() {
  return isCelsius ? '°C' : '°F';
}

function toggleTemperatureUnit() {
  isCelsius = !isCelsius;
  updateTemperatureDisplay();
}

// Update temperature display on page load
updateTemperatureDisplay();

// Update temperature display every 5 seconds with a smooth animation
setInterval(updateTemperatureDisplay, 5000);
