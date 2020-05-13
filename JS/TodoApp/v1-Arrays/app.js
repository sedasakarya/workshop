//alert("It is working!"); //This is a popup window.
//confirm("It is working!"); // Ok and cancel option
//prompt("It is working!"); // You can write something.

/** TODO LIST
-------------------------------------*/
let todoList = [
  "Go shopping",
  "Buy Pringles",
  "Do this",
  "Do that"
];
console.log("List in the beginning",todoList);

//ADD AN ELEMENT TO THE ARRAY
todoList.push("Do also that (It is important!)");
console.log("List after push",todoList);

//DELETE FROM ARRAY 
todoList.splice(1,1);
console.log("List after splice",todoList);
