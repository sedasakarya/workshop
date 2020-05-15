<?php
// MANAGING ERRORS
ini_set('display_errors', 1); 
error_reporting(E_ALL);

// MY CUSTOM PRINT_R FUNCTION

function show($arr){
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
};


# CHECK PAGE FROM URI (UNIQUE RESOURCE IDENTIFIER) IT IS ON TOP. 
$page = isset($_GET['page']) ? $_GET['page'] : 'index'; 


// GRAB THE JSON CONTENT 
$site_data_json = file_get_contents("site_data.json");

$site_data = json_decode($site_data_json, true);

// We simplified the writing. It is like a shortcut of pages!!!
$pages = $site_data['pages']; //show($pages);

# DYNAMIC MENU - FOREACH IS PERFECT FOR LOOPS
$li = '';
foreach ($pages as $key => $item) {
  $active = ($key === $page) ? ' active' : '';
  $a .= '<a class="uppercase'.$active.'" href="?page='.$key.'">'.$item['menu'].'</a>'; 
};
//show($li);


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
       <?php echo $li; ?> <!--We echoed our dynamic menu here.-->
      </ul>
    </nav>

  </header>


  <!-- CONTENT -->
  <main class="content">
    
    <!-- Main Title -->
    <h1 class="main-title"><?php echo $pages[$page]['title'] ?></h1>
    <?php 
    
    require_once("html/$page.html"); // It is like an echo by deafult.
    
    ?>
   
  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy;1998 - 2019 - Heavy Metal Company</p>
  </footer>

</body>

</html>