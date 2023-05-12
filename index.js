// Write your solution here!
//Task1
let cats =  ["Milo", "Otis", "Garfield"];

//Task2
function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat("Ralph");
console.log(cats);

//Task3
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Bob")
console.log(cats);

//Task4
function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat();
console.log(cats);

//Task5
function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();
console.log(cats);

//Task6
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}
console.log(appendCat("Bo"));

//Task7
function prependCat(name) {
    return [name, ...cats];
} 
const newCatsList = prependCat("Janet");
console.log(newCatsList);

//Task8
function removeLastCat() {
    return cats.slice(0, 2);
}
console.log(removeLastCat());

//Task9
function removeFirstCat(){
    let noFirstCat = cats.splice(0,1);
    return noFirstCat;
}
