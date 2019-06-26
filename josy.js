//1.Schreibe ein Programm, das den Städtenamen anzeigt, aber nur, wenn es mit "Los" oder "New" beginnt, sonst soll es zurückgeben: "Dieser Städtename beginnt nicht mit Los oder New".

function staedteNamen(stadt){
    let a = stadt.split(" ");
    console.log(a);
    let output = (a[0] === 'New' || a[0] === 'Los') ? stadt :"der städtename beginnt nicht mit Los oder New";
    console.log (output);
}
staedteNamen('new york');
staedteNamen('Bonn');
staedteNamen('los angeles');
staedteNamen('stendal');
staedteNamen('new brandenburg');


//2.Schreibe ein Programm, das die Summe von allen Elementen eines gegebenen Arrays von Integers ausrechnet. Die Länge des Arrays muss mindestens 3 sein.


var Integers = [5, 10, 15];

Integers[5,'+',10,'+', 15]
console.log(Integers);


//3.Gegeben sind zwei Strings, firstName und lastName, gib einen einzelnen String zurück im Format "lastName, firstName".

var firstName = `John`;
var lastName = `Doe`;

console.log(lastName,`,`, firstName);

//4.Schreibe ein Programm dass ein Integer bekommt und true zurückgibt, wenn es durch 100 teilbar ist, ansonsten gibt es false zurück.

function cent(x){
    return (x % 100 === 0);
}

console.log(cent(1));
console.log(cent(17));
console.log(cent(200));






//5.Schreibe ein Programm, dass eine String-Endung an jedes Teil eines Arrays anhängt.

function endung(x,y){
    let item = x;
    let i = 0;
    console.log(item);
    for (i in item){item[i] += y};
    x=item;
    return x;
}

let wort1 = ["clever", "meek", "hurried", "nice"];
let wort2 = ["bend", "sharpen", "mean"];
let wort3 = ["new", "pander", "scoop"];

console.log(endung(wort1,'ly'));
console.log(endung(wort2,'ing'));
console.log(endung(wort3,'er'));





//6.Schreibe eine Programm, dass checkt, ob eine Zahl gerade oder ungerade ist und "gerade" für gerade Zahlen und "ungerade" für ungerade Zahlen zurückgibt..

var x=5;
if(x % 2 != 0)("Die Zahl ist ungerade.");
else ("Die Zahl ist gerade.");







//7.Gegeben sind zwei von drei Winkeln eines Dreiecks, in Grad, z.B. 29° und 59°. Schreibe ein Programm, dass den fehlenden (dritten) Winkel berechnet und klassifiziert, entweder als "spitz", "rechter Winkel", oder "stumpf" basierend auf seiner Gradzahl.












//8.Erzeuge eine Variable mit dem String Wert "maria jane jones". Konvertiere jeden ersten Buchstaben zu Großbuchstaben. Stelle sicher, dass dein Code für alle möglichen Inputs mit drei Namen funktioniert, z.B. auch für "john james smith".


var str = 'c';
var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
  
  for(var x=0; x<str.length; x++)
  {
    if(UPPER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.indexOf(str[x]) !== -1)
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));








//9.Schreibe ein Programm, dass einen String nimmt und die Anzahl der Wörter zurückgibt. Der String ist ein Satz.


function wort(i){
    let y = i.split(' ');
    return y.length;
}

let satz = "Dies ist ein Beispiel";
console.log(wort(satz));







//10.Schreibe ein Programm, dass jeden Wert eines Arrays mit der Anzahl der Elemente im Array multipliziert und diese Werte in einem Array zurückgibt








