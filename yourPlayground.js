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
        liabilities: 50000,
        networth: function(){
            return this.assest - this.liabilities;
        }
    }

    const intro = `Hi, My name is ${person.name} and i am putting on a ${person["shirt"]} shirt 
    and my networth is $${person.networth()}`;
    return intro;
}


// console.log(introducer2("Amos", "Blue"));
// console.log(introducer2("Leonardo", "White"));

//  for loop
let fruits = ['🍌','🍎', '🍊', '🍐', '🍌','🍎', '🍊', '🍐', '🍌','🍎', '🍊', '🍐', '🍌','🍎', '🍊', '🍐']
// for(let i = 0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// for(const fruit of fruits){
//     console.log(fruit);
// }

let number = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i<number.length; i++) {
//     console.log(number[i]);
// }


// this method double every element in your array
const double = (numbers) => {
    let result = [];

    for(const number of numbers){
        result.push(number * 2);
    }

    return result;
}

// console.log(double([3,5]));


// this method squalre every elment in your array
const square = (numbers) => {
    let result = [];

    for (const number of numbers){
        result.push(number**2)
    }

    return result;
}

// console.log(square([2,4]))

// let result = [];

// for(const num of number){
//     result.push(num * 2);
// }

// console.log(result); 

// looping through the numbers

const myFunction = () => {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

    for (number in numbers){
        console.log(number)
    }

    console.log(numbers.indexOf(2));
}

// myFunction()


// const howManyCharacters = () => {
//     const sentence = 'hey, can you go to grocery store with me?';
//     let count = 0;

//     for(letter of sentence){
//         // console.log(letter);
//         count++;
//     }

//     return count;
// }

// console.log(howManyCharacters());

// functions that count characters
const howManyCharacters = (phrase) => {
    // let result = 0;

    // for(letter in phrase){
    //     console.log(Number(letter) + 1)

    //     result = Number(letter) + 1;
    // }

    return {length: phrase.length}

}

const phrase = "hey, can you go to grocery store with me?";
// console.log(howManyCharacters(phrase));

// this is a function that accept variables, amd it sum up all numbers in an array
const sumUp = (numbers) => {
    let result = 0;

    for (number of numbers){
        result += number;
    }

    return {number: result};
}

numbers = [1, 2, 3, 4, 5, 6];
// console.log(sumUp(numbers));


// this is a function that accept variables, amd it sum up all numbers in an array
const sumArray = (argum) => {
    
    let ans = 0;
    for (num of array){
        ans += num
    }

    return{ans}
}

const array = [1, 2, 3, 4, 5, 6, 6, 20];
// console.log(sumArray(array))


//  this function below find the max in an array
const findMax = (argument) => {
    let max = 0;

    for(num of argument){
        if(num > max){
            max = num;
        }else{
            return max;
        }
    }

    return {max};
}

// console.log(findMax(array))

// this function below shows how many times a number appears
const findFrequency = (argument) => {
    let frequnecy = {};

    for (letter of argument){
        if(letter in frequnecy){
            frequnecy[letter] += 1;
        }else{
            frequnecy[letter] = 1;
        }
    }

    return frequnecy
}

// console.log(findFrequency(array))

const checkCharacter = (letters) => {
    let frequnecy = {}
    for (letter of letters){
        if(letter in frequnecy){
            frequnecy.letter += 1;
        }else{
            frequnecy.letter = 1;
        }
    }

    return frequnecy
}

// console.log(checkCharacter("comee"));

// trying to split a sentence with spaace

let sentence = "Hey, what, sup";
let seprating = sentence.split(' ');
for(word of seprating){
    // console.log(word);
}

// trying to split a sentence or word with a coma,
let sentence1 = "Hey, what, sup";
let seprating1 = sentence.split(',');
for(word of seprating1){
    // console.log(word);
}


// now the function below checks frequency of words
const checkWordFrequency = (words) => {
    // decalre an empty object so as to store our result in here
    let frequency = {};

    // breaking or split the words so we can be able to loop through it as words and not just a character
    let brokenWords = words.split(' ');

    for (word of brokenWords){
        if (word in frequency){
            frequency[word] += 1
        }else{
            frequency[word] = 1;
        }
    }

    return frequency;
}

const typeInHere = prompt("Type in something: ");
console.log(checkWordFrequency(typeInHere));