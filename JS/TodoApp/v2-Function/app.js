//alert("It is working!"); //This is a popup window.
//confirm("It is working!"); // Ok and cancel option
//prompt("It is working!"); // You can write something.

/** TODO LIST - GLOBAL SCOPE (ROOT LEVEL)
-------------------------------------*/
let todoList = [
  "Go shopping",
  "Buy Pringles",
  "Do this",
  "Do that"
];

// If the variable is after the console.log. We can't see the variable.

/** DISPLAY TODO LIST
-------------------------------------*/
function displayTodos() {

  // LOCAL SCOPE
  //let bob = 5; // Because it is local, console.log(bob) doesn't work
  //return bob;
  
  console.log(todoList); // It works when it is in global scope.

}

// console.log(bob);

displayTodos();




/** ADD TODO LIST
-------------------------------------*/
function addTodo(newItem) {
  
  todoList.push(newItem);
  displayTodos(); // Each time after the change, we need to display
  // I created displayTodos to do console.log(TodoList)

}
addTodo("My new Todo");


/** CHANGE TODO LIST
-------------------------------------*/
function changeTodo(index, changedItem){

  //todoList.splice(index, 0, changedItem) also right. 0 means don't delete anything
  todoList[index] = changedItem;
  displayTodos();
}
changeTodo(1,"Buy Milk");
changeTodo(2,"Call Bob");


/** DELETE TODO LIST
-------------------------------------*/
// numberToDelete = 1 is a default value, you have to say it
function deleteTodo(index, numberToDelete = 1){

  todoList.splice(index, numberToDelete);
  displayTodos();
}
deleteTodo(2);



