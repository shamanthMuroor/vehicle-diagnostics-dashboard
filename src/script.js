// const fetchButton = document.getElementById("fetchData"); //Manual fetch the data
const latestDataContainer = document.getElementById("latestData");
const historyTableBody = document.querySelector("#historyTable tbody");

// Render latest snapshot
function renderLatestData(vehicleData) {
    latestDataContainer.innerHTML = "";
    for (const data in vehicleData) {
        const p = document.createElement("p");
        p.textContent = `${data.toUpperCase()}: ${vehicleData[data]}`;
        latestDataContainer.appendChild(p);
    }
}

// Render an array of vehicle data snapshots
function renderHistory(dataArray) {
    historyTableBody.innerHTML = ""; // clear table
    dataArray.forEach((vehicleData) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${vehicleData.speed}</td><td>${vehicleData.rpm}</td><td>${vehicleData.temperature}</td>`;
        historyTableBody.appendChild(tr);
    });
}

// Fetch data from API
async function fetchData() {
    try {
        const latestDataResponse = await fetch("http://localhost:3000/vehicle/data");
        const latestVehicleData = await latestDataResponse.json();
        renderLatestData(latestVehicleData);

        //Fetch history
        const historyResponse = await fetch("http://localhost:3000/vehicle/history");
        const historyData = await historyResponse.json();
        renderHistory(historyData);
    } catch (err) {
        console.error("Error fetching data: ", err);
    }
}

// fetchButton.addEventListener("click", async () => {});   // Fetching based on click event

//Fetch every 2 seconds
fetchData(); // initial fetch
setInterval(fetchData, 2000); 