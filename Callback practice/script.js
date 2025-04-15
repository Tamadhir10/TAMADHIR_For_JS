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

