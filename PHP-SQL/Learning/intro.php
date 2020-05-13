<?php # How we define it is PHP.
#In a php file we can also do HTML. But you have to specify if it is PHP or HTML.

/* COMMENTS
---------------------------------- */
# Single line comment.
//Single line comment.
/* 
Multi line comments.
*/


/* VARIABLES AND DATA TYPES : USE $ SIGN !
----------------------------------------------------*/
$num = 4; # We create variables with $ sign !!! In PHP semi-colon is MANDATORY!!!
$str = "String";
$bool = true;
$arr = [1,2,3,4];
$void = null;



/* ARRAYS
---------------------------------------------------- */
$arr = [1,2,3,"String",0,[1,2,3],null];       # This array will replace the old $arr one. //LIKE JS
#If we put false and null, the line will be empty. True becomes 1 and 0 becomes 0.
$arr2 = array(1,2,3,"String",false,null); # LIKE PHP. It is an old way, but valid.


//echo $arr[3]; shows 3rd index.
//print $arr[3];
# echo can't print array itself echo $arr is not working.
//print_r ($arr); // It can display the array.
//var_dump($arr); //We can see array in details. How many elements, which value, int/string...

array_push($arr, "bob"); //show($arr); # First one is where we want to put, second is value.
# Native function we have above here for PHP. "array_push".
array_pop($arr); //show($arr);
array_shift($arr); //show($arr);
# We don't want to use push 
# Pushing something at the end : 
$arr[] = "Something at the end..."; //show($arr);
$arr[2] = 33; //show($arr);

#You can use ARRAY in PHP for sub-elements but in JS just objects !!!!

# MULTIDIMENSIONAL ARRAY !!!
# global-title and keywords are keys and after => are values. Just a string is not a key
$website_data = [
  'global-title' => "This is my first PHP website",
  'keywords'     => "PHP,Dev,bob",
  'author'       => "Seda",
  'pages'        => [
    'home'    => [
      'title' => " Welcome to my humble abode",
      'menu'  => "Home",
    ],
    'work'    => [
      'title' => " This is my work",
      'menu'  => "Work",
    ],
    'contact' => [
      'title' => "Say Hello",
      'menu'  => "Contact",
    ],
  ],
];

//show($website_data['pages']['work']['title']);
$pages = $website_data['pages']; //show($pages);
//show($pages['work']['title']); // You can write directly that instad of $website_data, because we define it on the line above...




/* FUNCTIONS
---------------------------------------------------- */
function show($arr){
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
};

# We created the function show so we can use it instead of var_dump or print_r. Because of hoasting the function works even if it is below. This function is prettier than var_dump too.


/* CHALLENGE : RETURN AREA IN M2
---------------------------------------------------- */
function calculate_surface($width, $length){ // We can give default values there.
  // This will be shown directly when you call the function
  //echo $width * $length; // show and echo are same because we defined it with a function
  //show ($width * $length);
  //2.This will return the result only but not echoing.
  return $width * $length;
};
$calc = calculate_surface(24,24); //show($calc);
//echo(calculate_surface());

# FUNCTION USES LOCAL SCOPE  !!!
# We can not see global scope variables in PHP !!!! We need to use special keyword "global".
function site($key = '', $page_key = '', $title = true){
  
  global $website_data;
#if($page_key)
#if( !empty($page_key))
#if($page_key != '') These three are SAME !!!
  if( !empty($page_key) ) {

    $page_str = ($title) ? 'title' : 'menu';
    return $website_data['pages'][$page_key][$page_str];
  }

  return $website_data[$key];

}
//show(site('pages', 'work', false));

# If it is empty , it means FALSE !!!! You can use it like !$page_key


/* CONDITIONS
---------------------------------------------------- */
$n = 10;
if($n > 5){
  show("True!");
}

if($n > 5 && $n > 10){
  show("False!");
}

if($n > 5 || $n > 10){
  show("True!");
}
else {
  show("True!");
}

$hour = 9;
if($hour < 7){
  show("So early ?");
}
elseif ($hour >= 7 && $hour <= 12){
  show("Good morning");
}
//elseif $
//elseif 
else {
  show("Not sure what..");
}


/* LOOPS
---------------------------------------------------- */
$n = 10;
# Show numbers from 1 to 10. Same as JS !
for($i = 1; $i <= $n; $i++){
  //show($i);
}

# THE BEST FOR ARRAYS IS TO USE FOREACH() LOOP
// Foreach could return only values OR the pair key/value 
foreach($website_data as $val){
  show($val);
}

//OR the pair key/value
foreach($website_data as $key => $val){
  show($key);
  show($val);
}

# If you have only PHP in the page you don't need to close the PHP tag.