function press(input) {
  var display = document.querySelector("#display");
  display.value = input;
}

function clr() {
  var display = document.querySelector("#display");
  display.value = "";
}

function calculate() {
  var display = document.querySelector("#display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
