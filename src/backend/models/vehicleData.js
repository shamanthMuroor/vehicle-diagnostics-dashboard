// Function to generate random vehicle data
function generateVehicleData() {
    return {
        speed: Math.floor(Math.random() * 351),         // 0-350 speed
        rpm: Math.floor(Math.random() * 7001),          // 0-7000 rpm
        temperature: Math.floor(Math.random() * 121)    // 0-120 °C
    };
}

function generateVehicleDataHistory(count = 10) {
    const history = [];
    for (let i=0; i<count; i++) {
        history.push(generateVehicleData());
    }
    return history;
}

module.exports = { generateVehicleData, generateVehicleDataHistory };