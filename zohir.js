/*1. Schreibe ein Programm, das den Städtenamen anzeigt, aber nur, wenn es mit "Los" oder "New" beginnt, sonst soll es zurückgeben: "Dieser Städtename beginnt nicht mit Los oder New". */

function showCityName(cityName) {

    if ((cityName.match(/Los/)) || (cityName.match(/New/))) {
        console.log('City Name is : ' + cityName);
    } else {
        console.log('"Dieser Städtename beginnt nicht mit Los oder New"');
    }

}

showCityName('Losanglos');
showCityName('Newisland');
showCityName('Berlin');

/* 2. Schreibe ein Programm, das die Summe von allen Elementen eines gegebenen Arrays von Integers ausrechnet. Die Länge des Arrays muss mindestens 3 sein.  
* **Beispiel**
* [5, 10, 15] ➞ 30 */

function summeAlleElement(integersArray) {
    console.log(integersArray);
    var summe = 0;
    if (integersArray.length >= 3) {
        var i;
        for (i = 0; i < integersArray.length; i++) {
            summe = summe + integersArray[i];
        }
        console.log('Die Summe von allen Elementen eines gegebenen Arrays gleich : ' + summe);
    } else {
        console.log('Die Länge des Arrays muss mindestens 3 sein. ');
    }
}
summeAlleElement([3, 5, 7, 1, 2]);
summeAlleElement([3, 5, 7]);
summeAlleElement([5, 10, 15]);
summeAlleElement([1, 2, 3, 4, 5, 6]);


/* 3.Gegeben sind zwei Strings, firstName und lastName, gib einen einzelnen String zurück im Format "lastName, firstName".
* **Beispiele**
* "John", "Doe" ➞ "Doe, John"
* "Mary", "Jane" ➞ "Jane, Mary" */

function vollName(firstName, lastName) {
    console.log(`VollName ist : "${lastName}, ${firstName}"`);
}
vollName("John", "Doe");

vollName("Mary", "Jane");

/* 4. Schreibe ein Programm dass ein Integer bekommt und true zurückgibt, wenn es durch 100 teilbar ist, ansonsten gibt es false zurück.
* **Beispiele**
* 1 ➞ false
* 1000 ➞ true
* 100 ➞ true */

function is100Teilbar(integer) {
    if (integer % 100 === 0) {
        console.log('true');
    } else {
        console.log('false')
    }

}

is100Teilbar(1);
is100Teilbar(1000);
is100Teilbar(100);
is100Teilbar(150);

/* 5. Schreibe ein Programm, dass eine String-Endung an jedes Teil eines Arrays anhängt.
* **Beispiele & erwarteter Output**
* ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
* ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
* ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"] */



function add_string_atTheEnd(arrayOfString, stringAtTheEnd) {
    var i, x;
    for (i = 0; i < arrayOfString.length; i++) {
        for (x = 0; x < arrayOfString[i].length; x++) {

            // arrayOfString[i][x].length=arrayOfString[i][x].length+stringAtTheEnd.length;
            var res = arrayOfString[i][x].split();
            // arrayOfString[i][x].split();
            // console.log(res);




            res.push(stringAtTheEnd);
        }
        console.log(arrayOfString);
    }
    console.log(arrayOfString);
}

add_string_atTheEnd(["clever", "meek", "hurried", "nice"], "ly");


/* 6. Schreibe eine Programm, dass checkt, ob eine Zahl gerade oder ungerade ist und "gerade" für gerade Zahlen und "ungerade" für ungerade Zahlen zurückgibt..
* **Beispiele & erwarteter Output**
* 3 ➞ "3 ist ungerade"
* 146 ➞ "146 ist gerade"
* 19 ➞ "19 ist ungerade" */

function check_geradeOrungerade(number) {
    if (number % 2 === 0) {
        console.log('Die Nummer ' + number + ' ist gerade ')
    } else {
        console.log('Die Nummer ' + number + ' ist ungerade ')

    }
}

check_geradeOrungerade(3);
check_geradeOrungerade(146);
check_geradeOrungerade(19);

/* 7. Gegeben sind zwei von drei Winkeln eines Dreiecks, in Grad, z.B. 29° und 59°. Schreibe ein Programm, dass den fehlenden (dritten) Winkel berechnet und klassifiziert, entweder als "spitz", "rechter Winkel", oder "stumpf" basierend auf seiner Gradzahl. */


function drittenWinkel(winkel1, winkel2) {
    var winkel3 = 0;
    winkel3 = 180 - (winkel1 + winkel2);
    console.log('winkel3 ist : ' + winkel3);

    if (winkel3 < 90) {
        console.log('Den fehlenden (dritten) Winkel ist (spitz)')
    } else if (winkel3 === 90) {
        console.log('Den fehlenden (dritten) Winkel ist (rechter Winkel)')

    } else {
        console.log('Den fehlenden (dritten) Winkel ist (stumpf)')

    }

}

drittenWinkel(29,59);
drittenWinkel(45,45);
drittenWinkel(120,10);


/* 8. Erzeuge eine Variable mit dem String Wert "maria jane jones". Konvertiere jeden ersten Buchstaben zu Großbuchstaben. Stelle sicher, dass dein Code für alle möglichen Inputs mit drei Namen funktioniert, z.B. auch für "john james smith".  */

function upperCaseEveryFirstLetter(text){
    var pieces = text.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();

        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");

}

console.log(upperCaseEveryFirstLetter("john james smith"));
console.log(upperCaseEveryFirstLetter("Konvertiere jeden ersten Buchstaben zu Großbuchstaben"));


/* 9. Schreibe ein Programm, dass einen String nimmt und die Anzahl der Wörter zurückgibt. Der String ist ein Satz.
* **Beispiele & erwarteter Output**
* "Dies ist ein Beispiel" ➞ 4
* "Noch ein Beispiel für eine gute Messung" ➞ 7
* "JavaScript macht Spaß, oder?" ➞ 4     */


function die_Anzahl_der_Wörter(text){
    var pieces = text.split(" ");
    console.log('die Anzahl der Wörter for Satz ('+text +')ist :'+pieces.length);
}

die_Anzahl_der_Wörter("Dies ist ein Beispiel");

die_Anzahl_der_Wörter("Noch ein Beispiel für eine gute Messung");

/* 10. Schreibe ein Programm, dass jeden Wert eines Arrays mit der Anzahl der Elemente im Array multipliziert und diese Werte in einem Array zurückgibt
* **Beispiele**
* [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0] 
* [4, 1, 1] ➞ [12, 3, 3]
* [1, 0, 3, 3, 7, 2, 1] ➞  [7, 0, 21, 21, 49, 14, 7]
* [0] ➞ [0] */

function multipliziert(arrayofnumbers){
    for ( var i = 0; i < arrayofnumbers.length; i++ )
    {
        console.log(arrayofnumbers.length);
        arrayofnumbers[i]=arrayofnumbers[i]*(arrayofnumbers.length) ;
    }

    // console.log(arrayofnumbers);
    return arrayofnumbers;
}

console.log('[2, 3, 1, 0] => ' + multipliziert([2, 3, 1, 0])); 
console.log('[4, 1, 1] => ' + multipliziert([4, 1, 1])); 
console.log('[1, 0, 3, 3, 7, 2, 1] => ' + multipliziert([1, 0, 3, 3, 7, 2, 1])); 
console.log('[0] => ' + multipliziert([0])); 