// 1. Schreibe ein Programm, das den Städtenamen anzeigt, aber nur, wenn es mit "Los" oder 
//"New" beginnt, sonst soll es zurückgeben: "Dieser Städtename beginnt nicht mit Los oder New". 

function cityname(city){
    let x = city.split(" ");
    console.log(x);
    let output = (x[0] === 'New' || x[0] === 'Los') ? city :"Dieser Städtename beginnt nicht mit Los oder New";
    console.log (output);
}

cityname('New York');
cityname('Berlin');
cityname('Los Angeles');
cityname('Las Vegas');
cityname('Königs Wusterhausen');


// 2. Schreibe ein Programm, das die Summe von allen Elementen eines gegebenen Arrays von 
// Integers ausrechnet. Die Länge des Arrays muss mindestens 3 sein.  
// * **Beispiel**
// * [5, 10, 15] ➞ 30

function addArray(x){
    let i=0;
    let y=0;
    for(i in x){y += x[i]};
    return y;
}

var aArr = [5, 10, 15];
var bArr = [9, 11, 19, 27];
var cArr = [Math.random(), Math.random()*10, Math.random()*100];
console.log(cArr);
var dArr = [0, -5, 4];


console.log(addArray(aArr));
console.log(addArray(bArr));
console.log(addArray(cArr));
console.log(addArray(dArr));

// 3. Gegeben sind zwei Strings, firstName und lastName, gib einen einzelnen String zurück 
// im Format "lastName, firstName".
// * **Beispiele**
// * "John", "Doe" ➞ "Doe, John"
// * "Mary", "Jane" ➞ "Jane, Mary"

let firstName = 'John';
let lastName = 'Doe';
let name = `${firstName}, ${lastName}`;
console.log(name);

firstName = 'Mary';
lastName = 'Jane';
name = `${firstName}, ${lastName}`;
console.log(name);

// 4. Schreibe ein Programm dass ein Integer bekommt und true zurückgibt, 
// wenn es durch 100 teilbar ist, ansonsten gibt es false zurück.
// * **Beispiele**
// * 1 ➞ false
// * 1000 ➞ true
// * 100 ➞ true

function cent(x){
    return (x % 100 === 0);
}

console.log(cent(1));
console.log(cent(17));
console.log(cent(200));
console.log(cent(2013));
console.log(cent(345283476187400));

// 5. Schreibe ein Programm, dass eine String-Endung an jedes Teil eines Arrays anhängt.
// * **Beispiele & erwarteter Output**
// * ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// * ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
// * ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]

function appentEnd(x,y){
    let temp = x;
    let i = 0;
    console.log(temp);
    for (i in temp){temp[i] += y};
    x=temp;
    return x;
}

let words1 = ["clever", "meek", "hurried", "nice"];
let words2 = ["new", "pander", "scoop"];
let words3 = ["bend", "sharpen", "mean"];

console.log(appentEnd(words1,'ly'));
console.log(appentEnd(words2,'er'));
console.log(appentEnd(words3,'ing'));


// 6. Schreibe eine Programm, dass checkt, ob eine Zahl gerade oder ungerade ist und 
// "gerade" für gerade Zahlen und "ungerade" für ungerade Zahlen zurückgibt..
// * **Beispiele & erwarteter Output**
// * 3 ➞ "3 ist ungerade"
// * 146 ➞ "146 ist gerade"
// * 19 ➞ "19 ist ungerade"

function oddOrEven(num){
    (num % 2 === 0) ? console.log(`${num} ist gerade`) : console.log(`${num} ist ungerade`);
}

oddOrEven(3);
oddOrEven(146);
oddOrEven(19);
oddOrEven(22);
oddOrEven(3);
oddOrEven(0);


// 7. Gegeben sind zwei von drei Winkeln eines Dreiecks, in Grad, z.B. 29° und 59°. 
// Schreibe ein Programm, dass den fehlenden (dritten) Winkel berechnet und klassifiziert, 
//entweder als "spitz", "rechter Winkel", oder "stumpf" basierend auf seiner Gradzahl.

