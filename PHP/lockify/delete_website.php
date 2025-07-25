<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'connection.php';

$data = json_decode(file_get_contents("php://input"), true);

$wid = $data['wid'] ?? '';
$user_id = $data['user_id'] ?? '';

if (!$wid || !$user_id) {
    echo json_encode(["status" => false, "message" => "Missing data"]);
    exit;
}

$stmt = $obj->prepare("DELETE FROM `websites` WHERE `id` = ? AND `user_id` = ?");
$stmt->bind_param("ii", $wid, $user_id);

if ($stmt->execute()) {
    echo json_encode(["status" => true]);
} else {
    echo json_encode(["status" => false]);
}
$stmt->close();
