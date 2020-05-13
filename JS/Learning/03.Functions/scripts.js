/* FUNCTIONS
------------------------------------*/
function calculateAge(name, birthYear) {

  let date = new Date();
  let currentYear = date.getFullYear(); //console.log(currentYear);
  let age = currentYear - birthYear;

  let display = name + " is " + age + " years old!";

  //console.log(display);

  return display; // EXIT here !

}

//let bob_age = calculateAge("Bob", 1954);
//console.log(bob_age);

//calculateAge("Marc", 1985);
//calculateAge("Bobby", 1981);

//console.log( calculateAge("Bob", 1974) );
//console.log( calculateAge("Sorin", 1966) );
//console.log( calculateAge("Marc", 1985) );


//Return day of the week based on a number
function dayOfTheWeek(index) {

  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return days[index];

}

//let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//console.log(days[1]);

console.log( dayOfTheWeek(3) );

//----------

//Greeting Function
//sayHello("Bob"); → "Hello Bob !"
//sayHello("Dada"); → "Hello Dada !"
function sayHello(greeting, input) {

  //console.log(greeting + " " + input + " !"); //Hello, Hi, Bonjour...

}
// sayHello("Hello", "Bob");
// sayHello("Hi", "Marc");

//----------

//Convert minutes into seconds
//minToSec(52) → 3120 sec;
function minToSec(minutes) {

  //console.log(minutes + " minutes = " + (minutes * 60) + " seconds" );

}
//minToSec(60);
//minToSec(24*60);
//BONUS - Using prompt instead of an argument
function minToSecPrompt() {

  let userInput = parseInt( prompt("Number of minutes") ); //by default it's a string
  //console.log(userInput + " minutes = " + (userInput * 60) + " seconds" );

}
//minToSecPrompt();