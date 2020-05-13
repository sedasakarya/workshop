/* CONDITIONS
-------------------------------------------------*/
// CONDITIONS ARE REALLY LIKE A  FUNCTION
// LESS THAN < OR GREATER THAN > COMPARISON OPERATOR
// >= GREATER OR EQUAL TO 
// <= LESS OR EQUAL TO 
// == EQUAL TO 
// === EQUAL TO AND THE SAME TYPE
// != NOT EQUAL TO 
// !== NOT EQUAL TO AND NOT THE SAME TYPE

let num = 5; 
let num2 = 20;

// IF WE PUT let num = "5" IT WILL BE TRUE AS WELL !!! JAVA TRIES TO HELP US !!!

// A SIMPLE CONDITIONS WHICH USES COMPARISON OPERATOR
if ( num > 5 ) {
  show("SIMPLE CONDITION","TRUE!");
}
else {
  show("SIMPLE CONDITION","FALSE!");
}

// AN STRICT EQUALITY CHECK CONDITION 
if ( num === 5 ) {
  show("STRICT EQUALITY","TRUE!");
}
else {
  show("STRICT EQUALITY","FALSE!");
}


// A DOUBLE CHECK WITH "OR" (LOGICAL OPERATOR)
// Alt Gr + 7 : ||
// WE SEE TRUE IF ONE OF THE CONDITION IS TRUE !!!

if ( num > 5 || num2 < 30 ) {
  show("DOUBLE CHECK OR","TRUE!");
}
else {
  show("DOUBLE CHECK OR","FALSE!");
};

// A DOUBLE CHECK WITH "AND" (LOGICAL OPERATOR)
// BOTH CONDITIONS MUST BE TRUE !!!

if ( num > 5 && num2 < 30 ) {
  show("DOUBLE CHECK AND","TRUE!");
}
else {
  show("DOUBLE CHECK AND","FALSE!");
};

// USING NOT OPERATOR 

if ( num !== "5" ){
  show("NOT OPERATOR","TRUE!");
}
  else {
  show("NOT OPERATOR","FALSE!");
};

// COMPLEX CHECKS 
                           
if ( (num === 5 && num > 5) || (num2 == 20 && num2 > 20)) {
  show("COMPLEX CHECKS","TRUE!");
}
else {
  show("COMPLEX CHECKS","FALSE!");
}

let num3 = 3 - 3 * 2 + 1; //-4
let num4 = (3 -3) * (2 + 1); //0

//CHALLENGE 
function message(customHour = null) {
//IF customHour === ?
  // customHour = null            // false
  // customHour = false           // false
  // customHour = ""              // false
  // customHour = "something"     // true
  // customHour = 3               // true


  //1. Initialize variables :
  let hour    = false; //
  let output  = "";    //empty string


  //2. IF "customHour" HAVE a value, use the value of "customHour"
  if(customHour) {
    hour = customHour;
  }

  //ELSE → "customHour" DO NOT have a value, use this :
  else {
    let date = new Date();
    hour = date.getHours(); //show(hour);
  }


  //3. CONDITIONS
  if(hour < 8) {
    output = "What are you doing that early?";
  }
  if(hour >= 8 && hour < 12) {
    output = "Good morning!";
  }
  if(hour >= 12 && hour < 17) {
    output = "Good afternoon!";
  }
  if(hour >= 17 && hour < 21) {
    output = "Good evening!";
  }
  if(hour >= 21) {
    output = "Good night!";
  }


  //4. OUTPUT
  show(output, "Hour message");


}

// message(); //empty argument = function will use JS hour
// message(9); //with an argument, function will use this value
// message(12);
// message(15);
// message(18);
// message(21);


