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


// Array Processing
function processArray(arr, callback) {
    return arr.map(callback);
}

function handleArrayProcess() {
    
    const input = document.getElementById("arrayInput").value;
    const numbers = input.split(",").map(num => Number(num.trim()));

    if (!numbers.every(num => !isNaN(num))) {
        document.getElementById("arrayOutput").textContent = "Error: Please enter valid numbers";
        return;
    }

    try {
        
        const result = processArray(numbers, num => num * 2);
        document.getElementById("arrayOutput").textContent = `Processed Array: ${result.join(", ")}`;
    } catch (error) {
        document.getElementById("arrayOutput").textContent = `Error: ${error.message}`;
    }
}
// Simulate API Call 
function handleApiCall(callback) {
    document.getElementById("apiOutput").textContent = "Loading...";
    getData((data) => {
        document.getElementById("apiOutput").textContent = `Received: ${JSON.stringify(data)}`;
        if (callback) {
            callback(data);
        }
    });
}

function getData(callback) {
    // Simulating API call with setTimeout
    setTimeout(() => {
        const data = {
            id: 1,
            message: "Hello from API"
        };
        callback(data);
    }, 2000);
}

// Nested Callbacks

function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    document.getElementById("loginOutput").textContent = "Processing...";
    
    login(username, password, (loginData) => {
        fetchUser(loginData.userId, (userData) => {
            fetchSettings(userData.id, (settingsData) => {
                document.getElementById("loginOutput").textContent = 
                    `Complete! User: ${userData.name}, Theme: ${settingsData.theme}`;
            });
        });
    });
}


// Division with Error Handling
function divideWithError(a, b, successCallback, errorCallback) {
    if (b === 0) {
        errorCallback("Cannot divide by zero!");
    } else {
        successCallback(a / b);
    }
}

function handleDivision() {
    const num1 = parseFloat(document.getElementById("divNum1").value);
    const num2 = parseFloat(document.getElementById("divNum2").value);

    // Input validation
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("divOutput").textContent = "Error: Please enter valid numbers";
        return;
    }

    divideWithError(
        num1,
        num2,
        (result) => {
            document.getElementById("divOutput").textContent = `Result: ${result}`;
        },
        (error) => {
            document.getElementById("divOutput").textContent = `Error: ${error}`;
        }
    );
}