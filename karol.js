// # JavaScript Test 

// ## Vervollständige alle Fragen soweit es Dir möglich ist. Du darfst Google und Bücher benutzen, aber du darfst keine anderen Studenten oder Lehrer um Hilfe bitten. Genausowenig darfst du Code kopieren. 

// ### Erstelle eine ${vorname}.js Datei und arbeite von da aus. Wenn du z.B. Martina mit Vornamen heißt, erstelle eine martina.js. Bitte vergiss nicht, die Fragen als Kommentar über deiner Antwort zu platzieren.

// 1. Schreibe ein Programm, das den Städtenamen anzeigt, aber nur, wenn es mit "Los" oder "New" beginnt, sonst soll es zurückgeben: "Dieser Städtename beginnt nicht mit Los oder New". 

title("EXERCISE 1");
function verifyCityName(city){
    return (city.startsWith("New") || city.startsWith("Los")) ? city : "Dieser Städtename beginnt nicht mit Los oder New";
}

console.log(verifyCityName("Berlin"));
console.log(verifyCityName("Los Angeles"));
console.log(verifyCityName("New York"));

// 2. Schreibe ein Programm, das die Summe von allen Elementen eines gegebenen Arrays von Integers ausrechnet. Die Länge des Arrays muss mindestens 3 sein.  
// * **Beispiel**
// * [5, 10, 15] ➞ 30

title("EXERCISE 2");
let numbersArray = [5, 10, 15];
let sum = numbersArray.reduce((prev,curr)=>curr+prev,0);
console.log("Sum of the number in array is equal to",sum);

// 3. Gegeben sind zwei Strings, firstName und lastName, gib einen einzelnen String zurück im Format "lastName, firstName".
// * **Beispiele**
// * "John", "Doe" ➞ "Doe, John"
// * "Mary", "Jane" ➞ "Jane, Mary"
title("EXERCISE 3");
function formatName(firstName,secondName){
    return `${secondName}, ${firstName}`;
}
console.log(formatName("John","Doe"));
console.log(formatName("Mary","Jane"));

// 4. Schreibe ein Programm dass ein Integer bekommt und true zurückgibt, wenn es durch 100 teilbar ist, ansonsten gibt es false zurück.
// * **Beispiele**
// * 1 ➞ false
// * 1000 ➞ true
// * 100 ➞ true
title("EXERCISE 4");
let isDivisable = number => number % 100 === 0;
console.log(isDivisable(200));
console.log(isDivisable(150));

// 5. Schreibe ein Programm, dass eine String-Endung an jedes Teil eines Arrays anhängt.
// * **Beispiele & erwarteter Output**
// * ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// * ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
// * ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]
title("EXERCISE 5");
function addEnding(array,ending){
    return array.map((value)=>value.concat(ending))
}
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
console.log(addEnding(["new", "pander", "scoop"], "er"));
console.log(addEnding(["bend", "sharpen", "mean"], "ing"));

// 6. Schreibe eine Programm, dass checkt, ob eine Zahl gerade oder ungerade ist und "gerade" für gerade Zahlen und "ungerade" für ungerade Zahlen zurückgibt..
// * **Beispiele & erwarteter Output**
// * 3 ➞ "3 ist ungerade"
// * 146 ➞ "146 ist gerade"
// * 19 ➞ "19 ist ungerade"
title("EXERCISE 6");
function checkNumber(number){
    return number % 2 === 0 ? `${number} is gerade` : `${number} ist ungerade`
}
console.log(checkNumber(3));
console.log(checkNumber(146));
console.log(checkNumber(19));

// 7. Gegeben sind zwei von drei Winkeln eines Dreiecks, in Grad, z.B. 29° und 59°. Schreibe ein Programm, dass den fehlenden (dritten) Winkel berechnet und klassifiziert, entweder als "spitz", "rechter Winkel", oder "stumpf" basierend auf seiner Gradzahl.

// * **Notizen**
// * Ein spitzer Winkel ist kleiner als 90°.
// * Ein rechter Winkel ist genau 90°.
// * Ein stumpfer Winkel ist größer als 90°  (aber kleiner als 180°).
// * Zum Beispiel: 11°, 20° sollte zurückgeben "stumpf", weil der fehlende Winkel wäre 149°, was ihn stumpf macht.

// * **Beispiele**
// * 29°, 59° ➞ Dann ist der dritte Winkel 92° also "stumpf"
// * 135°, 11° ➞ Dann ist der dritte Winkel "spitz"
// * 45°, 45° ➞ Dann ist der dritte Winkel "rechter Winkel"
title("EXERCISE 7");
function countAngle(angle1,angle2){
    let angle3 = 180 - (angle1 + angle2);
    if(angle3 >0 && angle3<90)
        return `${angle3} ist spitz winkel`;
    else if(angle3 >90 && angle3<180)
        return `${angle3} ist stumpf winkel`;
    else if(angle3 === 90)
        return `${angle3} ist rechter winkel`;
    else 
        return "Winkel ist nich gultig";
}

console.log(countAngle(29,59));
console.log(countAngle(135,11));
console.log(countAngle(45,45));

// 8. Erzeuge eine Variable mit dem String Wert "maria jane jones". Konvertiere jeden ersten Buchstaben zu Großbuchstaben. Stelle sicher, dass dein Code für alle möglichen Inputs mit drei Namen funktioniert, z.B. auch für "john james smith". 
title("EXERCISE 8");
function capitalize(name){
    return name.split(" ").map(value=>value.charAt(0).toUpperCase().concat(value.substr(1))).join(" ");
}
console.log(capitalize("maria jane jones"));
console.log(capitalize("john james smith"));

// 9. Schreibe ein Programm, dass einen String nimmt und die Anzahl der Wörter zurückgibt. Der String ist ein Satz.
// * **Beispiele & erwarteter Output**
// * "Dies ist ein Beispiel" ➞ 4
// * "Noch ein Beispiel für eine gute Messung" ➞ 7
// * "JavaScript macht Spaß, oder?" ➞ 4
title("EXERCISE 9");
function countWords(sentence){
    return sentence.split(" ").length;
}
console.log(countWords("Dies ist ein Beispiel"));
console.log(countWords("Noch ein Beispiel für eine gute Messung"));
console.log(countWords("JavaScript macht Spaß, oder?"));

// 10. Schreibe ein Programm, dass jeden Wert eines Arrays mit der Anzahl der Elemente im Array multipliziert und diese Werte in einem Array zurückgibt
// * **Beispiele**
// * [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
// * [4, 1, 1] ➞ [12, 3, 3]
// * [1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
// * [0] ➞ [0]
title("EXERCISE 10");
function multiplyArray(array){
    return array.map(value=>value*array.length);
}
console.log(multiplyArray([2, 3, 1, 0]));
console.log(multiplyArray([4, 1, 1]))
console.log(multiplyArray([1, 0, 3, 3, 7, 2, 1]))
// ## Viel Erfolg! :)

// function to print title nicely
function title(title){
    console.log("*".repeat(100));
    console.log(title);
    console.log("*".repeat(100));
}