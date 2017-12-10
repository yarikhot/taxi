﻿<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['users-name'])) {$name = $_POST['users-name'];}
    if (isset($_POST['users-phone'])) {$phone = $_POST['users-phone'];}
    if (isset($_POST['users-city'])) {$email = $_POST['users-city'];}
    if (isset($_POST['users-street'])) {$street = $_POST['users-street'];}

    //if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "yarikhot00@gmail.com"; /*Укажите адрес, га который должно приходить письмо*/
    $sendfrom   = "support@jarikTaxi.ru"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $data="Заказ";
    $message = "
 <b>Имя пославшего:</b> $name
<b>Телефон:+380</b> $phone
<b>Город:</b> $email
<b>Вулиця:</b> $street";
    $send = mail ($to,$data, $message, $headers);
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