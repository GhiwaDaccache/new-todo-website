<?php
include('connection.php');

$description = $_POST['description'];
$category_id = $_POST['category_id'];
$user_id = $_POST['user_id'];

$create_todo = $mysqli->prepare('insert into todos (description, category_id, user_id) values(?,?,?) ');
$create_todo->bind_param('sii', $description, $category_id, $user_id);
$create_todo->execute();
$create_todo->store_result();

$response['status'] = "success";
$response['user_id'] = $user_id;
echo json_encode($response);
