// console.log("Hello, World!");
// console.log("Amos Pelumi");

let name = "Joshua";
// console.log(name);

// console.log("tunde")

// const food = Number(prompt("How much was the food?" ));
// const tip = Number(prompt("tip percentage? ")) / 100
// const tipAmount = food * tip;

// let total = food + tipAmount;
// console.log(total)
// console.log(" tip amount", tipAmount)

// console.log(Math.floor(21.5))
// console.log(Math.ceil(21.5))

// console.log(Math.floor(Math.random() * 9))

// const weather = prompt("How is the weather? ");
// if(weather == "rain"){
//     console.log("Grab an Umbrella ☔️")
// }else{
//     console.log("Grab your sun glass 😎");
// }

// this is a function called say my name with no argument
function sayMyName1(){
    let name = prompt("What is your name? ")
    // console.log("Hello, ", name);
}

// this is also a say my name function with an argument "name"
// this log my name using the one arggument which was included
function sayMyName(name){
    // console.log(name)
}

// this is a greeting function with an arguent and also using template literals.
// this log out greetings which is in specific to the argument which was included. 
function greetings(name){
    // console.log(`Hi ${name}, how are you doing?`)
}

// greetings("Biola");

// this is a function that accepts two values as argument and it returns the sum
// of the two argumenet provided.
// arrow function with explicit return 
let sumArrow = (a, b) => {
    return a + b;
}

// example of an implicity arrow function return
const mySum = (a, b) => a + b;

// console.log(mySum(2, 2))


// food tip calculator
// this function helps in calculating the total amount for the food including the tip given
// this function also has two arguments
const tipCalculator = (food, tip) => {
    const tipPercentage = tip / 100;
    const tipAmount = food * tipPercentage;
    const total = mySum(food, tipAmount);
    return total;
}

// console.log(tipCalculator(100, 20));

// Arrays
const groceries = ['🍌', '🍓', '🥥', '🍎'];
// console.log(groceries);

// grabbing first index
// console.log(groceries[0]);

// grabbing the last index
// console.log(groceries[3]);

// adding another item into the array
groceries.push('🔫');
// console.log(groceries);

groceries.push('🥭');
// console.log(groceries);

// console.log(groceries.slice(1, 3));
// console.log(groceries.slice(3, 6));
// console.log(groceries.slice(0, 6));
// console.log(groceries.slice(1, 4));

// checking the index of an item in my groceries cart(array i mean lol)
// console.log(groceries.indexOf('🥥'));

// checking length of my groceries
// console.log(groceries.length);

// working with object and accessing the value using the dot notation.

const person = {
    name: "Leonard",
    shirt: "White"
}

// console.log(person.name);
// console.log(person.shirt);

//  working with object using the bracket notation.

const student = {
    name: "Abiodun Oluwapelumi Amos",
    faculty: "Science",
    department: "Computer Science",
    matric: 2023
}

// console.log(student['name']);
// console.log(student["matric"]);

// student.telephone = "01235467362";
// console.log(student.telephone) // accessing the telephone using the dot notation.
// console.log(student["telephone"]); // accessing the telphone using the bracket notation.

// console.log(student);

const person2 = {
    name: "Qazi",
    shirt: "black"
}

// console.log(person2.name);
// console.log(person2['shirt']);
// console.log(person2);

// const introducer = (name, shirt) => {
//     return `Hi, my name is ${name} and my shirt is ${shirt}`
// }

// console.log(introducer(person2.name, person2['shirt']));


// this is es6 type of function with two arguments
//  it has object in it.
// and it uses a template literals

const introducer2 = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assest: 100000,
        liabilities: 50000
    }

    const intro = `Hi, My name is ${person.name} and i am putting on a ${person["shirt"]} shirt 
    and my networth is ${person.assest - person.liabilities}`;
    return intro;
}


console.log(introducer2("Amos", "Blue"));
console.log(introducer2("Leonardo", "White"));

