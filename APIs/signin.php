<?php
include('connection.php');

$user_input = $_POST['user_input'];
$password = $_POST['password'];

$check_count = $mysqli->prepare('select count(*) from users where email=? or username=?;');
$check_count->bind_param('ss', $user_input, $user_input);
$check_count->execute();
$check_count->store_result();

$check_count->bind_result($count);
$check_count->fetch();


if($count == 0){
    echo 'no user found';
}else{
    echo 'succes';
};