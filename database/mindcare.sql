CREATE DATABASE mindcare;
USE mindcare;
SHOW DATABASES;

-- users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('client', 'therapist', 'admin') NOT NULL,
    phone VARCHAR(20),
    age INT,
    gender ENUM('Male', 'Female', 'Other'),
    profile_picture VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;

-- therapists Table
CREATE TABLE therapists (
    therapist_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    experience INT NOT NULL,
    qualification VARCHAR(150),
    languages VARCHAR(255),
    therapy_methods VARCHAR(255),
    fee_range VARCHAR(50),
    session_mode VARCHAR(100),
    bio TEXT,
    rating DECIMAL(2 , 1 ) DEFAULT 0,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
);

-- clients Table
CREATE TABLE clients (
    client_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    emergency_contact_name VARCHAR(100),
    emergency_contact_phone VARCHAR(20),
    medical_history TEXT,
    current_medications TEXT,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
);

-- recommendations Table
CREATE TABLE recommendations (
    recommendation_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    therapist_id INT NOT NULL,
    matching_score DECIMAL(5 , 2 ),
    recommended_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id)
        REFERENCES clients (client_id)
        ON DELETE CASCADE,
    FOREIGN KEY (therapist_id)
        REFERENCES therapists (therapist_id)
        ON DELETE CASCADE
);

SHOW TABLES;
