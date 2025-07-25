<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'connection.php';

// Get the JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => false, "message" => "Invalid JSON input"]);
    exit;
}

// Extract the values
$websiteName = $data["websiteName"] ?? '';
$username = $data["username"] ?? '';
$password = $data["password"] ?? '';
$user_id = $data["id"] ?? '';

// Basic validation
if (empty($websiteName) || empty($username) || empty($password) || empty($user_id)) {
    echo json_encode(["status" => false, "message" => "All fields are required"]);
    exit;
}

// Insert into database
$stmt = $obj->prepare("INSERT INTO `websites` (`user_id`, `website_name`, `username`, `password`) VALUES (?, ?, ?, ?)");

if ($stmt) {
    $stmt->bind_param("isss", $user_id, $websiteName, $username, $password);
    $success = $stmt->execute();

    if ($success) {
        echo json_encode(["status" => true, "message" => "Website info added successfully"]);
    } else {
        echo json_encode(["status" => false, "message" => "Database insert error"]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => false, "message" => "Query prepare failed"]);
}
