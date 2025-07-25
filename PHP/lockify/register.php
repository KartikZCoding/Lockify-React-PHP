<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


include 'connection.php';

// Get and decode JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Check if data is received properly
if (!$data) {
    echo json_encode(["status" => false, "message" => "Invalid or empty JSON received"]);
    exit;
}

// Get values with validation
$name = $data["name"] ?? '';
$email = $data["email"] ?? '';
$contact = $data["contact"] ?? '';
$password = $data["password"] ?? '';
$profile_password = $data["profilePassword"] ?? '';

// Use prepared statements for safety
$stmt = $obj->prepare("INSERT INTO `register`(`name`, `email`, `contact`, `password`, `profile_password`) VALUES (?, ?, ?, ?, ?)");

if ($stmt) {
    $stmt->bind_param("sssss", $name, $email, $contact, $password, $profile_password);
    $success = $stmt->execute();

    if ($success) {
        echo json_encode(["status" => true, "message" => "Registered successfully"]);
    } else {
        echo json_encode(["status" => false, "message" => "Error during execution"]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => false, "message" => "Prepare statement failed"]);
}
