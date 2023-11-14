// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/FindMax-Solution#index.js

// Solution 👉 https://www.loom.com/share/cc0efcb5211b48dcb23637b6dae4c56f

// Write a function that takes in an array of numbers and returns the largest number

function findMax (arrays) {
  let max = 0;
  arrays.forEach(array => {
    if(array > max){
        max = array
    }else{
        max = max;
    }
  })

  console.log(max);
}

findMax([2, 4, 5, 7, 8, 10])

//Topics: loops, arrays, conditions,