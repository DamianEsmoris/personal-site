CREATE TABLE Posts(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    url VARCHAR(512) NOT NULL,
    created_at DATE NOT NULL,
    published BOOLEAN DEFAULT FALSE
);

CREATE TABLE Education(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(32) CHECK (type in ('formal', 'course')),
    started DATE,
    ended DATE DEFAULT NULL,
    description TEXT DEFAULT NULL,
    certificate_url VARCHAR(255) DEFAULT NULL
);
