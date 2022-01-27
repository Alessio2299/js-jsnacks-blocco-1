/* 
  Soluzione Numero 1
// Creo un array con dei numeri
let numbers = ["10","2","1","3","5","7","11","20","12","6","0","19","13","4","8"];

// Seleziono solo i primi 10 numeri di quell'array
let selects = (numbers.slice(0, 10));

// Calcolo la somma tra i numeri selezionati
let somma = 0;
for (let i = 0; i < selects.length; i++){
  let numberSelect = parseInt(selects[i]);
  somma += numberSelect;
}
// Calcolo una media tra i numeri selezioni
let media = somma / selects.length;

alert("La somma dei primi 10 numeri è: " + somma + ", mentre la media è: " +  media);
*/

// Seconda possibile soluzione

// Creo un array con dei numeri
let numbers = ["10","2","1","3","5","7","11","20","12","6","0","19","13","4","8"];

let somma = 0;
// Creo un ciclo per calcolare la somma
for (let i = 0; i < 10; i++){
  let numberSelect = parseInt(numbers[i]);
  somma += numberSelect;
}
// Calcolo la media
let media = somma / 10;

alert("La somma dei primi 10 numeri è: " + somma + ", mentre la media è: " +  media);


