/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const div = (a, b) => {
  if(b == 0){
    return "undefined"
  }else{
    return a/b;
  }
}

const mul = (a, b) => a * b;

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

console.log(add(4, 4));
console.log(div(2, 2));