CREATE DATABASE IF NOT EXISTS hostel_management;
USE hostel_management;

CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,  -- store hashed passwords in production!
    room_number VARCHAR(10),
    fee_status ENUM('Paid', 'Pending', 'Overdue') DEFAULT 'Pending'
);
