document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("result");
    let currentInput = '';
    let previousInput = '';
    let operation = '';
  
    function updateDisplay(value) {
      display.textContent = value;
    }
  
    function clearDisplay() {
      currentInput = '';
      previousInput = '';
      operation = '';
      updateDisplay('');
    }
  
    function calculate() {
      let result = 0;
      const num1 = parseFloat(previousInput);
      const num2 = parseFloat(currentInput);
  
      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          break;
      }
  
      updateDisplay(result);
      previousInput = result.toString();
      currentInput = '';
      operation = '';
    }
  
    document.querySelectorAll('.calculator-button').forEach(button => {
      button.addEventListener('click', function () {
        const value = this.textContent;
  
        if (!isNaN(value) || value === '.') {
          currentInput += value;
          updateDisplay(currentInput);
        } else if (value === 'Clear') {
          clearDisplay();
        } else if (value === '=') {
          calculate();
        } else {
          if (currentInput !== '') {
            previousInput = currentInput;
            currentInput = '';
            operation = value;
          }
        }
      });
    });
  });