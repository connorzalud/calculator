


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
        add(x,y)
    } else if(operator ==="-"){
        subtract(x,y)
    } else if(operator === "*"){
        multiply(x,y)
    } else if(operator === "/"){
        divide(x,y)
    }
}

