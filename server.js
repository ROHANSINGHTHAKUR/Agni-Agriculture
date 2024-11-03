const express = require('express');
const app = express();

let isWatering = false;

app.get('/control', (req, res) => {
  const action = req.query.action;
  if (action === 'start') {
    isWatering = true;
    // Code to start the water supply
  } else if (action === 'stop') {
    isWatering = false;
    // Code to stop the water supply
  }
  res.send('OK');
});

app.get('/sensors', (req, res) => {
  // Simulated sensor values
  const moisture = Math.floor(Math.random() * 100);
  const water = Math.floor(Math.random() * 100);
  res.json({ moisture, water });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
