<?php
ini_set('display_errors', 1); //0 to disable
error_reporting(E_ALL); // ADD THIS TO HIDE NOTICES : & ~E_NOTICE
# IF YOU DON'T WANT TO SEE ERRORS WRITE 0 OR 'OFF' INSTEAD OF 1.IT REWRITES THE INI FILE ABOUT ERRORS.

# This part belongs to PHP. 
# This bit of code will be executed before HTML.
# A server language will ALWAYS be executed before a static content.

# CHECK IF GET KEY EXIST 'PAGE' EXIST ON LINE VARIANT:
$page = isset($_GET['page']) ? $_GET['page'] : 'index'; #We get the HTML here.
# echo $page;

# CHECK IF GET KEY EXIST 'PAGE' EXIST:
/*if(isset($_GET['page'])){
  $page = $_GET['page'];
}
else {
  $page = 'index';
} */

/*if(empty($page)){
  $page = 'index';
}; */

# Using a variable inside a PHP string.
#$name = "Sorin";
#$using_double_quotes = "My name is $name and I'm here!";
# echo $using_double_quotes;

#$using_single_quotes = 'My name is '.$name.'  and voila!';
#echo $using_single_quotes;
# It doesn't see the variable with '' automaticly.
# With dots we concatinate !!!!
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Where hardest stuff is possible</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="How to use PHP to create a dynamic website">
  <meta name="keywords" content="php,dynamic site,cool,raoul">
  <meta name="author" content="Sorin Paun">

  <link rel="icon" href="img/favicon.png">

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <!-- HEADER -->
  <header class="header">

    <!-- Logo -->
    <figure class="logo-figure">
      <a href="./"><img src="img/logo.svg" alt="The heavy metal company"></a>
    </figure>

    <!-- Nav -->
    <nav class="nav">
      <ul class="menu">
        <li class="menu-item"><a href="?page=index">HOME</a></li><!--? is key for variables. Page is something we made up-->
        <li class="menu-item"><a href="?page=work">WORK</a></li>
        <li class="menu-item"><a href="?page=contact">CONTACT</a></li>
      </ul>
    </nav>

  </header>


  <!-- CONTENT -->
  <main class="content">

    <?php 
    echo "<p>HELLO WORLD</p>";
    # Include function 
    # Grab an external content methods :
    #include("html/index.html"); 
    
    # Include once function
    # This will be ignored because we have already put it 
    #include_once("html/index.html"); 

    # Require function
    #require("html/index.html");

    # Require once function
    # This will be ignored because we have already put it 
    require_once("html/$page.html");
    # In PHP, if you use variables with "", it is automaticly known.
    
    ?>
   
  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy;1998 - 2019 - Heavy Metal Company</p>
  </footer>

</body>

</html>