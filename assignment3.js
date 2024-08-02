// Question 1
// *Task:* Write a JavaScript function that takes an array of strings and returns a new array with each first letter of each string capitalized.
function captilaizer(array) {
  //defining the function
  let newarray = [];
  for (
    let i = 0;
    i < array.length;
    i++ //for loop
  ) {
    newarray.push(array[i][0].toUpperCase() + array[i].slice(1)); //adding the elements and capitalizing the first letter
  }
  return newarray;
}
console.log(captilaizer(["yash", "jogle", "yug"])); //calling the function

// Question 2
// *Task:* Create a function that returns the second largest element in an array.
function sec_large(array) {
  //defining the function
  let high = 0;
  for (
    let i = 0;
    i < array.length;
    i++ //for loop
  ) {
    if (array[i] > high) {
      //comparing the elements
      high = array[i]; //storing the largest element
    }
  }
  let second = 0; //variable to store the second largest element
  for (
    let i = 0;
    i < array.length;
    i++ //   for loop
  ) {
    if (array[i] > second && array[i] < high) {
      //comparing the elements
      second = array[i]; //storing the second largest element
    }
  }
  return console.log(`Second largest element ${second}`); //printing the second largest element
}
console.log(sec_large([9, 7, 90, 34, 15])); //calling the function

// Question 3
// *Task:* Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.
const obj = [
  { name: "YASH", age: 18 },
  { name: "ARLEN", age: 17 },
  { name: "YUG", age: 17 },
]; //array of objects
const key = "name";
function get_value(obj, key) {
  //defining the function
  let new_array = [];
  for (
    let i = 0;
    i < obj.length;
    i++ //for loop
  ) {
    new_array.push(obj[i][key]); //adding the elements
  }
  return new_array; //returning the array
}
console.log(get_value(obj, key)); //calling the function

// Question 4
// Task:* Calculate the factorial of every element in an array and store it in a new array.
// Function to compute the factorial of a number
function fact(n) {
  //defining the function
  let result = 1;
  for (let i = 1; i <= n; i++) {
    //for loop
    result *= i; //multiplying the elements till loop ends
  }
  return result; //returning the result
}
// Function to compute the factorials for each element in an array
function get_fact(array) {
  //defining the function
  let fact_array = [];
  for (let i = 0; i < array.length; i++) {
    //for loop
    fact_array.push(fact(array[i])); //adding the elements
  }
  return fact_array; //returning the array
}
let inputArray = [1, 2, 3, 4, 5]; //input array
let fact_array = get_fact(inputArray); //calling the function
console.log(fact_array); //printing the array

// Question 5
// *Task:* Create a function to find the intersection of two arrays.

const array3 = [1, 2, 3, 4, 9]; //declaring the array
const array4 = [9, 3, 4, 5, 6]; //  declaring the array
function intersection(array3, array4) {
  //defining the function
  let new_array = []; //declaring the array
  for (
    let i = 0;
    i < array3.length;
    i++ //outer for loop
  ) {
    for (
      let j = 0;
      j < array4.length;
      j++ //inner for loop
    ) {
      if (array3[i] == array4[j]) {
        //comparing the elements of i and j
        new_array.push(array3[i]); //adding the same elements
      }
    }
  }
  return new_array; //returning the array
}
console.log(intersection(array3, array4)); //calling the function
