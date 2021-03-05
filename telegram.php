<?

//  1343536399:AAGjEWpzkQ5XERqg9I5DmwTP7UK7K9MHrns

//  1343536399:AAGjEWpzkQ5XERqg9I5DmwTP7UK7K9MHrns
//-453662503

//https://api.telegram.org/1343536399:AAGjEWpzkQ5XERqg9I5DmwTP7UK7K9MHrns/getUpdates

$name = $_POST['user_name'];

$email = $_POST['user_email'];
$massage = $_POST['user_massage'];
$token = "1343536399:AAGjEWpzkQ5XERqg9I5DmwTP7UK7K9MHrns";
$chat_id = "-453662503";

$arr = array(
    
   'Name:' => $name,
   'Email:' => $email, 
   'Massage:' => $massage, 
);

foreach($arr as $key => $value) {
    $text .= "<b>" .$key."</b> ".$value."%0A";
};


$send = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}","r");

if($send){
    header('location: index.html');
}else{
    echo "ERROR";
}

?>