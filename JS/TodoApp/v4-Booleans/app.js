let todos = {
// It is an object property "todoList".
// Below , we are inside an array. Each todo will be an object. We can not use key inside the arry so we do the same thing like in Json

  todoList: [
    
    {text: "Go Shopping", completed: false}, // todoList[0].text
    {text: "Buy Pringles", completed: false}, // todoList[1].text
    {text: "Do This", completed: false}, // todoList[2].text
    {text: "Do That", completed: false}, // todoList[3].text

  ],

// Method is a function inside an object !!!! name is displayTodos
  
  displayTodos: function() {
    console.log(this.todoList); // If it is not GLOBAL . "todoList". "This" means this object. So if you change the object of the name , you don't need to change everywhere.
  },

  addTodo: function(newText, newCompleted = false){
    this.todoList.push({
    
      text: newText,
      completed: newCompleted,
    });
    this.displayTodos();
  },



  changeTodo: function(index, text){
    this.todoList[index] = text;
    this.displayTodos();
  },

  deleteTodo: function(index, numberToDelete = 1){
    this.todoList.splice(index, numberToDelete);
    this.displayTodos();
  },
  
}

/** PRACTICE AREA
 * ----------------------------------------*/
//Only arrays variante
let __myList = [ // If you want to use same name, use double underscore to make it different.
  
  //Only arrays variante
  ["Learn CSS", "20.04.31", "true"],
  ["Learn CSS", "20.04.31", "true"],
  ["Learn CSS", "20.04.31", "true"],

];
//show(myList[1][1]); // First line and first item
//show(myList[0][0]);


let myList = [ // We have an array
 // We open an object 
  {
    text      :   "Learn CSS",
    deadline  :   "2020.04.30",
    completed :   true,
  },

  {
    text      :   "Learn JavaScript",
    deadline  :   "2020.05.15",
    completed :   false,
  },
  
  {
    text      :   "Learn PHP",
    deadline  :   "2020.06.11",
    completed :   false,
  },

];
//show(myList);
//show(myList[0]["deadline"]); //First chose. Because it's object you need to write "deadline" like that. Square brackets notation.
//show(myList[0].deadline); // Second choice. Because it is a key, we can use dot notation.

myList[1].completed = true; // We change an item.
myList[0].deadline = "2020.05.12";
//show(myList[1]);
myList.splice(1, 1); // We just delete second part. It is an one item.
//show(myList);

myList.push({ // We add new object, because our list contains objects.!!!!! This is slow project so we need to create function!!!!
    text      :   "Learn Python",
    deadline  :   "2020.10.15",
    completed :   false,
});
//show(myList);

// For change, delete and add a new item we need to create a FUNCTION !!!!
// Same thing like above myList.push({}).
/*function addTodo(item){

  myList.push(item);
  
}
addTodo(
  {
    text      :   "Learn Python",
    deadline  :   "2020.10.15",
    completed :   false,
});
show(myList);
*/
//REFACTORING same thing above in easier way
function addTodo(newText, newDeadline, newCompleted = false){ // by default completed is false

  myList.push({
    text: newText,
    deadline: newDeadline,
    completed: newCompleted,
  }); 
}
addTodo("Learn Java", "2020.04.26");
show(myList);




function deleteTodo(index, deleteN = 1) {
  myList.splice(index, deleteN);
}
//deleteTodo(1,2); // From index 1 delete 2 things. 
//!!!!deleteTodo(1, myList.length) It deletes everything after the certain number !!!!!!
//show(myList);

// CHANGE FUNCTION

function changeKeyValue(index, key, value){
  // [index] This is an object???. The key is the argument and should be used inside the brackets.
  // Otherwise, with dot notation , it will be considered as a variable or name.
  myList[index].key = value; //WRONG !!!
  myList[index][key] = value; // For key you can not use dot notation but []. !!!TRUE !!!
}

// In order to 
changeKeyValue(3,"completed", true);// "completed" is key not a variable so we use "".
changeKeyValue(0,"text", "Learn something useful"); //This time we changed text.
show(myList);


