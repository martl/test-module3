
//1.

let city = "New York";

let str=city.substring(0,3).toLowerCase();
console.log(str);
if ((str === "new") || (str === "los")) {
    console.log(city);
} else  {
    console.log("Der Städtename beginnt nicht mit los oder neu");
}


//2

let summe = 0; 
let integersArr = [5, 10, 15, 45];
for (let i = 0; i < integersArr.length; i++) {
    summe = summe + integersArr[i];
}
console.log(summe);


//3


let first = "Mary";
let last = "Green";
let comma = ", ";


let fullName = `${last.trim()}, ${first.trim()}`;
console.log(fullName);

//4

let integer = 0;
if ( integer===0) {
    console.log("Integer is 0");
} else if (integer % 100 === 0) {
    console.log(`${true} - ganze Zahl ist teilbar durch 100`);
} else {
    console.log(`${false} -ganze Zahl ist nicht teilbar durch 100 `);
}

//5

let adj = ["smart", "clever", "strong", "tall"];
let comparativeAdj = [];
let fullWord;

for (let i = 0; i < adj.length; i++) {
    fullWord = adj[i] + "er";
    comparativeAdj.push(fullWord);
}
console.log(comparativeAdj);
 
//6



let number = 12;

if (number % 2 === 0) {
    console.log(`${number} ist gerade `);
} else {
    console.log(`${number} ist ungerade`);
}

//7




//8
let name = "maria jane jones";
let nameArray = name.split(" ");
let aktiviertArray = [];

for (let i = 0; i < nameArray.length; i++) {
    let firstChar = nameArray[i][0].toUpperCase();
    let remainderName = nameArray[i].substring(1, nameArray[i].length);
    let fullName = firstChar + remainderName;
    aktiviertArray.push(fullName);
}

name = aktiviertArray.join(" ");
console.log(name);


//9

let satz= "Das kann so lange dauern, wie wir es wollen, es spielt keine Rolle!";

let AnzahlArray = satz.split(" ");
console.log(`(${satz}) enthält ${AnzahlArray.length} Wörter `);

//10

let numbersArray = [5, 10, 15, 20, 25, 30];
let berechnetArray = [];

for (let i = 0; i < numbersArray.length; i++) {
    let MultiplikationResult = numbersArray[i] * numbersArray.length;
    berechnetArray.push(MultiplikationResult);
}

console.log(berechnetArray);
 