console.log('sono collegato');

//Prendo il form
const myForm = document.getElementById('calculated-form');

// Prendo i campi
const userKm = document.getElementById('user-KM');
const numberUserKm = Number(userKm);

const userAge = document.getElementById('user-age').value;
const numberUserAge = Number(userAge);
const resultContainer = document.getElementById('show-price');
const resultText = document.getElementById('result');

// variabili prezzo
const oneKmPrice = 0.21;
const ticketPrice = (oneKmPrice * numberUserKm);

// variabili età
const under18 = (numberUserAge < 18);
const over65 = (numberUserAge > 65);

// variabili sconto
const ticketPriceUnder18 = (ticketPrice * 20) / 100;
const ticketPriceOver65 = (ticketPrice * 40) / 100;

myForm.addEventListener('submit', function (event) {

    event.preventDefault();

    console.log('prova invio form');



    //calcolo del prezzo
    if (under18) {
        resultText.innerHTML = ticketPriceUnder18.toFixed(2);
    } else if (over65) {
        resultText.innerHTML = ticketPriceOver65.toFixed(2);
    } else {
        resultText.innerHTML = ticketPrice.toFixed(2);
    }

    //svuoto i campi de form
    userKm.value = '';
    userAge.value = '';

    // mostro i risultati
    resultContainer.classList.remove('d-none');
})