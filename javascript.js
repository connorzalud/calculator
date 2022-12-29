let x = 0
let operatorArray = []
let operator
const display = document.querySelector(".display")
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const add1 = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");
let operandsArray = [];
display.value = "0"

zero.addEventListener("click", function(){
    if(display.value === "0"){
        display.value = "0"
    } else if(display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/"){
        display.value = "0"
    } else if(x === 1){
        display.value = "0";
        x = 0
    } else{
        display.value = display.value + "0"
    }
    
})

one.addEventListener("click", function(){
    if(display.value === "0"){
        display.value = "1"
    } else if(display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/"){
        display.value = "1"
    } else if(x === 1){
        display.value = "1";
        x = 0
    } else{
        display.value = display.value + "1"
    }
    
})

two.addEventListener("click", function(){
    if(display.value === "0"){
        display.value = "2"
    }else if(display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/"){
        display.value = "2"
    } else if(x === 1){
        display.value = "2";
        x = 0
    } else{
        display.value = display.value + "2"
    }
   
})

three.addEventListener("click", function(){
    if(display.value === "0"){
        display.value = "3"
    }else if(display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/"){
        display.value = "3"
    } else if(x === 1){
        display.value = "3";
        x = 0
    } else{
        display.value = display.value + "3"
    }
    
})

four.addEventListener("click", function(){
    if(display.value === "0"){
        display.value = "4"
    } else if(display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/"){
        display.value = "4"
    } else if(x === 1){
        display.value = "4";
        x = 0
    } else{
        display.value = display.value + "4"
    }
   
})

add1.addEventListener("click", function(){

    operand = parseInt(display.value);
    operandsArray.push(operand);
    display.value = "+";
    operator = display.value;
    operatorArray.push(operator)

})

subtract.addEventListener("click",function(){
    operand = parseInt(display.value);
    operandsArray.push(operand)
    display.value="-";
    operator = display.value;
    operatorArray.push(operator);
})

divide.addEventListener("click", function(){

    operand = parseInt(display.value);
    operandsArray.push(operand);
    display.value = "/";
    operator = display.value;
    operatorArray.push(operator)

})

multiply.addEventListener("click", function(){

    operand = parseInt(display.value);
    operandsArray.push(operand);
    display.value = "*";
    operator = display.value;
    operatorArray.push(operator)

})

equal.addEventListener("click", function(){
    operand = parseInt(display.value);
    operandsArray.push(operand);
    checkZero(operatorArray, operandsArray);
    result = operate(operatorArray, operandsArray);
    display.value = result;
    console.log(operatorArray);
    console.log(operandsArray);
    operatorArray =[];
    operandsArray=[];
    x = 1;

})
 

function operate(operatorArray, operandsArray){
    let result = operandsArray[0]
     for(i=0; i<operatorArray.length; i++){
        if(operatorArray[i]=== "+"){
            result += operandsArray[i+1]
        } else if (operatorArray[i]==="-"){
            result -= operandsArray[i+1]
        } else if (operatorArray[i]==="*"){
            result *= operandsArray[i+1]
        } else if (operatorArray[i]==="/"){
            result /= operandsArray[i+1]
        }
     }
console.log(result);
     return result
}

function checkZero(operatorArray,operandsArray){
    for(i=0; i<operatorArray.length; i++){
        if(operatorArray[i] === "/"){
            if(operandsArray[i+1]=== 0){
                result = "Can't divide by zero"
                return display.value = result
            }
    }
}
return null
}