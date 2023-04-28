// Add your code here
const button = document.getElementById("button");
const time = document.getElementById("time");
let setTimeInterval;
let colorChange = true;
let lbl = document.getElementById("myLabel");
let warningLabel = false;
const randomRGB = function generateRandomNumber() {
  return Math.floor(Math.random() * 255);
};

const generateColor = function generateColor() {
  document.body.style.background =
    "rgba(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ",0.3)";
};

const changeColor = function changeColor() {
  if (time.value > 0 && time.value !== null) {
    lbl.innerHTML = "Background change interval (seconds):";
    lbl.style.color = "black";
    warningLabel = false;
    button.innerHTML = "Stop";
    button.className = "btn btn-danger";
    setTimeInterval = setInterval(generateColor, time.value * 1000);
  } else if (!warningLabel) {
    console.log(lbl.innerHTML);
    lbl.style.color = "red";
    lbl.innerHTML = lbl.innerHTML + "Plese enter a non-zero positive number!";
    warningLabel = true;
  }
};

const stopColor = function stopColor() {
  button.innerHTML = "Start";
  button.className = "btn btn-primary";
  clearInterval(setTimeInterval);
};

document.getElementById("button").addEventListener("click", () => {
  if (colorChange) {
    colorChange = false;
    changeColor();
  } else {
    colorChange = true;
    stopColor();
  }
});
