<?php
include('connection.php');

$user_input = $_POST['user_input'];
$password = $_POST['password'];

$query = $mysqli->prepare('select id, password from users where email=? or username=?;');
$query->bind_param('ss', $user_input, $user_input);
$query->execute();
$query->store_result();
$query->bind_result($id, $hashed_password);
$query->fetch();
$num_rows = $query->num_rows();

echo $hashed_password;
echo $num_rows;


if($num_rows == 0){
    $response['status'] = "failed";
    $response['message'] = "invalid username";
}elseif(password_verify($password, $hashed_password)){
    $response['status'] = "logged in";
    $response['user_id'] = $id;
}else{
    $response['status'] = "failed";
    $response['message'] = "wrong password";
};

echo json_encode($response);