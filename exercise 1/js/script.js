// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.



let arrayEmpty = [];

let sum = 0;




while (arrayEmpty < 50) {
    let askNums = parseInt(prompt('Inserisci un numero:'));
    sum = sum + askNums;
    arrayEmpty = sum;
    console.log(arrayEmpty);
}


