<?php
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $visitor_email = $_POST['email'];
    $visitor_phone = $_POST['phone'];
    $message = $_POST['message'];

    $email_from = 'DigitalSafe@parisha.com';

    $email_subject = "New Form Submission";

    $email_body = "First Name: $first_name.\n".
                    "Last Name: $last_name.\n".
                        "Email: $visitor_email.\n".
                            "Phone Number: $visitor_phone.\n".
                                "User Message: $message.\n".


    $to = "parishab112@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers = "Reply-To: $visitor_email \r\n";

    $mail_sent = mail($to,$email_subject,$email_body,$headers);

    header("Location: thanks-contact.html");
    exit();


if ($mail_sent == false){ ?>
    <script language="javascript" type="text/javascript">
        alert('Message not sent. Please, try again later.');
        window.location = 'about.html';
    </script>
<?php
}
?>