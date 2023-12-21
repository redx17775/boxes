<html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    class CartItem
    {
        public $name;
        public $description;
        public $price;

        public function __construct($name, $description, $price)
        {
            $this->name = $name;
            $this->description = $description;
            $this->price = $price;
        }
    }

    function displayCartItems($cartItems)
    {
        foreach ($cartItems as $cartItem) {
            echo '<div class="row" style="margin-bottom: 3%;">
                    <div class="col-md-3" style="margin-right: 30px;">
                    <div class="img" style="width: 150px; height: 150px;">
                        <img src="https://via.placeholder.com/150" alt="Product Image" id="pic" style="object-fit:cover;">
                    </div>
                    </div>
                    <div class="col-md-6">
                    <h4 id="name">' . $cartItem->name . '</h4>
                    <p id="description">' . $cartItem->description . '</p>
                    <p class="font-weight-bold" id="price">Price: ' . $cartItem->price . '</p>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart()">Remove</button>
                    </div>
                </div>';
        }
    }

    // Check if the cart data is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get cart data
        $cartName = $_POST["name"];
        $cartDescription = $_POST["description"];
        $cartPrice = $_POST["price"];

        // Create a new CartItem object
        $cartItem = new CartItem($cartName, $cartDescription, $cartPrice);

        // Define an array to store cart item objects
        $cartItems = [];

        // Check if the array is already set in the session
        if (isset($_SESSION["cartItems"])) {
            $cartItems = $_SESSION["cartItems"];
        }

        // Add the new CartItem object to the array
        $cartItems[] = $cartItem;

        // Save the array in the session
        $_SESSION["cartItems"] = $cartItems;

        // Display the cart items
        displayCartItems($cartItems);
    } else {
        // Handle the case when the cart data is not submitted
        echo 'Cart data not submitted.';
    }
    ?>

</body>
</html>

