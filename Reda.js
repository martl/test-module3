// 2 
let A = 0 ;
let int = [5, 10, 15, 45];
for (let i = 0; i < int.length; i++) {
   A = A + int[i];
}
console.log(A);


//3


let firstName = "Reda";
let lastName = "Agha";
let  X  = "";


let fullName = `${lastName.trim()}, ${firstName.trim()}`;
console.log(fullName);

//10

let array = [5, 10, 15, 20, 25, 30];
let bArray = [];

for (let i = 0; i < array.length; i++) {
   let MultiplikationResult = array[i] * array.length;
   bArray.push(MultiplikationResult);
}

console.log(bArray);