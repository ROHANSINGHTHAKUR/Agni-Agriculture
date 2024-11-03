// Define a module for soil data handling
const SoilDataModule = (function() {
    let soilData = {
      nitrogen: 0,
      phosphorus: 0,
      potassium: 0
    };
  
    const setSoilData = (nitrogen, phosphorus, potassium) => {
      soilData = { nitrogen, phosphorus, potassium };
    };
  
    const getSoilData = () => soilData;
  
    return {
      setSoilData,
      getSoilData
    };
  })();
  
  // Define a module for soil health checking
  const SoilHealthModule = (function(SoilDataModule) {
    const determineSoilHealth = () => {
      const { nitrogen, phosphorus, potassium } = SoilDataModule.getSoilData();
      if (nitrogen > 50 && phosphorus > 30 && potassium > 40) {
        return 'Healthy Soil';
      } else {
        return 'Soil Needs Improvement';
      }
    };
  
    return {
      determineSoilHealth
    };
  })(SoilDataModule);
  
  // Define a module for UI interaction
  const UIModule = (function(SoilDataModule, SoilHealthModule) {
    const displaySoilHealth = () => {
      const resultDiv = document.getElementById('result');
      const { nitrogen, phosphorus, potassium } = SoilDataModule.getSoilData();
      const soilHealth = SoilHealthModule.determineSoilHealth();
  
      resultDiv.innerHTML = `<h2>Soil Health Result:</h2>
        <p>Nitrogen: ${nitrogen.toFixed(2)}%</p>
        <p>Phosphorus: ${phosphorus.toFixed(2)}%</p>
        <p>Potassium: ${potassium.toFixed(2)}%</p>
        <p>Result: ${soilHealth}</p>`;
    };
  
    return {
      displaySoilHealth
    };
  })(SoilDataModule, SoilHealthModule);
  
  // Usage example
  function checkSoilMinerals() {
    // Simulate fetching data from sensors
    SoilDataModule.setSoilData(Math.random() * 100, Math.random() * 100, Math.random() * 100);
  
    // Display the soil health
    UIModule.displaySoilHealth();
  }
  