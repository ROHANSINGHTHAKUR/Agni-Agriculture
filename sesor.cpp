const int moisturePin = A0;  // Analog pin for moisture sensor
const int waterLevelPin = A1;  // Analog pin for water level sensor
const int relayPin = 8;  // Pin connected to the relay

void setup() {
  pinMode(moisturePin, INPUT);
  pinMode(waterLevelPin, INPUT);
  pinMode(relayPin, OUTPUT);
}

void loop() {
  int moistureValue = analogRead(moisturePin);
  int waterLevelValue = analogRead(waterLevelPin);

  // Convert analog values to percentage values
  int moisturePercentage = map(moistureValue, 0, 1023, 0, 100);
  int waterLevelPercentage = map(waterLevelValue, 0, 1023, 0, 100);

  // Check moisture level and control water supply
  if (moisturePercentage < 30) {
    // Soil is dry, turn on the water supply
    digitalWrite(relayPin, HIGH);
  } else {
    // Soil is moist, turn off the water supply
    digitalWrite(relayPin, LOW);
  }

  // Print moisture and water level percentages
  Serial.print("Moisture Level: ");
  Serial.print(moisturePercentage);
  Serial.print("%, Water Level: ");
  Serial.print(waterLevelPercentage);
  Serial.println("%");

  delay(1000);  // Delay for stability
}
