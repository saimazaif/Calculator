const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function factorial() {
  try {
    let num = parseInt(display.value);
    if (isNaN(num) || num < 0) {
      display.value = 'Error';
      return;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}
