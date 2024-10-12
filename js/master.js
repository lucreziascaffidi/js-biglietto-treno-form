console.log('sono collegato');

//Prendo il form
const myForm = document.getElementById('calculated-form');

// // Prendo i campi del form
// const userKm = document.getElementById('user-KM').value;
// console.log(userKm);
// const userAge = document.getElementById('user-age').value;
// console.log(userAge);

myForm.addEventListener('submit', function (event) {

    event.preventDefault();

    console.log('prova invio form');

    // Prendo i campi del form 
    const userKm = document.getElementById('user-KM').value;
    const numberUserKm = Number(userKm);
    console.log(numberUserKm);
    const userAge = document.getElementById('user-age').value;
    const numberUserAge = Number(userAge);
    console.log(numberUserAge);

    // variabili prezzo
    const oneKmPrice = 0.21;
    const ticketPrice = (oneKmPrice * numberUserKm);
    console.log(ticketPrice)

    // variabili età
    const under18 = (numberUserAge < 18);
    const over65 = (numberUserAge > 65);

    // variabili sconto
    const ticketPriceUnder18 = (ticketPrice * 20) / 100;
    const ticketPriceOver65 = (ticketPrice * 40) / 100;

    const resultContainer = document.getElementById('show-price');
    const resultText = document.getElementById('result');

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