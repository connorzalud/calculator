let x
let y
let operatorArray = []
let operator
const display = document.querySelector(".display")
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const add1 = document.querySelector("#add");
const subtract = document.querySelector("#subtract")
const equal = document.querySelector("#equal");
let operandsArray = [];
display.value = "0"
const operatorsDisplay = display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/";

one.addEventListener("click", function(){
    if(display.value === "0"){
        display.value = "1"
    } else if(display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/"){
        display.value = "1"
    } 
    else{
        display.value = display.value + "1"
    }
    
})

two.addEventListener("click", function(){
    if(display.value === "0"){
        display.value = "2"
    }else if(display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/"){
        display.value = "2"
    }  
    else{
        display.value = display.value + "2"
    }
   
})

three.addEventListener("click", function(){
    if(display.value === "0"){
        display.value = "3"
    }else if(display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/"){
        display.value = "3"
    }  
    
    else{
        display.value = display.value + "3"
    }
    
})

four.addEventListener("click", function(){
    if(display.value === "0"){
        display.value = "4"
    } else if(display.value === "+"||display.value === "-"||display.value ==="*"|| display.value==="/"){
        display.value = "4"
    } 
    else{
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

equal.addEventListener("click", function(){
    operand = parseInt(display.value);
    operandsArray.push(operand);
    operate2(operatorArray, operandsArray);
    operatorArray =[];
    operandsArray=[];

})




function add(operands){
    answer = 0
    for(i = 0; i<operands.length; i++){
        answer = answer + operands[i]
    }
    return answer
}

function subtract1(x,y){
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
    };
    return result
}

function operate2(operatorArray, operandsArray){
    let result = operandsArray[0]
     for(i=0; i<operatorArray.length; i++){
        if(operatorArray[i]=== "+"){
            result += operandsArray[i+1]
        } else if (operatorArray[i]==="-"){
            result -= operandsArray[i+1]
        }
     }

     return console.log(result)
}

