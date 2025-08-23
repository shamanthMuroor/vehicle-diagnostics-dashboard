const { generateVehicleData, generateVehicleDataHistory } = require("../models/vehicleData");

//Emit data every second
setInterval(() => {
    const vehicleData = generateVehicleData();
    console.log("Vehicle Data: ", JSON.stringify(vehicleData));
}, 1000);

const history = generateVehicleDataHistory(5);
console.log("Vehicle history: ", JSON.stringify(history));