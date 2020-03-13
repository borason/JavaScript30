// // Get time
// const now = new Date();
// const seconds = now.getSeconds();
// const minutes = now.getMinutes();
// const hour = now.getHours();

// // event handlers
// const secondHand = document.querySelector(".second-hand");
// const minuteHand = document.querySelector(".minute-hand");
// const hourHand = document.querySelector(".hour-hand");

// const secondsDegrees = ((seconds / 60) * 360) + 90;
//     secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();
}