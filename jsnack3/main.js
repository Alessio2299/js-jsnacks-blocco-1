// Creao un array con dei numeri
let numbers = ["10","2","1","3","5","7","11","20","12","6","0","19","13","4","8"];
// Seleziono solo i primi 10 numeri di quell'array
let selects = (numbers.slice(0, 10));
console.log(selects[5])
// Calcolo la somma tra i numeri selezionati
let somma;
for (let i = 0; i < selects.length; i++){
  let numberSelect = parseInt(numbers[i]);
  somma += numbers[i];
  console.log(numberSelect);
  console.log(typeof numberSelect);
}

console.log(somma)



// Calcolo una media tra i numeri selezioni
