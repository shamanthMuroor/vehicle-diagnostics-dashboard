const express = require("express");
const cors = require("cors");
const { generateVehicleData, generateVehicleDataHistory } = require("./models/vehicleData");

const app = express()
const PORT = 3000;

// Enable CORS for all origins (development only)
app.use(cors());

// Route: latest vehicle data
app.get("/api/vehicle/data", (req, res) => {
    const data = generateVehicleData();
    res.json(data);
});

// Route: history of vehicle data
app.get("/api/vehicle/history", (req, res) => {
    const count = parseInt(req.query.count) || 10;
    const history = generateVehicleDataHistory(count);
    res.json(history);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})