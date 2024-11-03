// Generate random data for the water health chart
const randomWaterHealthData = Array.from({ length: 12 }, () => Math.random() * 100);

const waterHealthCtx = document.getElementById('waterHealthChart').getContext('2d');
new Chart(waterHealthCtx, {
  type: 'bar',
  data: {
    labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
    datasets: [{
      label: 'Water Health (%)',
      data: randomWaterHealthData,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

// Generate random data for the water usage/irrigation levels chart
const randomWaterUsageData = Array.from({ length: 30 }, () => Math.random() * 30);

const waterUsageCtx = document.getElementById('waterUsageChart').getContext('2d');
new Chart(waterUsageCtx, {
  type: 'line',
  data: {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [{
      label: 'Water Usage (units)',
      data: randomWaterUsageData,
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1
    }]
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Water Usage (units)'
        }
      }
    }
  }
});
