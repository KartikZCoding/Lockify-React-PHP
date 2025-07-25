<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'connection.php';

// Decode the JSON request
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => false, "message" => "Invalid JSON input"]);
    exit;
}

$user_id = $data["user_id"] ?? '';
$password = $data["password"] ?? '';

// Basic validation
if (empty($user_id) || empty($password)) {
    echo json_encode(["status" => false, "message" => "All fields are required"]);
    exit;
}

// Check if profile password matches
$stmt = $obj->prepare("SELECT profile_password FROM register WHERE user_id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();

    if ($password === $row["profile_password"]) {
        echo json_encode(["status" => true, "message" => "Password matched"]);
    } else {
        echo json_encode(["status" => false, "message" => "Incorrect profile password"]);
    }
} else {
    echo json_encode(["status" => false, "message" => "User not found"]);
}

$stmt->close();
