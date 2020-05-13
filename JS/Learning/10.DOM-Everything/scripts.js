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


// Target element → classic approach
//const main = document.querySelector('main'); console.log(main); //There is a better way to do it. On second line.

// Target element → awesome approach
const main = $('main'); console.log(main);


// →→→ Manage attributes
$('h1').setAttribute('id', 'main-title');// We add and remove class= itself
$('p').setAttribute('class', 'row'); // If we have so many p. It will make the changes to FIRST ONE.
$('#p4').removeAttribute('class'); // We targeted to the element with id = "p4".
//$('html').setAttribute('lang', 'fr');

// →→→ MANAGE CLASS ATTRIBUTE
$('body').classList.add('menu-is-open', 'bob'); // Add the value of classes to the body
$('body').classList.remove('menu-is-open', 'bob'); // Remove the value of classes.

// →→→ CREATE ELEMENT [Classic approach]
//const p1 = document.createElement('p'); Same thing on line below.
const p1 = make('p1');
p1.setAttribute('class','row');
p1.innerHTML = "Sunt un text in noul paragraf."; // We will put at the end of the main !!

const span = make('span'); // We create tag itself here.
span.textContent = "Info:";

main.append(p1);
p1.prepend(span); // We choose where to place it.

// INSERT BEFORE - 2 ARGUMENTS : WHAT AND THE REFERENCE
main.insertBefore(p1, $('#p2')); // Insert p1 before p2 !!!!!

// REMOVE AN ELEMENT 
//$('main').remove(); It removes a tag.

// →→→ ADD TEXT CONTENT
p1.textContent = '<span>Info: </span> A simple text.'; // It deletes everything and replace it with new content.
//p1.textContent += 'A simple text.'; // It will add our new text not delete it. But it is for text so it will remove span tag anyway.

// →→→ ADD HTML CONTENT
p1.innerHTML = '<span class="success">Info: </span> A complex content with tags.';


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



// →→→ YOU CAN DO MORE WITH HTML CONTENT
// insertAdjacentHTML()
// The four positions available are:
// "beforebegin" (directly before the current node)
// "afterbegin" (inside the current node, at the beginning)
// "beforeend" (inside the current node, at the end)
// "afterend" (directly after the current node)


// This will only touch the first item of his kind


// This will touch all of them/*console.log($$('p'));
/*$$('p').forEach(function(item){
  item.style.backgroundColor = '#ccc';
}); */


// →→→ DO STYLES
$('#p2').style.color = '#f00';
$('#p3').style.backgroundColor = '#ccc';// We need to use camelCase to turn it into JS
$('#p4').style.cssText = 'background-color: #fc0; color:#fff; '; // It allows us to write just like in CSS


// →→→ INSERT, APPEND, PREPEND
// INSERT puts it after the existing element.



