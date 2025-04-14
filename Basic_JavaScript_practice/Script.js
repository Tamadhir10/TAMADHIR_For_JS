const check = () => {
    // Even and odd number 
    let number = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");
    if (number % 2 === 0) {
        result.innerHTML = number + " is even.";
    } else {
        result.innerHTML = number + " is odd.";
    }

    // Sum of 1 to N
    let n = parseInt(document.getElementById("n").value);
    let sumResult = document.getElementById("sumResult");
    let sum = 0;    
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    sumResult.innerHTML = "Sum of numbers from 1 to " + n + " is: " + sum;

    // FizzBuzz
    let fizzbuzzResult = document.getElementById("fizzbuzzResult");
    let output = "";
    for (let s = 1; s <= 100; s++) {
        if (s % 3 === 0 && s % 5 === 0) {
            output += "FizzBuzz, ";
        } else if (s % 3 === 0) {
            output += "Fizz, ";
        } else if (s % 5 === 0) {
            output += "Buzz, ";
        } else {
            output += s + ", ";
        }
    }
    fizzbuzzResult.innerHTML = output;

    // Find the Largest Number
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let largestResult = document.getElementById("largestResult");
    largestResult.innerHTML = "Largest number is: " + Math.max(num1, num2);

    // Count Vowels in a String
    let str = document.getElementById("string").value;
    let vowelResult = document.getElementById("vowelResult");
    let vowels = str.match(/[aeiou]/gi);
    let count = vowels ? vowels.length : 0;
    vowelResult.innerHTML = "Number of vowels in the string: " + count;
}
