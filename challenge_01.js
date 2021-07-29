/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/


let ersteZahl = prompt("Bitte eine Zahl eingeben: "); // dekleration + eingabe
let zweiteZahl = prompt("Bitte eine weitere Zahl eingeben: "); // dekleration + eingabe

let summe = +ersteZahl + +zweiteZahl; /* Rechnung. (vorsicht! beste und kürzeste weg ein 
string zur eine number umzuwandeln ist ein '+' vor dem variable) */

console.log("Die Summe der Zahlen ist: ", summe); // Ausgabe -> console
// EDIT von Holger: Die Idee mit dem Ausgabefenster finde ich gut (und will mit pull requests rumexperimentieren, deshalb kommentiere ich hier mal...)
window.alert(+ersteZahl + +zweiteZahl); // Ausgabe -> pop-up alert


