/* PRACTICE AREA
-------------------------------------------------*/
//Only arrays variante
let __myList = [

  [
    "Learn CSS", 
    "2020.04.31", 
    true
  ],
  ["Learn JS", "2020.04.31", true],
  ["Learn Python", "2020.04.31", true]

];


let myList = [

  {
    text:       "Learn CSS", 
    deadline:   "2020.04.30", 
    completed:  true
  },

  {
    text:       "Learn JavaScript", 
    deadline:   "2020.05.15", 
    completed:  false
  },

  {
    text:       "Learn PHP", 
    deadline:   "2020.06.11", 
    completed:  false
  }

];


//show(myList[0]["deadline"]); //Square braquets notation
//show(myList[0].deadline);

//CHANGE A KEY VALUE
// myList[0].completed = true;
// myList[0].deadline = "2020.05.12";
//show(myList[1]);

//DELETE AN ARRAY ITEM
//myList.splice(1, 0);
//show(myList);

//ADD AN ITEM
// myList.push({
//   text:       "Learn Zwilly", 
//   deadline:   "2021.04.30", 
//   completed:  false
// });
//show(myList);

//REFACTORING
function addTodo(newText, newDeadline, newCompleted = false) {
  myList.push({
    text: newText,
    deadline: newDeadline,
    completed: newCompleted
  });
}
addTodo("Learn Java", "2020.04.26");
//show(myList);


function deleteTodo(index, deleteN = 1) {
  myList.splice(index, deleteN);
}
//show(myList.length, "List length");

//Delete only one item
deleteTodo(1);

//Delete everything after the specified index
//deleteTodo(1, myList.length);
//show(myList);


function changeKeyValue(index, key, value) {
  //The key is an argument and should be used inside braquets []
  //Otherwise, with the dot notation, the key will be considered as a "real" key
  //myList[index].key = value; //WRONG !
  myList[index][key] = value; //GOOD
}

//In order to 
changeKeyValue(1, "completed", true);
changeKeyValue(1, "text", "Learn PHP MF");
show(myList);
