<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BOXSES</title>
    <link rel="icon" href="img/logo.jpg">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="log_in.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <script src="https://kit.fontawesome.com/d4a9614680.js" crossorigin="anonymous"></script>

    <style>
      body{background-color: #0A0A0A !important;}
  </style>
  
</head>
<body>
    <header>
        <div class="container-fluid border">
            <div class="row align-items-center border">
                <div class="col-1" id="logo_col">
                    <img src="img/logo.jpg" alt="logo" height="37px">
                </div>
                <div class="col " id="title_col">
                    <h3>BOXES</h3>
                </div>
                <div class="col-4" id="mineNav_col">
                    <div class="row">
                        <div class="col"><span class="material-symbols-outlined">search</span></div>
                        <div class="col"><a href="cart.html"><span class="material-symbols-outlined">shopping_cart</span></a></div>
                        <div class="col" style="background-color: #ffffff57;"><span class="material-symbols-outlined">login</span> </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

        <!--navbar-->
        <nav>
            <div class="container-fluid border">
                    <div class="row align-items-center border" id="nav_row">
                    <div class="col border"><a href="index.html">Home</a></div>
                    <div class="col border"><a href="products.html">Products</a></div>
                <div class="col border"><a href="contact.html">Contact</a></div>
                <div class="col border"><a href="about.html">About</a></div>
                </div>
            </div>
        </nav>

    <!--Main-->
    <main>
        <div class="container-fluid" id="cont_main">
            <div class="row justify-content-center" id="main_row">
              <div class="col-md-6">
                <div class="card text-white bg-dark">
                  <div class="card-body">
                    <h2 class="text-center">Delete</h2>
                    <div id="signInForm">
                      <form action="" method="POST">
                        <div class="form-group">
                          <label for="username">Username:</label>
                          <input type="text" class="form-control" id="username" name="username" required>
                        </div>
                        <button type="delete" class="btn btn-primary" style="margin-top: 3%;" name="delete_btn">delete</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </main>

    <footer>
      <div class="container-fluid border" id="cont_footer">
          <div class="row" id="footer_row">
              <div class="col">
                  <h3>&copy;01 programmers</h3>
              </div>
          </div>
  </footer>
  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</body>
</html>


<?php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $servername = "https://www.phpmyadmin.net/mydata.sql";
    $username = "name";
    $password = "password";
    
    // Create a connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Assuming you have a form with a submit button named 'deleteButton'
    if (isset($_POST['delete_btn'])) {
        
        // Assuming you have a unique identifier for each row, for example, 'id'
        $idToDelete = $_POST['username'];
        
        // Construct and execute the SQL query
        $sql = "DELETE FROM feedback WHERE id = '$idToDelete'";

        if ($conn->query($sql) === TRUE) {
            echo "Record deleted successfully";
        } else {
            echo "Error deleting record: " . $conn->error;
        }
    }

    // Close the database connection
    $conn->close();
}

?>