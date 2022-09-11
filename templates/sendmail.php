<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-6.6.4/src/Exception.php';
    require 'PHPMailer-6.6.4/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    $mail->setFrom('daniil.pleshanov2005@mail.ru', 'БотТестПисьмо');
    $mail->addAddress('kaka2005lll@mail.ru');
    $mail->Subject= 'Привет, это Тестовое Письмо';

    $pay = "Наличный расчет";
    if ($_POST['pay'] == "onlain") {
        $pay = "Онлайн перевод";
    } else {
        $pay = "Оплата по терминалу";
    }

    $body = '<h1>Встречайте Тестовое Письмо!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя: </strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['telephon']))){
        $body.='<p><strong>Телефон: </strong> '.$_POST['telephon'].'</p>';
    }
    if(trim(!empty($_POST['pay']))){
        $body.='<p><strong>Телефон: </strong> '.$pay.'</p>';
    }
    if(trim(!empty($_POST['comment']))){
        $body.='<p><strong>Телефон: </strong> '.$_POST['comment'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $messege = 'ошибка';
    } else {
        $messege = 'Данные отправлены';
    }

    $response = ['messege' => $messege];

    header('Content-type: application/json');
    echo json_encode($response);

?>