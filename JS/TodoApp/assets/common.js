//COUNT CONSOLE ITEMS
let consoleItems = 0;


function show(thecode, title = "") {
    

  //GET DOM object and init with an empty string
  const myConsole = document.querySelector("#my-console");
  

  //INIT VARS
  let output = '';
  let cssTitle = '';


  //CHECK type
  if(typeof thecode === 'object' || typeof thecode === 'function') {
    output = JSON.stringify(thecode, null, 2);
    cssTitle = 'title-object';
  }
  else if(typeof thecode === 'string' || typeof thecode === 'number' || typeof thecode === 'boolean') {
    cssTitle = 'title-inline';
    output += (typeof thecode === 'string') ? `"${thecode}"` : thecode;
  }


  //WRITE INTO CONSOLE THE TITLE - if any
  if(title !== "") {
    myConsole.innerHTML += `<h3 class="code-title ${cssTitle}">'${title}:'</h3>`;
  }


  //WRITE INTO CONSOLE THE CODE → keep the += operator so we can add to the console
  myConsole.innerHTML += output + "\n";
  

  //SEP LINE - we don't want to have a sep line if we output only one thing
  consoleItems++; //will add 1 to the counter

  if(consoleItems > 0) {
    myConsole.innerHTML += "<hr>";
  }

 
}