/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
 */


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }


// let nNumber = parseInt(prompt('inserisci un numero:'));



function nArray(array, nElement) {
    let array = []
    

    for (i = 0; i < 10; i++) {
        array.push(getRndInteger(1, 10));
        console.log(array)
    }
    return array;
}


console.log(nArray())

