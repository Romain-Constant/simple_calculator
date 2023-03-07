

function simpleCalculator () {  
    let firstValue = parseInt(prompt("Quelle est la première valeur ?"));
    let operator = prompt("Quelle opérateur souhaitez vous utiliser ?");
    let secondValue = parseInt(prompt("Quelle est la seconde valeur ?"));

    switch (operator) {
        case "+": 
        console.log(firstValue + secondValue);
        break;
        case "-": 
        console.log(firstValue - secondValue);
        break;
        case "*": 
        console.log(firstValue * secondValue);
        break;
        case "/": 
        console.log(firstValue / secondValue);
        break;
        default: 
        console.log("Opérateur non valide");
    }
};

simpleCalculator();