  // Creare un array vuoto
  let myNumbers = []

  // Far inserire un dieci numeri in un prompt
  let somma = 0;
  for (let i = 0; i < 10; i++){
    let number = parseInt(prompt("Inserisci un numero!"));

    // Salvare in numeri inseriti nel prompt nell'array definito prima
    myNumbers.push(number);

    // Prendere i singoli array e sommarli tra di loro
    somma += myNumbers[i];  
  }

  alert("Il risultato dei tuoi numeri inseriti è: " + somma);
  




