<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'connection.php';

// Decode the JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => false, "message" => "Invalid JSON input"]);
    exit;
}

$user_id = $data['user_id'] ?? '';

// Validate
if (empty($user_id)) {
    echo json_encode(["status" => false, "message" => "User ID is required"]);
    exit;
}

// Fetch all website entries for this user
$stmt = $obj->prepare("SELECT id AS web_id, website_name AS web_name, user_id AS reg_id FROM websites WHERE user_id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$websites = [];

while ($row = $result->fetch_assoc()) {
    $websites[] = $row;
}

if (count($websites) > 0) {
    echo json_encode([
        "status" => true,
        "website" => $websites
    ]);
} else {
    echo json_encode([
        "status" => false,
        "message" => "No websites found",
        "website" => []
    ]);
}

$stmt->close();
