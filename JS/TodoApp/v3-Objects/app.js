let todos = {
// It is an object property "todoList".
  todoList: [
    "Go shopping",
    "Buy Pringles",
    "Do this",
    "Do that"
  ],

// Method is a function inside an object !!!! name is displayTodos
  
  displayTodos: function() {
    console.log(this.todoList); // If it is not GLOBAL . "todoList". "This" means this object. So if you change the object of the name , you don't need to change everywhere.
  },

  addTodo: function(text){
    this.todoList.push(text);
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

todos.displayTodos();
todos.addTodo("Test todo");
todos.deleteTodo(1);
todos.changeTodo(2, "Some other value for this todo");




