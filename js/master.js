console.log('Hello World')

// Prendere il form dal DOM
const myForm = document.getElementById('calculated-form');

// Prendere i campi del Form
const userKM = document.getElementById('user-KM');
const userAge = document.getElementById('user-age');


// Inizializzo la variabile relativa al prezzo del biglietto per 1 Km
// e le assegno il numero 0.21 considerando che il costo è di 0.21€ per 1 km. 
const oneKmPrice = 0.21;

// Inizializzo la variabile relativa al costo dell'interno biglietto
// moltiplicando 0.21 per i KM indicati dall'utente nella prima domanda e associati alla variabile del punto 1.
const ticketPrice = (oneKmPrice * toTravelKM);

// Inizializzo la variabile dell'età inferiore ai 18 anni
const under18 = (userAge < 18);

// Inizializzo la variabile del costo del bigletto scontato del 20% per l'età è inferiore ai 18 anni. 
const ticketPriceUnder18 = (ticketPrice * 20) / 100;

//Inizializzo la variabile dell'età maggiore di 65 anni
const over65 = (userAge > 65);

// Inizializzo la variabile del costo del bigletto scontato del 40% per l'età maggiore di 65 anni. 
const ticketPriceOver65 = (ticketPrice * 40) / 100;

// quando l'user invia il form, leggo i dati 
myForm.addEventListener('submit', function (event) {

    //decidiamo il comportamento del form al click del bottone submit
    event.preventDefault();

    console.log('prova invio form')

    console.log('km', userKM.value);
    console.log('age', userAge.value);

    // quando ho finito operazioni i campi devono tornare vuoti
    userKM.value = '';
    userAge.value = '';
});


//Istruzioni condizionali: 

// se l'età è inferiore ai 18 anni 
// if (under18) {

//     // allora il costo del biglietto è scontato del 20% quindi faccio apparire questa frase
//     console.log(`Il costo totale del biglietto è di ${ticketPriceUnder18.toFixed(2)}€. Scontato del 20% per i minorenni.`)

//     //altrimenti se l'età è maggiore di 65 anni  
// } else if (over65) {

//     // allora il costo del biglietto è scontato del 40% e faccio apparire questa frase
//     console.log(`Il costo totale del biglietto è di ${ticketPriceOver65.toFixed(2)}€. Scontato del 40% per gli over 65.`)

//     // altrimenti l'età è sicuramente compresa tra i 18 e i 65 anni
// } else {

//     // allora l'utente non ha diritto a nessuno sconto e faccio apparire questa frase
//     console.log(`Il costo totale del biglietto è di ${ticketPrice.toFixed(2)}€. L'utente non ha diritto a nessuno sconto.`)

// }

