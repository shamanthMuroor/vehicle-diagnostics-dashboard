//select elements from DOM
const button = document.getElementById("generateSpeed");
const speedDisplay = document.getElementById("speedValue");

// Function to generate random speed (0-350 km/h)
function generateRandomSpeed() {
    return Math.floor(Math.random() * 351); // 0 - 350 speed
}

button.addEventListener("click", () => {
    const speed = generateRandomSpeed();
    speedDisplay.textContent = speed;
});