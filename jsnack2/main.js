// Creare un Array con vari numeri
let numbers = ["2", "12", "3", "5", "6", "10", "13", "8", "4", "7"]

let numbersChosen;
// Creo una condizione se viene inserite un numero non valido
do{
  // Inserire tramite un prompt quanti numeri si vogliono selezionare con un numero che va da 1 alla lunghezza della'array
  numbersChosen = parseInt(prompt("Inserisci un numero da 1 a " + numbers.length))
} while(numbersChosen > numbers.length)
// Tramite il numero scelto seleziono un tot di numeri all'interno dell'array
let numberSelect = numbers.slice(0,numbersChosen);
console.log(numberSelect);

// Stampo il cubo dei numeri selezionati
for (let i= 0; i < numberSelect.length; i++){
  let cubo = Math.pow(numberSelect[i], 3);
  alert("Il tuo numero selezionato è: " + numberSelect[i] + ". Mentre l'elevazione al cubo del tuo numero è: " + cubo)
}