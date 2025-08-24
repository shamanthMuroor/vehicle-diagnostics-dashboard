let lastSpeed = 0;   // km/h
let lastRpm = 800;   // idle rpm
let lastTemp = 20;   // °C
const vehicleHistory = [];

// Driver state (randomly changes)
let throttle = 0;  // 0 to 1
let brake = 0;     // 0 to 1

function updateDriverInputs() {
    if (Math.random() < 0.1) {
        throttle = Math.random();
    }
    if (Math.random() < 0.05) {
        brake = Math.random();
    }
}

// Function to generate random vehicle data
function generateVehicleData() {
    updateDriverInputs();

    //speed dynamics
    const accel = throttle * 5 - brake * 8;
    lastSpeed += accel;
    if (lastSpeed < 0) {
        lastSpeed = 0;
    }
    if (lastSpeed > 350) {
        lastSpeed = 350;
    }

    // RPM follows speed but with some random jitter
    let targetRpm = lastSpeed * 40 + 800;       // 40 rpm per km/h + idle
    lastRpm += (targetRpm - lastRpm) * 0.1;     // smooth adjustment
    lastRpm += (Math.random() - 0.5) * 100;     // small noise
    if (lastRpm < 800) lastRpm = 800;
    if (lastRpm > 7000) lastRpm = 7000;

    // Temperature dynamics
    if (lastSpeed > 0 || throttle > 0.2) {
        // engine running → heat up
        lastTemp += 0.5;
    } else {
        // idle or stopped → cool down
        lastTemp -= 0.2;
    }
    if (lastTemp < 20) lastTemp = 20;
    if (lastTemp > 120) lastTemp = 120;

    const data = {
        speed: Math.round(lastSpeed),           // 0-350 speed
        rpm: Math.round(lastRpm),               // 0-7000 rpm
        temperature: Math.round(lastTemp)       // 0-120 °C
    };

    vehicleHistory.push(data);
    if (vehicleHistory.length > 100) {
        vehicleHistory.shift();                 //remove oldest
    }

    return data;
}

//Return last N snapshots from history
function generateVehicleDataHistory(count = 10) {
    return vehicleHistory.slice(-count); // last N entries
}

module.exports = { generateVehicleData, generateVehicleDataHistory };