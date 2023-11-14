// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/ConvertHoursToSeconds#solution.js

// Solution 👉 https://www.loom.com/share/3de1aa5d007047ef82652530f04600b1

// Write a function that takes a parameter (hours) and converts
// it to seconds

function howManySeconds(hour) {
  // Your function should return an integer
  // of how many seconds are in the hour
  if(isNaN(hour) || !hour){
    console.log("please input an hour and make sure it a number!");
  }else{
    const hoursInSecond = hour * 3600;
    console.log(hoursInSecond);
  }
}

// howManySeconds(Number(prompt("how many hour(s)? ")))

//Topics: Variables,functions, Math
