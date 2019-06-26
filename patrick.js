console.log('JavaScript Test');

// 1. Schreibe ein Programm, das den Städtenamen anzeigt, aber nur, wenn es mit "Los" oder "New" beginnt, sonst soll es zurückgeben: "Dieser Städtename beginnt nicht mit Los oder New". 

function staedtename(town) {
    const townName = town;
    const townArray = townName.split(' ');
    if (townArray[0] === 'New' || townArray[0] === 'Los') {
        console.log(town);
    } else console.log('Dieser Städtename beginnt nicht mit Los oder New');
}

staedtename('Berlin');
staedtename('New York');
staedtename('Los angeles');
staedtename('Hamburg');


// 2. Schreibe ein Programm, das die Summe von allen Elementen eines gegebenen Arrays von Integers ausrechnet. Die Länge des Arrays muss mindestens 3 sein.  
// * **Beispiel**
// * [5, 10, 15] ➞ 30

function summe(sumArray) {
    let number = 0;
    for (let i = 0; i < sumArray.length; i++) {
        number += sumArray[i]
    }
    return number
}

console.log(summe[5, 10, 15]);



// 3. Gegeben sind zwei Strings, firstName und lastName, gib einen einzelnen String zurück im Format "lastName, firstName".
// * **Beispiele**
// * "John", "Doe" ➞ "Doe, John"
// * "Mary", "Jane" ➞ "Jane, Mary"

let name = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(name.lastName, name.firstName);


// 4. Schreibe ein Programm dass ein Integer bekommt und true zurückgibt, wenn es durch 100 teilbar ist, ansonsten gibt es false zurück.
// * **Beispiele**
// * 1 ➞ false
// * 1000 ➞ true
// * 100 ➞ true

const zahl = 100;

function divide(x, zahl) {
    if (x % zahl == 0) {
        return true
    } else return false
}

console.log(divide(200, zahl));
console.log(divide(199, zahl));
console.log(divide(500, zahl));
console.log(divide(100, zahl));
console.log(divide(534, zahl));


//  5. Schreibe ein Programm, dass eine String-Endung an jedes Teil eines Arrays anhängt.
// * **Beispiele & erwarteter Output**
// * ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// * ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
// * ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]

// let a = 'ly';
// let b = 'er';
// let c = 'ing';

// let array1 = {
//         "clever",
//         "meek",
//         "hurried",
//         "nice";
//         console.log(array1);


// 6. Schreibe eine Programm, dass checkt, ob eine Zahl gerade oder ungerade ist und "gerade" für gerade Zahlen und "ungerade" für ungerade Zahlen zurückgibt..
// * **Beispiele & erwarteter Output**
// * 3 ➞ "3 ist ungerade"
// * 146 ➞ "146 ist gerade"
// * 19 ➞ "19 ist ungerade"

const teiler = 2;

function gerade(y, teiler) {
    if (y % teiler === 0 || y % teiler === 2) {
        console.log('gerade')
    } else console.log('ungerage')
}
gerade(11, teiler);
gerade(10, teiler);
gerade(5, teiler);
gerade(6, teiler);


// 7. Gegeben sind zwei von drei Winkeln eines Dreiecks, in Grad, z.B. 29° und 59°. Schreibe ein Programm, dass den fehlenden (dritten) Winkel berechnet und klassifiziert, entweder als "spitz", "rechter Winkel", oder "stumpf" basierend auf seiner Gradzahl.

// let dreieck = dreieckGra(a,b,);



// 9. Schreibe ein Programm, dass einen String nimmt und die Anzahl der Wörter zurückgibt. Der String ist ein Satz.
// * **Beispiele & erwarteter Output**
// * "Dies ist ein Beispiel" ➞ 4
// * "Noch ein Beispiel für eine gute Messung" ➞ 7
// * "JavaScript macht Spaß, oder?" ➞ 4

let str = 'Das ist ein Satz.';
 
let anzahl = str.split(' ').length;
 
console.log(`Der String hat ${anzahl} Wörter.`);



// 10. Schreibe ein Programm, dass jeden Wert eines Arrays mit der Anzahl der Elemente im Array multipliziert und diese Werte in einem Array zurückgibt
// * **Beispiele**
// * [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
// * [4, 1, 1] ➞ [12, 3, 3]
// * [1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
// * [0] ➞ [0]
