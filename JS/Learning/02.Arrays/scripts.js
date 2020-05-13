/* ARRAY (LISTS)
------------------------------------*/
let arr1  = [1, 2, 3, 4, 5]; //console.log(arr1);
let arr2  = ["Sorin", "Jane", "Tarzan"]; //console.log(arr2);
//console.log( "Numbers array:", arr1[2] ); //3
//console.log( arr2[2] ); //Tarzan

//NATIVE ARRAY METHODS
//Add to the array
arr2.push("Bob"); //console.log(arr2); //adds an element at the end of the array
console.log( arr2.length ); //show how many items do we have inside the array

//Delete from the array
arr2.pop(); console.log(arr2); //removes the last element
arr2.shift(); console.log(arr2); //removes the first element
arr2.splice(1, 2); console.log(arr2); //removes a custom element 

//Change a value inside an array
arr2[0] = 52; //console.log(arr2);

//Using splice method to modify an array (3rd argument)
arr2.splice(2, 0, "Freddy");
//console.log( arr2 );