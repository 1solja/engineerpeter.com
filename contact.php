<?php 
// define the variables for error and inputs
$first_error =  $last_error = $email_error = $subject_error = "";
$first = $last = $email = $subject = $message = "";

// function to check inputs
function check_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// format error messages and form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["First"])) {
        $first_error = "First Name is required";
    } 
    else {
        $first = check_input($_POST["First"]);
        if (!preg_match("/^[a-zA-Z]*$/",$first)) {
            $first_error = "Only white space and letters allowed";
        }
    }

    if (empty($_POST["Last"])) {
        $last_error = "Last Name is required";
    } 
    else {
        $last = check_input($_POST["Last"]);
        if (!preg_match("/^[a-zA-Z]*$/",$last)) {
            $last_error = "Only white space and letters allowed";
        }
    }

    if (empty($_POST["Email"])) {
        $email_error = "Email is required";
    } 
    else {
        $email = check_input($_POST["Email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) {
            $email_error = "Invalid Email Address";
        }
    }

    if (empty($_POST["Subject"])) {
        $subject_error = "Subject is required";
    } 
    else {
        $subject = check_input($_POST["Subject"]);
        if (!preg_match("/^[a-zA-Z]*$/",$subject)) {
            $subject_error = "Only white space and letters allowed";
        }
    }

    if (empty($_POST["textbox"])) {
        $message = "";
    } 
    else {
        $message = check_input($_POST["textbox"]);
    }

    if ($first_error == '' and $last_error == '' and $email_error == '' and $subject_error == '') {
        $message_body = '';
        unset($_POST['submit']);
        foreach ($_POST as $key => $value) {
            $message_body .= "$key ; $value\n";
        }
    }
}
?>