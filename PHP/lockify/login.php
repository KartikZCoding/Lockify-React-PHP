<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'connection.php';

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => false, "message" => "Invalid JSON"]);
    exit;
}

$email = $data["email"] ?? '';
$password = $data["password"] ?? '';

// Basic input validation
if (empty($email) || empty($password)) {
    echo json_encode(["status" => false, "message" => "Email and password are required"]);
    exit;
}

// Query the database to find the user by email
$stmt = $obj->prepare("SELECT * FROM `register` WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    // If passwords are hashed in DB, use password_verify()
    // if (password_verify($password, $user['password'])) {
    if ($password === $user['password']) {
        echo json_encode([
            "status" => true,
            "message" => "Login successful",
            "user" => [
                "user_id" => $user['user_id'],
                "name" => $user['name'],
                "email" => $user['email']
            ]
        ]);
    } else {
        echo json_encode(["status" => false, "message" => "Incorrect password"]);
    }
} else {
    echo json_encode(["status" => false, "message" => "User not found"]);
}

$stmt->close();
