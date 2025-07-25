<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'connection.php';

// Read JSON input from React
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => false, "message" => "Invalid input"]);
    exit;
}

// Extract parameters
$user_id = $data['user_id'] ?? '';
$wid = $data['wid'] ?? '';

// Basic validation
if (empty($user_id) || empty($wid)) {
    echo json_encode(["status" => false, "message" => "Missing parameters"]);
    exit;
}

// Fetch website details
$stmt = $obj->prepare("SELECT website_name AS web_name, username, password FROM websites WHERE id = ? AND user_id = ?");
$stmt->bind_param("ii", $wid, $user_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    echo json_encode([
        "status" => true,
        "website" => $row
    ]);
} else {
    echo json_encode([
        "status" => false,
        "message" => "No record found"
    ]);
}

$stmt->close();
