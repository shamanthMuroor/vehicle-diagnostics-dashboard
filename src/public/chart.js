const speedCtx = document.getElementById('speedChart').getContext('2d');

const createChart = (ctx, label, color) => new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: label,
        data: [],
        borderColor: color,
        fill: false,
        tension: 0.2
      }]
    },
    options: { 
      responsive: true, 
      animation: false,
      scales: {
        x: { display: false }
      }
    }
  });

  
const speedChart = createChart(speedCtx, "Speed (km/h)", "blue");

// === Fetch latest data and update charts ===
async function updateCharts() {
    try {
      const res = await fetch("http://localhost:3000/api/vehicle/data");
      console.log("res: ", JSON.stringify(res));
      const data = await res.json();
  
      const time = new Date().toLocaleTimeString();
  
      // push new data
      speedChart.data.labels.push(time);
      speedChart.data.datasets[0].data.push(data.speed);
  
      // keep only last 10 data points
      [speedChart].forEach(chart => {
        if (chart.data.labels.length > 10) {
          chart.data.labels.shift();
          chart.data.datasets[0].data.shift();
        }
        chart.update();
      });
  
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  
  // update every 2 seconds
  setInterval(updateCharts, 2000);