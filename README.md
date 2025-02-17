Database Name: crud

SQL for table: 
CREATE TABLE `student` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Email` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
)
