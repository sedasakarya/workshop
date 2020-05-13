/* DOM = DOCUMENT OBJECT MODEL 
-------------------------------------*/
//<head>, <body> everything is an OBJECT in JavaScript.!!!
// Lets display the title with JavaScript.
// Query Selector can select everything. 
//TARGET THE HEAD TITLE DOM OBJECT
const title = document.querySelector('title');

//DISPLAY THE OBJECT
console.log(title);

// innerHTML What is exactly in HTML
//DISPLAY THE INNER CONTENT OF THE OBJECT
console.log(title.innerHTML);

// GRAB THE OPBJECT AND STORE IT 
const h1 = document.querySelector('h1');


h1.innerHTML = "I just changed the h1 content with JS !!! Youpiii"; // If we put empty quotation mark, It will remove the title

// ADD OR REMOVE A CLASS 
h1.classList.add('bob', 'and', 'marco'); // Each one is different class.
h1.classList.remove('marco', 'and');

// SET/ GET Element Attributes 
h1.setAttribute('id', 'main-header');
console.log( h1.getAttribute('class') );
console.log( h1.getAttribute('id') );

//h1.removeAttribute('id');
//console.log(h1);


// GET ELEMENT BY ID ("my-console "is the ID of my element)
const myConsole = document.getElementById('my-console');
// const myConsole = document.querySelector('#my-console'); The exact same thing
// const myClass = document.getElementsByClassName('main-header'); It doesnt work what we expected.

myConsole.innerHTML = "let bob = 3;";

let bob = document.querySelector('.bob'); // It will select the first one. 
console.log(bob); 


console.log(myConsole);

//console.log(myClass);

//document.querySelector("html").innerHTML = ""; // It removes every element inside the Html, except body and head tags.