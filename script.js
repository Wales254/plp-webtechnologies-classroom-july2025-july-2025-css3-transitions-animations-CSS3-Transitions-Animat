// Part 2: Demonstrating function scope, parameters, and return values
function addNumbers(a, b) {
  return a + b; // returns value
}

function showSum() {
  let result = addNumbers(5, 10); // call with parameters
  document.getElementById("result").innerText = "Sum of 5 + 10 = " + result;
}

// Local vs global scope demo
let globalMessage = "I am global!";

function scopeDemo() {
  let localMessage = "I am local!";
  console.log(globalMessage); // accessible
  console.log(localMessage); // accessible only here
}

// scopeDemo();

// Part 3: Using JS to trigger CSS animation dynamically
function toggleAnimation() {
  let box = document.getElementById("animateBox");
  box.classList.remove("animate"); // reset
  void box.offsetWidth; // trick to restart animation
  box.classList.add("animate");
}
