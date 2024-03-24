// Write your solution here!

//push
const cats = ["Milo", "Otis", "Garfield"];
const newLength = cats.push("Sparkles");
console.log(cats);
console.log(newLength);

//unshift
const cats = ["Milo", "Otis","Garfield"];
const newLength = cats.unshift("Penny");
console.log(cats);

console.log(newLength);


//pop
const cats = ["Milo", "Otis", "Garfield"];
const removeItem = cats.pop();
console.log(cats);

//shift
const cats = ["Milo", "Otis", "Garfield"];
const removeItem = cats.shift();
console.log(cats);

//splice
const cats = ["Milo", "Otis", "Garfield"];
const start = cats.indexOf("Tom");
const deleteCount = 1;
const removedItems = cats.splice(start, deleteCount);
console.log(cats);

console.log(removedItems);
