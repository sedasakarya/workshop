/** COMMENTS
-----------------------------------*/

// Single line comment.

/** 
 * This is a standart block Comment. 
*/

/* This is a comment as well */

/**------------------------------------------------ */

/** VARIABLES
-----------------------------------*/

/**  NAMING RULES
-----------------------------------------------*/
// 1. No spaces.
// 2. Do not start with numbers.
// 3. No dashes. It is considered as minus. Use underscore or Camelcase.
// 4. No "reserved keywords" like "function".

// Variable is like a container which holds some stuff.

let str = "My name is Seda"; // You may use semi-colon at the end or  may not. It depends on you. You can change the value later.
str = "My name is Seda"; //It is possible as well.
str = 'My name is Seda'; //You can do it with single quotation mark too.
const num = 9; // You cant not change the value later. It is  "constant".
var good = false; // Do not use it.


// "var" is the old way to do it because when you use it twice , JavaScript doesn't warn you about it. Instead use let and const.
// "let", "const" are variables.
// "str" means string. 
// Dont use spaces between names.


/**  NAMING BEST PRACTICES
        Camel Case !!!
-----------------------------------------------*/

let my_name = "Seda"; // Use underscore between words.
let myName = "Seda"; // Use camelCase. This is standart, use more than underscores. Underscores are old.
let someHeadsAreGonnaRoll = "Judas Priest Song"; // camelCase again.


/**  CASE SENSITIVE
-----------------------------------------------*/
let name = "Seda";
let Name = "Seda"; // "Name" and "name" are not same. Attention !!!!

/**  VARIABLE IS A CONTAINER
 * It can contain everything
-----------------------------------------------*/

let number = (9 + 9) - (3 * 5); // number 
let text = "Hello" // String
let cond = true; // Boolean
let data = [1,2,3,"Bob"]; // Array - Just values.
let object = {
  name: "JohnDoe",
  age: 23,
}; // Key and Value. name is key and JohnDoe is value.


/**  STRINGS
-----------------------------------------------*/

let str1 = "I'm 27 years old.";
let str2 = 'I\'am 27 years old.'; //Escape character \ , otherwise it is wrong because of two single quotation marks. It will be considered as text.

// In Js we "concatenate" with "+". 

let str3 = "I'm" + 35; 

let person = "Bob"; // If you can the value of name, the phrase will change.
let age= 32;
let floatnmbr= 1.3;
// let phrase = Bob is 32 years old.
let phrase = name + " is " + age + " years old.";

// //console.log();      prints what you have, an output.

//console.log(phrase);

// NATIVE STRING METHODS
let txt       = "Apple 'is' red";
let txtLength = txt.length; //console.log(txtLength);
let txt2      = "Beatles"; // console.log(txt2.split(""));
let txt3      ="Powercoders"; //console.log(txt3.substr(5,2)) // Where do you want to start, how many characters you want to see. It gives us "co"


/** ARRAY (LISTS)
 ---------------------------------*/
 let arr1   = [1,2,3,4,5]; //console.log(arr1);
 let arr2   = ["Seda", "Mehmet", "Jane", "John"]; //console.log(arr2);
 //console.log("Numbers array", arr1[2]); // Find the element inside the array. 3
 //console.log("Strings array",arr2[2]);// Jane

 
 // NATIVE ARRAY METHODS

// Add to array
 arr2.push("Bob"); //console.log(arr2); //It adds some element inside of an array
 //console.log(arr2.length);
 
// Delete from array
//arr2.pop(); console.log(arr2); // It removes last element !!!!
//arr2.shift(); console.log(arr2); // It removes first element !!!
//arr2.splice(2,2); //console.log(arr2); // It removes designated elements.


// Change a value inside an array
arr2[1] = "Rachel"; console.log(arr2);


// Using Splice method to modify an array  (3rd argument)

// We want to change "Mehmet"
arr2.splice(2,0, "Freddy"); // 0 means we dont want to delete anything !!!!!!
//console.log(arr2);


/** NUMBERS
-----------------------------------------*/

let integer   = 92; //integer
let negative  = -92; //negative
let float     = 1.5;  //float
let calculate = 8 + 2; //console.log(calculate);
let calc2     = 2 + 3 * 10; // Result 32 -----2 + (3*10)
let calc3     = (2 + 3) * 10; //50
let calc4     = -2 -2; // -4 console.log(calc4);
let calc5     = -2 + (-2); // -4 

// MODULO OPERATOR % 

// It gives the reminder

