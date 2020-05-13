// →→→ HELPER FUNCTION → TARGET ANY SELECTOR
function $(selector, all = false) {

  const elements = document.querySelectorAll(selector); // console.log(elements);

  if(elements.length > 1) {
    return document.querySelectorAll(selector);
  }
  else {
    return document.querySelector(selector);
  }

}


// →→→ HELPER FUNCTION → CREATE ANY ELEMENT
function make(selector) {
  return document.createElement(selector);
}


// Target element → classic approach
// const main = document.querySelector("main");

// Target element → awesome approach
const main = $('main');

// →→→ CREATE ELEMENT [CClassic approach]
const div = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = make("p"); //console.log(p3);

// const row = document.querySelector(".row");

// →→→ ADD TEXT CONTENT
p1.textContent = "Some text";
p2.textContent = "Some other text";

// →→→ ADD HTML CONTENT
p3.innerHTML += '<br>Some new <span class="">new line</span>';

// insertAdjacentHTML()
// The four positions available are:
// "beforebegin" (directly before the current node)
// "afterbegin" (inside the current node, at the beginning)
// "beforeend" (inside the current node, at the end)
// "afterend" (directly after the current node)


// This will only touch the first item of his kind
$("#p1").textContent = "Just changed the text of #p1 element!"; 

// This will touch all of them
$("p").forEach(function(item) {
  item.style.color = "#ccc";
}); 


// →→→ DO STYLES
p1.style.color = '#f00'; // → quick css
p2.style.cssText = 'padding: 1em; color: #fff; background: #8a8a8a;';  // → whatever css


// →→→ INSERT, APPEND, PREPEND
main.insertBefore(p2, document.querySelector("#p4"));
main.append(div);
div.prepend(p1);
div.append(p2);
div.appendChild(p3);

// $('main').remove();


