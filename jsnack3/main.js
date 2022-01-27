// Creao un array con dei numeri
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




