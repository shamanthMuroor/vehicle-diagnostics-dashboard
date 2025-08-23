const vehicleHistory = [];

// Function to generate random vehicle data
function generateVehicleData() {
    const data = {
        speed: Math.floor(Math.random() * 351),         // 0-350 speed
        rpm: Math.floor(Math.random() * 7001),          // 0-7000 rpm
        temperature: Math.floor(Math.random() * 121)    // 0-120 °C
    };

    vehicleHistory.push(data);
    if(vehicleHistory.length > 100) {
        vehicleHistory.shift(); //remove oldest
    }

    return data;
}

//Return last N snapshots from history
function generateVehicleDataHistory(count = 10) {
    return vehicleHistory.slice(-count); // last N entries
}

module.exports = { generateVehicleData, generateVehicleDataHistory };