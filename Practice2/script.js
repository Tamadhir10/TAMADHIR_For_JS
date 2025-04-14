


function getNumbersFromInput(inputText) {
    let numbers = inputText.split(',');
    let result = [];
    
    for(let i = 0; i < numbers.length; i++) {
        result.push(Number(numbers[i]));
    }
    return result;
}

//Function to reverse an array
function reverseArrayAndDisplay() {
    let input = document.getElementById('arrayInput').value;
    let numbers = getNumbersFromInput(input);
    
    let reversed = [];
    for(let i = numbers.length - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }
    
    let resultBox = document.getElementById('reverseResult');
    resultBox.textContent = 'Reversed array: ' + reversed.join(', ');
}

// Function to find positive numbers
function filterPositiveAndDisplay() {
    let input = document.getElementById('filterInput').value;
    let numbers = getNumbersFromInput(input);
    
    let positiveNumbers = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            positiveNumbers.push(numbers[i]);
        }
    }
    
    let resultBox = document.getElementById('filterResult');
    resultBox.textContent = 'Positive numbers: ' + positiveNumbers.join(', ');
}

// Function to sum array numbers
function sumArrayAndDisplay() {
    let input = document.getElementById('sumInput').value;
    let numbers = getNumbersFromInput(input);
    
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    
    let resultBox = document.getElementById('sumResult');
    resultBox.textContent = 'Sum of array: ' + sum;
}

