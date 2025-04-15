// greeting with callback
function greeting(name, callback) {
    callback(name);
}

function handleGreeting() {
    const name = document.getElementById("nameInput").value;
    greeting(name, (name) => {
        document.getElementById("output").textContent = `Hello ${name}`;
    });
}


// Math Operations
function calculate(a, b, operation, callback) {
    const result = operation(a, b);
    callback(result);
}

function handleCalculation() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("calcOutput").textContent = "Error: Please enter valid numbers.";
        return;
    }

    const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => b !== 0 ? a / b : "Error: Division by zero"
    };

    calculate(n1, n2, operations[operation], (result) => {
        document.getElementById("calcOutput").textContent = `Result: ${result}`;
    });
}
