const calculatorTask = document.getElementById('calculator-task');
const calculatorModal = document.getElementById('calculator-modal');
const closeModal = document.getElementById('close-modal');

calculatorTask.addEventListener('click', function() {
    calculatorModal.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
    calculatorModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === calculatorModal) {
        calculatorModal.style.display = 'none';
    }
});

// Calculator
function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

// Keyboard
document.addEventListener('keydown', function(event) {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', 'Enter', 'Backspace'];
    if (validKeys.includes(event.key)) {
        if (event.key === 'Enter') {
            calculateResult();
        } else if (event.key === 'Backspace') {
            let currentValue = document.getElementById('result').value;
            document.getElementById('result').value = currentValue.slice(0, -1);
        } else {
            appendToResult(event.key);
        }
    }
});