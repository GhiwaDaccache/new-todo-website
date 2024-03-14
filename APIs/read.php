<?php
include('connection.php');

$url_param = $_GET['user_id'];

$load_todos = $mysqli->prepare('select * from todos where user_id=?');
$load_todos->bind_param('s', $url_param);
$load_todos->execute();
$load_todos->store_result();
$num_rows = $load_todos->num_rows();

$todos = [];
$load_todos->bind_result($id, $description, $status, $user_id, $category_id);
while ($load_todos->fetch()) {
    $todo = [
        'id' => $id,
        'description' => $description,
        'status' => $status,
        'category_id' => $category_id,
    ];
    $todos[] = $todo;
}
$response['status'] = 'success';
$response['todos'] = $todos;

echo json_encode($response);