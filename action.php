<?php
if($_POST["message"]) {
    mail("sainhimanshu9@gmail.com", "Form to email message", $_POST["message"], "From: $_POST["email"] ");
}
?>