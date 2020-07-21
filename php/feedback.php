<?php
$recepient = "matvienkoigor956@gmail.com";
$sitename = "extragirls.kiev.ua";
$token = "1259640433:AAGvBUTYlAphhuxivlk5Orxi67uVOAOgsoQ"; 
$chat_id = "-433092829";

$name = trim($_POST["name"]);
$city = trim($_POST["city"]);
$age = trim($_POST["age"]);
$param = trim($_POST["param"]);
$tel = trim($_POST["tel"]);
$message = "Имя: $name \nГород: $city \nВозраст: $age \nРост/Вес: $param \nТелефон: $tel";

$arr = array(
  'Имя пользователя: ' => $name,
  'Город' => $city,
  'Возраст' => $age,
  'Рост/Вес' => $param,
  'Телефон' => $tel
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$pagetitle = "Сообщение с сайта: \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient"); 

?>
