count = 0;

let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let counter = document.getElementById("counter");
let userInput = document.getElementById
("userInput")


add.addEventListener("click", addition)
subtract.addEventListener("click", subtraction)



function addition () {
    let x = parseInt(userInput.value) 
    count += x
    counter.innerHTML = count
    changeColor()
}

function subtraction () {
    let y = parseInt(userInput.value) 
    count -= y
    counter.innerHTML = count
    changeColor()
}

function changeColor () {
    if(count < 0){
        counter.style.color = "red";
    } else if (count >= 0){
        counter.style.color = "black";
    }
}