// MESSAGE . IT WILL TRY EVERY IF.
function message(hour) {
  if ( hour < 8 ){
    show("What are you doing that early?")
  }
  if ( hour >= 8 && hour <= 12) {
    show("Good Morning");
  }
  if ( hour > 12 && hour <= 17) {
    show("Good Afternoon");
  }
  if ( hour > 17 && hour <= 21) {
    show("Good Evening");
  }
  if ( hour > 21  ) {
    show("Good Night");
  };
};
message(7);

/* ELSE IF STATEMENT 
-----------------------------------*/
// EVERYTHING WILL BE EXECUTED AND LATEST WILL BE SHOWN !!!
let numb = 15;
let output = "";

if(numb > 15) {
  output = "FALSE 1";
}
else if(numb >= 15) {
  output = "TRUE 1";
}
else if(numb === 15) { // Also data type and the number we check
  output = "FALSE 2";
}
else if (numb === 15) {
  output = "TRUE 2";
}else {
  output = "NOTHING IS TRUE MATE";
};

//show(output);

// We start with an if statement 

if(numb > 15) {
  output = "FALSE 1";
}
else if(numb >= 15) {
  output = "TRUE 1";
}
else if(numb === "15") { // Also data type and the number we check
  output = "FALSE 2";
}
else if(numb === 15) {
  output = "TRUE 2";
}
else {
  output = "NOTHING IS TRUE!"
}
//show(output);


// CHALLENGE
function messageBetter(customHour = null) {


  //1. Initialize variables :
  let hour    = false; //
  let output  = "";    //empty string


  //2. IF "customHour" HAVE a value, use the value of "customHour"
  if(customHour) {
    hour = customHour;
  }

  //ELSE → "customHour" DO NOT have a value, use this :
  else {
    let date = new Date();
    hour = date.getHours(); //show(hour);    
  }


  //3. CONDITIONS
  if(hour < 8) {
    output = "What are you doing that early?";
  }
  else if(hour >= 8 && hour < 12) {
    output = "Good morning!";
  }
  else if(hour >= 12 && hour < 17) {
    output = "Good afternoon!";
  }
  else if(hour >= 17 && hour < 21) {
    output = "Good evening!";
  }
  else if(hour >= 21 && hour <= 24) {
    output = "Good night!";
  }
  else {
    output = "Not sure what hour you typed 🤔";
  }


  //4. OUTPUT
  show(output, "Hour message");


}

messageBetter(150);


/* THE BANG OPERATOR 
----------------------------------*/
let n = 56; // true
let bool = false;

show(n != 56 ); // false
show(!bool); // true   BANG OPERATOR PUTS THE OPPOSITE VALUE

/* THE TERNARY OPERATOR 
----------------------------------*/
let num5 = 25;

if(num5 >= 25) {
  output = "TRUE";
}else {
  output = "FALSE";
}
show(output);

// SHORT VERSION
//        CONDITION     //IF TRUE  /7IF FALSE 
output = (num5 >= 25) ? "TRUE" : "FALSE"; //SHORTHAND OF TERNARY / PARENTHESIS ARE OPTIONAL HERE
show(output);

output = num5 >= 25; //SIMPLE COMPARISON CHECK AND WE CAN NOT PUT ANY MESSAGE HERE LIKE "TRUE MATE"
show(output);

if (output){
  show("YES IT IS TRUE")
};
//show(output);


/* THE SWITCH STATEMENT
-------------------------------- */
let day = new Date().getDay(); 
//show(day);
// Day is what we want to evaluate here. 
switch(day){
  case 0 :
  case "": //OR
  case 15: //OR 
    output = "Sunday";
    break;

  case 1 :
    output = "Monday";
    break;

  case 2 :
    output = "Tuesday";
    break;

  case 3 :
    output = "Wednesday";
    break;

  case 4 :
    output = "Thursday";
    break;

  case 5 :
    output = "Friday";
    break;

  case 6 :
    output = "Saturday";
    break; // It means stop here.

  default: //Like ELSE
    output = "Dont know what you are typing...";
    break;
}

show(output);



