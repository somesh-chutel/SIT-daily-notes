
let num1El = document.getElementById("num1");
let num2El = document.getElementById("num2");
let operatorEl = document.getElementById("operator");
let resultEl = document.getElementById("result");


function calculateResult(){

    let val1 = parseInt( num1El.value );
    let val2 = parseInt( num2El.value );
    let operator = operatorEl.value;

    switch ( operator ){

        case "+" :
            resultEl.textContent = `Your result is : ${val1 + val2}`;
            break;
        case "-" :
            resultEl.textContent = `Your result is : ${val1 - val2}`;
            break;
        case "*" :
            resultEl.textContent = `Your result is : ${val1 * val2}`;
            break;
        case "/" :
            resultEl.textContent = `Your result is : ${val1 / val2}`;
            break;
        default :
            resultEl.textContent = "Please provide valid operator";
    }

    num1El.value = "";
    num2El.value = "";
    operatorEl.value = "";

}


let randomNumber = Math.ceil( Math.random()*10 );

console.log( randomNumber );
