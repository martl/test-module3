// 1.   Schreibe ein Programm, das den Städtenamen anzeigt, aber nur, wenn es mit "Los" oder "New" beginnt, 
// sonst soll es zurückgeben: "Dieser Städtename beginnt nicht mit Los oder New".

function coolCity(eingabe) {
    var  LosNew=eingabe.substr(0,3);

    if (LosNew=='Los') {
        console.log(eingabe);
    }
    else if (losNew=='New'){
        console.log(eingabe);
    }
    else {
        console.log('Dieser Städtename beginnt nicht mit Los oder New');
    }
    
}

coolCity('Los Angeles');


// 2.  Schreibe ein Programm, das die Summe von allen Elementen eines gegebenen Arrays von Integers ausrechnet. 
// Die Länge des Arrays muss mindestens 3 sein.

// Beispiel
// [5, 10, 15] ➞ 30

// Lösung ohne Funktion!

var summeArray=0;
var arrayInt=[5,20,155];

for(var i=0; i<arrayInt.length;i++) {
    summeArray=summeArray+arrayInt[i];
}

console.log(summeArray);

////// Funktion hat leider nicht geklappt!

function extra() {
    var summeArray1=0;
    var arrayInt1=[5,20,155];

        if (arrayInt1.length<2) {
            return 'Array hat zu wenige Items';
        }
        else {
            for(var i=0; i<arrayInt1.length;i++) {
                return summeArray1=summeArray1+arrayInt1[i];
            }
        }
}

console.log(extra);

// 3. Gegeben sind zwei Strings, firstName und lastName, gib einen einzelnen String zurück im Format 
// "lastName, firstName".

// Beispiele
// "John", "Doe" ➞ "Doe, John"
// "Mary", "Jane" ➞ "Jane, Mary"

let firstName='Max';
let lastName='Mustermann';

let komma=', ';

let completeName=lastName.concat(komma,firstName);

console.log(completeName)


// 4. Schreibe ein Programm dass ein Integer bekommt und true zurückgibt, wenn es durch 100 teilbar ist, 
// ansonsten gibt es false zurück.

// Beispiele
// 1 ➞ false
// 1000 ➞ true
// 100 ➞ true



function test(Int) {
    if (Int%100===0) {
        console.log(true);
        } else {
        console.log(false);
        }
}

test(250);


// 5. Schreibe ein Programm, dass eine String-Endung an jedes Teil eines Arrays anhängt.

// Beispiele & erwarteter Output
// ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
// ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]


//nur der Anfang

var item=[];
var itemContent=item.push("clever", "meek", "hurried", "nice");
console.log(item);

function lexicalItemChanger() {

}

// 6. Schreibe eine Programm, dass checkt, ob eine Zahl gerade oder ungerade ist 
// und "gerade" für gerade Zahlen und "ungerade" für ungerade Zahlen zurückgibt..

// Beispiele & erwarteter Output
// 3 ➞ "3 ist ungerade"
// 146 ➞ "146 ist gerade"
// 19 ➞ "19 ist ungerade"

function oddOrEven(x) {
    if (x%2===0) {
        return 'gerade'
    }
    else return 'ungerade';
}

console.log(oddOrEven(3));



// 7. Gegeben sind zwei von drei Winkeln eines Dreiecks, in Grad, z.B. 29° und 59°. Schreibe ein Programm, dass den fehlenden (dritten) Winkel berechnet und klassifiziert, entweder als "spitz", "rechter Winkel", oder "stumpf" basierend auf seiner Gradzahl.

// Notizen

// Ein spitzer Winkel ist kleiner als 90°.
// Ein rechter Winkel ist genau 90°.
// Ein stumpfer Winkel ist größer als 90° (aber kleiner als 180°).

// Zum Beispiel: 11°, 20° sollte zurückgeben "stumpf", weil der fehlende Winkel wäre 149°, was ihn stumpf macht.

// Beispiele

// 27°, 59° ➞ Dann ist der dritte Winkel 92° also "stumpf"

// 135°, 11° ➞ Dann ist der dritte Winkel "spitz"

// 45°, 45° ➞ Dann ist der dritte Winkel "rechter Winkel"

// 8. Erzeuge eine Variable mit dem String Wert "maria jane jones". 
// Konvertiere jeden ersten Buchstaben zu Großbuchstaben. 
//Stelle sicher, dass dein Code für alle möglichen Inputs mit drei Namen funktioniert, 
//z.B. auch für "john james smith".


function upperCase(a) {
    let arrayWords=a.split('');
    let newsatz=[];

    for (let i=0; i<2; i++) {
        newSatz.push(arrayWords[i].charAt(0).toUpperCase()+arrayWords[i].slice(1));
    }
    return newSatz.join(' ');
}


console.log(upperCase('maria jane jones'));
// 9. Schreibe ein Programm, dass einen String nimmt und die Anzahl der Wörter zurückgibt. 
//Der String ist ein Satz.

// Beispiele & erwarteter Output
// "Dies ist ein Beispiel" ➞ 4
// "Noch ein Beispiel für eine gute Messung" ➞ 7
// "JavaScript macht Spaß, oder?" ➞ 4

function words(y) {
    let count=y.split(' ');
    count


}

words('Dies ist ein Beispiel')

// 10. Schreibe ein Programm, dass jeden Wert eines Arrays mit der Anzahl der Elemente im Array multipliziert und diese Werte in einem Array zurückgibt

// Beispiele
// [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0]
// [4, 1, 1] ➞ [12, 3, 3]
// [1, 0, 3, 3, 7, 2, 1] ➞ [7, 0, 21, 21, 49, 14, 7]
// [0] ➞ [0]