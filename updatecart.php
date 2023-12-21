<html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    class FormData
    {
        public $name;
        public $email;
        public $message;

        public function __construct($name, $email, $message)
        {
            $this->name = $name;
            $this->email = $email;
            $this->message = $message;
        }
    }

    function displayFormData($formDataArray)
    {
        echo '<table border="1">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>';

        foreach ($formDataArray as $formData) {
            echo '<tr>
                    <td>' . $formData->name . '</td>
                    <td>' . $formData->email . '</td>
                    <td>' . $formData->message . '</td>
                </tr>';
        }

        echo '</table>';
    }

    // Check if the form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get form data
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        // Create a new FormData object
        $formData = new FormData($name, $email, $message);

        // Define an array to store form data objects
        $formDataArray = [];

        // Check if the array is already set in the session
        if (isset($_SESSION["formDataArray"])) {
            $formDataArray = $_SESSION["formDataArray"];
        }

        // Add the new FormData object to the array
        $formDataArray[] = $formData;

        // Save the array in the session
        $_SESSION["formDataArray"] = $formDataArray;

        // Display the form data
        displayFormData($formDataArray);
    } else {
        // Handle the case when the form is not submitted
        echo 'Form not submitted.';
    }
    ?>
</body>
</html>

