<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$wid = $data['wid'] ?? '';
$user_id = $data['user_id'] ?? '';
$web_name = $data['websiteName'] ?? '';
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if (!$wid || !$user_id || !$web_name || !$username || !$password) {
    echo json_encode(["status" => false, "message" => "Missing fields"]);
    exit;
}

$stmt = $obj->prepare("UPDATE `websites` SET `website_name`= ? ,`username`= ?,`password`= ? WHERE `id` = ? AND `user_id` = ?");
$stmt->bind_param("sssii", $web_name, $username, $password, $wid, $user_id);

if ($stmt->execute()) {
    echo json_encode(["status" => true]);
} else {
    echo json_encode(["status" => false]);
}
$stmt->close();
