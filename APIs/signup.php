<?php

include('connection.php');

$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];

$check_count = $mysqli->prepare('select count(*) from users where email=? or username=?');
$check_count->bind_param('ss', $email, $username);
$check_count->execute();
$check_count->store_result();

$check_count->bind_result($count);
$check_count->fetch();

if($count == 0){
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users (email, username, password) values(?,?,?)');
    $query->bind_param('sss', $email, $username, $hashed_password);
    $query->execute();
    $last_id = $mysqli->insert_id;
    $response['user_id'] = $last_id;
    $response['status'] = "success";
    $response['message'] = "user $username was created";
}else{
    $response['status'] = "failed";
    $response['message'] = "user $username already exists";
}

echo json_encode($response);