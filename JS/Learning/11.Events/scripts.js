// →→→ HELPER FUNCTION → TARGET ANY SELECTOR
function $(selector){
  return document.querySelector(selector); // It targets only one element
};

function $$(selector){
  return document.querySelectorAll(selector); //It targets all the same element
};

// →→→ HELPER FUNCTION → CREATE ANY ELEMENT
function make(selector){
  return document.createElement(selector);
};

/*CHALLENGE - CREATE AN ADMIN MESSAGE
--------------------------------------------------*/
let div1 = make('div');
const div2 = make('div');

div1.setAttribute('id', 'admin-msg');
div1.setAttribute('class', 'message');

div2.setAttribute('class', 'msg-content');
div2.innerHTML = "Some admin text";

div1.prepend(div2);

//$('body').append(div1);
//$('body').insertBefore(div1,$('script'));


/*EVENTS
--------------------------------*/
let count = 0;
// Listen means CATCH them. What we want to do.  Two arguments 1)Event (click or something) 2)Action
$('#btn1').addEventListener('mousedown', function(){
  count++;
  $('#msg').innerHTML += "I just clicked !"; // It is from <textarea> tag. Every time I click it will add new tags with +=
  $('#p1').innerHTML = count; // Where i want to show it.

});  


// dblclick ---> double click.
// contextmenu ---> right click.
// click ---> one click.
// mouseenter ---> hover the area.
// mouseup ---> when you release the mouse.
// mousedown ---> when you release the mouse. ?????
