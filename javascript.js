let x
let y
let operator
const display = document.querySelector(".display")
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const add1 = document.querySelector("#add");
const equal = document.querySelector("#equal");

one.addEventListener("click", function(){
    display.value = "1";
    x = 1
})

two.addEventListener("click", function(){
    display.value = "2";
    y = 2
})

add1.addEventListener("click", function(){
    display.value = "+"
    operator = "+"
})

equal.addEventListener("click", function(){
    operate(x,operator,y);
    display.value = result; 

})



function add(x,y){
    answer = x + y;
    return answer
}

function subtract(x,y){
    answer = x - y;
    return answer
}

function multiply(x,y){
    answer = x * y;
    return answer
}

function divide(x,y){
    answer = x/y;
    return answer
}

function operate(x, operator, y){
    if(operator === "+"){
       result = add(x,y)
    } else if(operator ==="-"){
       result = subtract(x,y)
    } else if(operator === "*"){
       result = multiply(x,y)
    } else if(operator === "/"){
       result = divide(x,y)
    }
    return result
}

