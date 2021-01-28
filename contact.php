<?php
ini_set('display_errors', 1);
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->SMTPSecure = 'tsl';
    $mail->Username   = 'hmubashir08@gmail.com';                     // SMTP username
    $mail->Password   = 'okiroyazbpifupkd';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('hmubashir08@gmail.com', 'Degree Primero');     // Add a recipient

    // Attachments
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Request mail from Degree Primero';
    $mail->Body    = '
    <html>
    <body>
        <p><strong>Name: </strong>'.$name.'</p>
        <p><strong>E-Mail: </strong>'.$email.'</p>
        <p><strong>Phone: </strong>'.$phone.'</p>
        <p><strong>Message: </strong>'.$message.'</p>
    </body>
    </html>';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>