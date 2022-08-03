console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
  //Was I supposed to do something with this question, or was it just an example?
  //It looks completed, to me.





// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test

console.log('Test - should say "Hello, Sarah!"', helloName('Sarah'));
    //I put my name in, to test. 





// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(`Sum of two numbers = ${addNumbers(3, 4)}`);





// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  return num1 * num2 * num3
}

console.log(`Multiplied total = ${multiplyThree(1, 2, 6)}`);
  //curious about operation of orders with this :)





// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );





// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( fruitArray ) {
  return fruitArray[fruitArray.length-1];
  }

let fruitArray =['apple', 'orange', 'kiwi'];
console.log(`Test - ${getLast(fruitArray)}`);





// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, colorArray ){
  for (i=0; i<colorArray.length; i++){
    if (value===colorArray[i]){
      return true;
    }
    else{
      return false;
    }
  }
}

let colorArray = ['red', 'green', 'blue', 'purple', 12]
console.log(`Test - ${find('green', fruitArray)}`)
console.log(`Test - ${find('purple', fruitArray)}`)
console.log(`Test - ${find(20, fruitArray)}`)

//I DON'T KNOW WHAT'S WRONG!!!!!!!!!!!!!!!!





// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );





// 9. Function to return the sum of all numbers in an array
function sumAll(numberArray) {
  let sum = 0
  for (i=0; i<numberArray.length; i++){
     sum += numberArray[i];
  }
  return sum;
}
  
let numberArray = [20, 10, 100]
console.log(`Test - ${sumAll(numberArray)}`)

 


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function posNumber(firstArray){
  return firstArray[i] > 0;
}

function newArray(firstArray){
  for (value of firstArray){
    if (value > 0){
      secondArray = [firstArray.filter(posNumber)];
      return secondArray;
    }
    else{
      return emptyArray=[];
    }
  }
}


let firstArray = [1, 3, 4, -8, -7, -9]
console.log(newArray(firstArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
