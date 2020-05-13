/* LOOPS
--------------------------------- */
let names = ["James", "Julia", "Edith"];
//show(names.length); // It counts from 1 not 0 !!!!

//show(names);

//let james = names[0]; // How we extract stuff from square brackets.

let start = 1;
let max = 100;

// FOR LOOPS 
// CLASSIC LOOP
//   1)INITIAL VALUE        2)CONDITION   3)INCREMENT VALUE (i = i + 1  same stuff like below i += 1)
for ( let i = start;        i <= max;      i ++  ) {
  //show("My current number is:" + i);
}

for ( let i = 0; i < names.length; i++){
  //show("Name:" + names[i]); 
};

// CHALLENGE
//1. Display the numbers between 20 and 30
//2. Given this array : 
let todos = [
  {
    text: "Learn JS",
    completed: false
  },
  {
    text: "Learn PHP",
    completed: false
  },
  {
    text: "Learn Python",
    completed: false
  },
];



// CHALLENGE 1

for ( let i = 20; i <= 30; i++){
  //show(i);
};

// CHALLENGE 2

/*for(let i = 0; i < todos.length; i++ ){
  show(todos[i].text + " : " + todos[i].completed);
};*/

// SAME THING CHALLENGE 2

/*for(let i = 0; i < todos.length; i++ ){
  
  let text = todos[i].text;
  
  let completed = todos[i].completed;

  let displayStatus = (completed) ? "Done!" : "Todo..."; // (completed === true)

  let output = text + ":" + displayStatus;
  
  show(output);
};*/



/* FOR EACH LOOPS
----------------------------------------------*/
// It is good for ARRAYS 
// WE PUT FUNCTIONS INSIDE THE FOREACH
// item is each item group in the array
// We call the function argument "Closure" or "anonymus function"


todos.forEach(function(item){
  show(item.text)
});


// OTHER VERSION OF FOREACH IT IS SAME AS ABOVE
function bob(item){
  show(item.text);
};

todos.forEach(bob);

