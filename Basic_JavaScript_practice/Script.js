

const check =() => {

    // even and odd number 
    let number = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");
    if (number % 2 === 0){
        result.innerHTML = number + " is even.";
    } else {
        result.innerHTML = number + " is odd.";
    }
    // sum of the 1 to N w


    let n = parseInt(document.getElementById("n").value);
    let sumResult = document.getElementById("sumResult");
    let sum = 0;    
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    sumResult.innerHTML = "Sum of numbers from 1 to " + n + " is: " + sum;

    


}