let reminder = 110 % 60 ; console.log(reminder);

reminder = 10 % 3 ; console.log(reminder); // changing the value without changing the variable.(write the name without let) This is like an over ride







// NATIVE NUMBER METHODS
let rand       = Math.random() * 10; //console.log(rand); // We see a random number between 0 and 1
let randInt    = Math.round(rand); //console.log(randInt); // it rounds the number
let roundCeil  = Math.ceil(1.25987456); //console.log(roundCeil); //It round up!!!!
let roundFloor = Math.floor(1,2); //console.log(roundFloor);// It rounds down !!!!


/** FUNCTION
-------------------------------*/
// You do a single task inside the function. Functions are like soldiers.
// splice() is a function, what are inside the parantheses are arguments or parameters.!!!!
// Keywords is function, after that how you name it, and arguments inside the parentheses.
// Functions take () after them
// ???????????? 

function calculateAge(name, birthYear) {
// I have two parameters, arguments (name, birthYear)
//let name = "Seda"; Dont define it because we do not want to use it for one person.
  let date = new Date();
  let currentYear = date.getFullYear(); console.log(currentYear); // It gives the year
// let currentYear = new Date().getMonth(); console.log(currentYear); It gives the month
  
  
  let age = currentYear - birthYear; //Dont define the year because we do not want to use it for one person.

  //return name + " is " + age + " years old !"; !!!!!!!!!!!!!! It is like an EXIT , it should be put after console.log
// You should RETURN  it at the end IMPORTANT !!!!!!!!!!!!!!!!!!!
// YOU CAN USE ONLY ONE RETURN, AFTER IT WILL GO OUTSIDE
  
  let bob = 56;
  return bob;
  console.log(name + " is " + age + " years old !"); //This is a easy way instead of return
// Nothing will display after the first return
}
calculateAge("Marc", 1985);
// Dont use ; inside the arguments 
//console.log( calculateAge("Seda", 1992) );
//console.log( calculateAge("Mehmet", 1988) );
//console.log( calculateAge("Martine", 2001) );

// FRESH FUNCTION 
// Return day of the week based on a number

function dayofTheWeek(index) {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  return days[index];

}

console.log(dayofTheWeek(6));


// NEW FUNCTION GREETING
function sayHello(greeting, input) {

  return greeting + " " + input + " !"; // We shouldn't put hard code like "Hello", "Seda" here.


}

console.log(sayHello("Bonjour","Seda"));

// -----CONVERT MINUTES INTO SECONDS---------------

function minToSec(input){
  
  let second = input * 60;
  return second + " " + "sec."

}

console.log(minToSec(52));


/* OR !!!!
function minToSec() { 
  // Inside the curly braces local scope / outside global scope
  
  // with prompt we dont need minutes arguments above
  
  let userInput = parseInt ( prompt("Number of Minutes")) // User can put number into the prompt
  
  console.log( userInput + " minutes = " + (minutes * 60 ) + " seconds");
 
  // userInput is string here. Convert this into number with "parseInt"
}
  minToSecprompt;

This is another way to it.
*/


/* OR !!!!
function minToSec(minutes) { 

  console.log(minutes + " minutes = " + (minutes * 60 ) + " seconds");
 
}
  minToSec(60);
  minToSec(24 * 60);

This is another way to it.
*/



/* OBJECTS
----------------------------------------------- */
// We use curly braces for objects not square brackets. It consists of keys and values.
// Name, gender, age, country.
// USE COLONS AND COMAS FOR OBJECT LIKE IN CSS !!!!!!
// name, gender, age, country are keys

let person1 = {
  name: "Bob Geldof", 
  gender: "man",
  age: 68,
  country: "UK"

}

//console.log(person1);

//console.log(person1["name"]); // or single quotation mark ''
//console.log(person1.name); // Same thing but use it like that. "Dot notation".


let people = {
 
  // object inside an object 
  
 bob: {
    
    name: "Bob Geldof", 
    gender: "man",
    age: 68,
    country: "UK"
  },

  marco: {
    
    name: "Marco van Basten", 
    gender: "man",
    age: 45,
    country: "Holland"
  },

  nadia: {
    
    name: "Nadia Comaneci", 
    gender: "woman",
    age: 45,
    country: "Romania"
  },

}
console.log(people.marco.name);

// Json : JavaScript Object Notation ---- It has objects inside. Inside the json you can start directly with objects you don't need variables!!!!!!!
// Inside the Json file , for keys you need to use quotation marks. For example "bob", "name".

