<?php
// Establish database connection
$conn = mysqli_connect("localhost", "root", "YourSecurePassword", "truehermeneutics");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect form data and sanitize them
$name = mysqli_real_escape_string($conn, $_POST['name']);
$surname = mysqli_real_escape_string($conn, $_POST['surname']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Prepare and execute the SQL query
$stmt = $conn->prepare("INSERT INTO true_hermeneutics (name, surname, email, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $surname, $email, $hashedPassword);
if (!$stmt->execute()) {
    die("Registration failed. Please try again later.");
}

echo "Registration Successful...";
$stmt->close();
$conn->close();
?>

