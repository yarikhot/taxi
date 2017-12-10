﻿<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['city'])) {$email = $_POST['city'];}
    //if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "yarikhot00@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "support@jarikTaxi.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $data="Робота";
    $message = "
 <b>Имя пославшего:</b> $name
<b>Телефон:+380</b> $phone
<b>Город:</b> $email";
    $send = mail ($to,$data, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<center>

Спасибо за отправку вашего сообщения!

</center>';
    }
    else
    {
    echo '<center>

<b>Ошибка. Сообщение не отправлено!</b>

</center>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}?>

