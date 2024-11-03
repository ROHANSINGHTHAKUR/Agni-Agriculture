class SoilHealthMonitor {
    constructor() {
      this.moistureLevel = 0;
      this.humidity = 0;
      this.phLevel = 0;
      this.waterHealth = 'Unknown';
      this.monitoringInterval = null;
    }
  
    fetchData() {
      this.updateMockData();
      this.updateDisplay();
    }
  
    startMonitoring() {
      this.monitoringInterval = setInterval(() => {
        this.updateMockData();
        this.updateDisplay();
      }, 3000); // Update every 3 seconds
    }
  
    updateMockData() {
      this.moistureLevel = Math.random() * 100;
      this.humidity = Math.random() * 100;
      this.phLevel = Math.random() * 14;
      this.waterHealth = Math.random() > 0.5 ? 'Healthy' : 'Not Healthy';
    }
  
    updateDisplay() {
      document.getElementById('moistureLevel').innerText = `Moisture Level: ${this.moistureLevel.toFixed(2)}`;
      document.getElementById('humidity').innerText = `Humidity: ${this.humidity.toFixed(2)}`;
      document.getElementById('phLevel').innerText = `pH Level: ${this.phLevel.toFixed(2)}`;
      document.getElementById('waterHealth').innerText = `Water Health: ${this.waterHealth}`;
    }
  
    stopMonitoring() {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }
  }
  
  const monitor = new SoilHealthMonitor();
  
  function fetchData() {
    monitor.fetchData();
  }
  
  function startMonitoring() {
    monitor.startMonitoring();
  }
  
  function stopMonitoring() {
    monitor.stopMonitoring();
  }
  