<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];

    // Additional processing or validation if needed

    $to = "jha.shivam.121@gmail.com";
    $subject = "New Contact Form Submission";
    $message = "Name: $name\nPhone Number: $phone";

    $headers = "From: ranthombore.online@gmail.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again.";
    }
}

?>
