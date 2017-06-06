// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a,b){
  if (a > b){
    return a;
  }  else {
    return b;
  }// Your answer here
}
max(1,2);

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a,b,c){
  if (a > b > c){
    return a;
  }  else if (b > a > c){
    return b;
  } else {
    return c;// Your answer here
}
 // Your answer here
}
max(1,2,3);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    if (char=== "a" || char==="e" || char==="i" || char==="o" || char==="u") {
      return true;
    } else {
      return false;
    }// Your answer here
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum (a,b) {
  var addition = a + b;
  return addition;
}
sum(5,3);

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg (a,b,c){
  var sum = a + b + c;
  var divide = sum / 3;
  return divide;
}
avg(2,25,1);

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(string){
  var answer = string.length;
  return answer;
}
getLength("Tim is cool!");

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan (a,b) {
  if (b > a){
    return true;
  } else {
    return false;
  }
}

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet (Name) {
  return "Hello, " + Name + "!";
}
greet("Tim");
// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib (first, second, third, fourth) {
  return first + " runs from the " + second + " and falls into " + third + " where " + fourth + " is waiting!";
}
madlib('destiny', 'ball', 'slap', 'three');
