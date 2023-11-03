/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/ 
function area(l1, l2) {
  let areaRettangolo = l1 * l2;
  return areaRettangolo;
}
const lunghezza1 = 10;
const lunghezza2 = 16;
let risultato = area(lunghezza1, lunghezza2);
console.log("L'area del rettangolo è:", risultato);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/ 
function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
let valore1 = crazySum(7, 7);
let valore2 = crazySum(14, 26);

console.log("valore 1:", valore1);
console.log("valore 2:", valore2);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/ 
function crazyDiff(numero) {
    let differenza = numero - 19;
    if (differenza < 0) {
      differenza = -differenza;
    }
  
    if (numero > 19) {
      return differenza * 3;
    } else {
      return differenza;
    }
  }
  let risultato1 = crazyDiff(33);
  let risultato2 = crazyDiff(14);
  
  console.log("Risultato 1:", risultato1);
  console.log("Risultato 2:", risultato2);

  /* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/ 
function boundary(n) {
    return (n >= 20 && n <= 100) || n === 400;
  }
  let test1 = boundary(30);
  let test2 = boundary(150);
  let test3 = boundary(400);
  
  console.log("Riscontro 1:", test1);
  console.log("Riscontro 2:", test2);
  console.log("Riscontro 3:", test3);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(numero) {
    if (numero > 0 && (numero % 3 === 0 || numero % 7 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  let caso1 = check3and7(27);
  let caso2 = check3and7(49);
  let caso3 = check3and7(32);
  
  console.log("E' multiplo di 3 o di 7:", caso1);
  console.log("E' multiplo di 3 o di 7:", caso2);
  console.log("E' multiplo di 3 o di 7:", caso3);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(stringa) {
    let parole = stringa.split(" "); // Dividi la stringa in parole
    for (let i = 0; i < parole.length; i++) {
      let parola = parole[i];
      parole[i] = parola.charAt(0).toUpperCase() + parola.slice(1);
    }
    return parole.join(" ");
  }
  let esempio = upperFirst("paolo, sebastiano, pancrazio, pino, oreste.");
  console.log("Stringa con maiuscole:", esempio);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(stringa) {
  return stringa.slice(1, -1);
}
let stringaSlice = cutString("EPICODE");  
console.log("Amputazione:", stringaSlice);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
