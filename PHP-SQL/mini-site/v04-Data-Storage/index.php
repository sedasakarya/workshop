<?php
ini_set('display_errors', 1); 
error_reporting(E_ALL);

// MY CUSTOM PRINT_R FUNCTION

function show($arr){
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
};


# CHECK PAGE FROM URI (UNIQUE RESOURCE IDENTIFIER) IT IS ON TOP. 
$page = isset($_GET['page']) ? $_GET['page'] : 'index'; #We get the HTML here.


// GRAB THE JSON CONTENT 
$site_data_json = file_get_contents("site_data.json"); // Gets the file content

//Convert the json content into PHP array
// Has 2 arguments. The json string AND the data type
// true --> array 
// false --> object It is default version. 
$site_data = json_decode($site_data_json, true); // We decode it as an array.

// We simplified the writing. It is like a shortcut of pages!!!
$pages = $site_data['pages'];
//show($pages['work']['title']);
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title><?php echo $pages[$page]['title'] ?></title> <!--page defines which page automaticly. index, contact or work.-->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="<?php echo $site_data['description']; ?>"> <!--we can use print as well instead of echo.-->
  <meta name="keywords" content="<?php echo $site_data['keyword']; ?>">
  <meta name="author" content="<?php echo $site_data['author']; ?>">

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
    
    <!-- Main Title -->
    <h1 class="main-title"><?php echo $pages[$page]['title'] ?></h1>
    <?php 
    // You could echo h1 here as well like below. Instead of creating HTML tag above.
    // echo '<h1 class="main-title">'.$pages[$page]['title].'</h1>'
    #echo "<p>HELLO WORLD</p>";
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
    require_once("html/$page.html"); // It is like an echo by deafult.
    # In PHP, if you use variables with "", it is automaticly known.
    
    ?>
   
  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy;1998 - 2019 - Heavy Metal Company</p>
  </footer>

</body>

</html>