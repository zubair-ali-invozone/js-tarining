// ---- Var ----
var a = 5;

{
    var a = 4;
    // a = 4.5;
    console.log("This is var inside block ", a);
}
var a = 3;
a = 2;

console.log("This is var ", a);

// ---- Let ----
let b = 5;

{
    let b = 4;
    // b = 4.5;
    console.log("This is let inside block ", b);
}
 // let b = 3; (Uncaught SyntaxError: Identifier 'b' has already been declared)
b = 2;

console.log("This is let after block", b);


// ---- const ----
const c = 5;

{
    const c = 4;
    // c = 4.5;
    console.log("This is const inside block ", c);
}
// const c = 3;
// c = 2; (Uncaught TypeError: Assignment to constant variable.)

console.log("This is const after block", c);

// ---- Mutable ----
let person = {
    name: "Ali",
    age: 30
}

let person2 = person; // Assign same object
person2.name = "Zubair"; // (Object is mutable / changeable)

console.log(person);
console.log(person2);

// ---- Immutable ----
let person3 = {
    name: "Ali",
    age: 30
}

let person4 = {...person}; // Copy the whole object into different variable use spread operator (...).
person2.name = "Zubair"; // (Object is mutable / changeable)

console.log(person3);
console.log(person4);

// ---- JS primitive types ----
// 1. null
// 2. undefined
// 3. number
// 4. string
// 5. symbol
// 6. big int
// JS primitive types are immutable example below

let name = "Abc";
let name2 = name;
name2 = "Xyz";

console.log(name);
console.log(name2);

// ---- For Loop ----
for (let i = 0; i < 5; i++) {
    console.log("For Loop ", i);
}

// ---- While Loop ----
let j = 0;
while (j < 4) {
    console.log("While Loop ", j);
    j++;
}

// ---- Do while Loop ----
let k = 0
do {
    console.log("Do while Loop ", k);
    k++;
} while (k < 4)

// ---- Array Pop ----
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
const popped = fruits.pop();
console.log("Popped element is ", popped);
console.log(fruits);

// ---- Array Push ----
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1);
fruits1.push("Kiwi", "Kiwi1");
console.log(fruits1);

// ---- Array Shift ----
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3);
const removed = fruits3.shift();
console.log("Removed element is ", removed);

// ---- Array Unshift ----
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4);
fruits4.unshift("Lemon","Pineapple");
console.log(fruits4);

// ---- Array toString ----
console.log("---- Array toString ----");
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5);
let text = fruits5.toString();
console.log(text);

// ---- Array Join ----
console.log("---- Array Join ----");
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6);
let joinText = fruits6.join("-"); // Default value is comma (,)
console.log(joinText);

// ---- Array Sort ----
console.log("---- Array Sort ----");
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits7);
fruits7.sort();
console.log(fruits7);

// ---- Array reverse ----
console.log("---- Array reverse ----");
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits8);
fruits8.reverse();
console.log(fruits8);

// ---- Array indexOf ----
console.log("---- Array indexOf ----");
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9);
let index = fruits9.indexOf("Apple",0); // returns -1 if not found. 2nd param is starting point.
console.log("Index is ", index);

// ---- Array lastIndexOf ----
console.log("---- Array lastIndexOf ----");
const fruits10 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
console.log(fruits10);
let index1 = fruits10.lastIndexOf("Apple"); // search value from right to left.
console.log("Last index is ", index1);

// ---- Array includes ----
console.log("---- Array lastIndexOf ----");
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits11);
let found = fruits11.includes("Mango");
console.log(found);

// ---- Array Find ----
console.log("---- Array Find ----");
const ages = [3, 10, 18, 20];
console.log(ages);
const findVal = ages.find((val) => { // It accepts a function.
    return val === 20;
});
console.log("Find value is ", findVal);

// ---- Array findIndex ----
console.log("---- Array findIndex ----");
const ages1 = [3, 10, 18, 20];
console.log(ages1);
const findVal1 = ages1.findIndex((val) => { // It accepts a function.
    return val === 20;
});
console.log("Find index is ", findVal1);

// ---- Array keys ----
console.log("---- Array keys ----");
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits12);
const keys = fruits12.keys();
for (let i of keys) {
    console.log("Key is ", i);
}
