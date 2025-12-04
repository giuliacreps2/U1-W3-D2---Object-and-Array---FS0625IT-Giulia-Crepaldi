/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numbMajor = 10;
let numbMinor = 5;

if (numbMajor > numbMinor) {
  console.log(numbMajor);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numbNotEqual = 7;
if (numbNotEqual !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numbDivisibile = 15;
if (numbDivisibile % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numbInteger1 = 5;
let numbInteger2 = 3;

if (numbInteger1 === 8 || numbInteger2 === 8 || numbInteger1 + numbInteger2 === 8 || numbInteger1 - numbInteger2 === 8) {
  console.log("Una delle condizioni è vera");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 60;
let shippingCost = 10;

if (totalShoppingCart > 50) {
  console.log("La spedizione è gratuita. Il totale da pagare è: " + totalShoppingCart);
} else if (totalShoppingCart < 50) {
  shippingCost = 10;
  const totalWithShipping = totalShoppingCart + shippingCost;
  console.log("Il totale da pagare è: " + totalWithShipping);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingBlackFriday = 0.2;
let totalAmount = 100;
let shippingCostBlackFriday = 10;

if ((totalShoppingBlackFriday = 0.2)) {
  const costMerchandisingBlackFriday = totalAmount - totalShoppingBlackFriday;
  console.log("Il totale scontato è: " + costMerchandisingBlackFriday);
}
if (totalShoppingCart > 50) {
  const costMerchandisingBlackFriday = totalAmount - shippingCostBlackFriday;
  console.log("La spedizione è gratuita. Il totale da pagare è: " + costMerchandisingBlackFriday);
} else if (totalShoppingCart < 50) {
  shippingCostBlackFriday = 10;
  const totalWithShippingBlackFriday = totalAmount + shippingCostBlackFriday;
  console.log("Il totale da pagare è: " + totalWithShippingBlackFriday);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 15;
let y = 7;
let z = 5;

if (x > y && x > z) {
  if (y > z) {
    console.log(x, y, z);
  } else {
    console.log(x, z, y);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let value = 25;
if (typeof value === "number") {
  console.log("Il valore è un numero");
} else {
  console.log("Il valore non è un numero");
}

//alternativo
let value2 = "25";
console.log(typeof value2 === "number" ? "Il valore è un numero" : "Il valore non è un numero");

//alternativo 2
console.log(typeof value2);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numberToCheck = 8;
if (numberToCheck % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

// ESERCIZIO 10
//Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 10) {
  console.log("Meno di 10");
}
if (val < 5) {
  console.log("Meno di 5");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop(-1);
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let movie = [];
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbersArray.length; i++) {
  movie.push(numbersArray[i]);
}
console.log(movie);

/* oppure */

let emptyArray = [];
for (let i = 1; i <= 10; i++) {
  emptyArray.push(i);
}
console.log(emptyArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numbersArray.pop(-1);
numbersArray.push(100);
console.log(numbersArray);

/* oppure */

numbersArray[numbersArray.length - 1] = 100;
console.log(numbersArray);
