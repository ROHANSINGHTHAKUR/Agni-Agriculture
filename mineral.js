const express = require('express');
const app = express();

// Endpoint to check soil minerals
app.get('/checkSoilMinerals', (req, res) => {
  // Simulate checking soil minerals (replace with actual logic)
  const soilMinerals = {
    nitrogen: 0.2,
    phosphorus: 0.15,
    potassium: 0.1
  };

  res.json(soilMinerals);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
