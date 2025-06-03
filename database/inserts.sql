INSERT INTO Education (name,type,started,ended,description,certificate_url) VALUES
('Bachillerato en informática', 'formal', '2021/03/01', '2023/12/25', 'Especialización en diseño web. UTU Atlántida.', NULL),
('Introducción a la programación', 'course', '2023/05/15', '2023/12/20', 'POO en Python.', 'https://drive.usercontent.google.com/download?id=1FmrRpcQ1yGBurApbUwME-UK8wcBjkCXL'),
('Tecnicatura de redes y software', 'formal', '2024/03/01', NULL, NULL, NULL),
('Ingeniería computación', 'formal', '2024/07/01', NULL, 'Materias aprobadas: P1, Matemática inicial', NULL);

UPDATE Education SET
name = CONVERT(BINARY(CONVERT(name USING latin1)) USING utf8mb4),
description = CONVERT(BINARY(CONVERT(description USING latin1)) USING utf8mb4),
certificate_url = CONVERT(BINARY(CONVERT(certificate_url USING latin1)) USING utf8mb4);