// * **Notizen**
// * Ein spitzer Winkel ist kleiner als 90°.
// * Ein rechter Winkel ist genau 90°.
// * Ein stumpfer Winkel ist größer als 90°  (aber kleiner als 180°).
// * Zum Beispiel: 11°, 20° sollte zurückgeben "stumpf", weil der fehlende Winkel wäre 149°, was ihn stumpf macht.

// * **Beispiele**
// * 27°, 59° ➞ Dann ist der dritte Winkel 92° also "stumpf"
// * 135°, 11° ➞ Dann ist der dritte Winkel "spitz"
// * 45°, 45° ➞ Dann ist der dritte Winkel "rechter Winkel"

function angle(alpha, beta){
        ((alpha + beta) >= 180) ? console.log ('Kein Dreieck!'): 
    (180 - (alpha + beta) < 90) ? console.log (`gamma ist ${180 - (alpha + beta)}° und daher spitz`):
    (180 - (alpha + beta) == 90) ? console.log (`gamma ist ${180 - (alpha + beta)}° und daher ein rechter Winkel`):
    console.log (`gamma ist ${180 - (alpha + beta)}° und daher stumpf`);
}

angle(11,20);
angle(135,11);
angle(45,45);
angle(90,90);




// 8. Erzeuge eine Variable mit dem String Wert "maria jane jones". 
// Konvertiere jeden ersten Buchstaben zu Großbuchstaben. Stelle sicher, dass dein 
// Code für alle möglichen Inputs mit drei Namen funktioniert, z.B. auch für "john james smith". 



function capitalizer(x){
    let y ='';
    let temp = x.split(' ');
    for (i in temp){
        temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
        y += temp[i] + ' '; 
    }
    return y;
}

var nameStr = "maria jane jones";
console.log(capitalizer(nameStr));
nameStr = "john james smith";
console.log(capitalizer(nameStr));
nameStr = "maria jane jones john james smith alpha beta gamma";
console.log(capitalizer(nameStr));

// 9. Schreibe ein Programm, dass einen String nimmt und die Anzahl der Wörter zurückgibt. 
// Der String ist ein Satz.
// * **Beispiele & erwarteter Output**
// * "Dies ist ein Beispiel" ➞ 4
// * "Noch ein Beispiel für eine gute Messung" ➞ 7
// * "JavaScript macht Spaß, oder?" ➞ 4

function wordCount(x){
    let y = x.split(' ');
    return y.length;
}

let sentence = "Dies ist ein Beispiel";
console.log(wordCount(sentence));
sentence = "Noch ein Beispiel für eine gute Messung";
console.log(wordCount(sentence));
sentence = "JavaScript macht Spaß, oder?";
console.log(wordCount(sentence));
let lorem50 ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ullam iure quaerat autem totam! Possimus repellat odit aliquid suscipit earum, sed officia? Adipisci veritatis quia sunt, accusamus culpa officiis dolore ullam blanditiis odit repellat corporis reprehenderit fugiat illo neque recusandae obcaecati repellendus? Quas distinctio magni perspiciatis repellat autem. Omnis, quae.";
console.log(wordCount(lorem50));

// 10. Schreibe ein Programm, dass jeden Wert eines Arrays mit der Anzahl der Elemente 
// im Array multipliziert und diese Werte in einem Array zurückgibt
// * **Beispiele**
// * [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
// * [4, 1, 1] ➞ [12, 3, 3]
// * [1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
// * [0] ➞ [0]

function multiPly(x){
    for (i in x){
        x[i] = x[i] * x.length;
    }
    return x;
}

let testArray = [2, 3, 1, 0];
console.log(multiPly(testArray));
testArray = [4, 1, 1];
console.log(multiPly(testArray));
testArray = [1, 0, 3, 3, 7, 2, 1];
console.log(multiPly(testArray));
testArray = [0];
console.log(multiPly(testArray));

