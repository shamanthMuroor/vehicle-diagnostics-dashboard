# Vehicle Diagnostics Dashboard

An educational project to learn **JavaScript and Node.js** by building a simulated automotive diagnostics system step by step.  
The goal is to simulate how a vehicle’s Electronic Control Unit (ECU) might provide data like speed, RPM, and temperature, then display it in a browser dashboard.

---

## 📌 Project Goals
- Learn modern JavaScript (frontend + backend with Node.js).
- Build features incrementally every 2 days.
- At the end of each 1–2 week cycle, deliver a complete feature.
- Use automotive-inspired examples (e.g., vehicle telemetry, fault codes) without proprietary APIs.

---

## 🚀 Current Feature (Week 1–2)
**Vehicle Diagnostics Dashboard Prototype**  
- Frontend: Displays simulated vehicle data (speed, RPM, temperature).
- Backend: Node.js generates and serves data via a simple API.
- Integration: Frontend fetches backend data and visualizes it (e.g., live chart of speed history).

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Visualization:** Chart.js
- **Version Control:** Git + GitHub

---

## 📂 Project Structure
vehicle-diagnostics-dashboard/
│── src/ 
│   ├── public/                # frontend
│   │   ├── index.html         # main page
│   │   ├── style.css          # styling
│   │   ├── chart.js           # chart logic
│   │   └── script.js          # frontend logic (fetch)
│   │
│   ├── backend/
│   │   ├── models/            # vehicle data model
│   │   │   └── vehicleData.js
│   │   ├── simulators/
│   │   │   └── simulator.js
│   │   ├── server.js          # backend with APIs
│   │   └── package.json       
│   └── package.json
│── README.md                  # Project documentation
│── .gitignore                 # File to ignore contents