let num1; 
document.getElementById("btn").disabled = true;

document.getElementById("btn1").onclick = function() {
    num1 = Math.floor(Math.random() * 99) + 1; 
    document.getElementById("btn").disabled = false;
    document.getElementById("attempt").textContent = "attempts left :";
    document.getElementById("num").textContent = "5";
    document.getElementById("myn").value = "";
    document.getElementById("text").textContent = "";
    
    console.log(num1); 
};

document.getElementById("btn").onclick = function() {
    let guess = Number(document.getElementById("myn").value);
       
    if (guess === num1) {
        document.getElementById("text").textContent = "You guessed correctly!"; 
    } else if (guess < num1) {
        document.getElementById("text").textContent = "Number is greater than " + guess + ".";
    } else if (guess > num1) {
        document.getElementById("text").textContent = "Number is less than " + guess + "."; 
    }

    let val = Number(document.getElementById("num").textContent);
    document.getElementById("num").textContent = val - 1;
    
    if (val === 1) {
        document.getElementById("btn").disabled = true;
        document.getElementById("attempt").textContent = "Game over!";
        document.getElementById("num").textContent = "";
    }
};

