// console.log("Hello, World!");
// console.log("Amos Pelumi");

// let name = "Joshua";
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
// function sayMyName1(){
//     let name = prompt("What is your name? ")
//     console.log("Hello, ", name);
// }

// this is also a say my name function with an argument "name"
// this log my name using the one arggument which was included
// function sayMyName(name){
//     console.log(name)
// }

// this is a greeting function with an arguent and also using template literals.
// this log out greetings which is in specific to the argument which was included. 
// function greetings(name){
//     console.log(`Hi ${name}, how are you doing?`)
// }

// greetings("Biola");

// this is a function that accepts two values as argument and it returns the sum
// of the two argumenet provided.
// arrow function with explicit return 
// let sumArrow = (a, b) => {
//     return a + b;
// }

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

console.log(tipCalculator(100, 20));
