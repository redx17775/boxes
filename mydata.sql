-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 21 ديسمبر 2023 الساعة 07:57
-- إصدار الخادم: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydata`
--

-- --------------------------------------------------------

--
-- بنية الجدول `feedback`
--

CREATE TABLE `feedback` (
  `Name` varchar(15) NOT NULL,
  `experience` varchar(4) NOT NULL,
  `Comments` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- إرجاع أو استيراد بيانات الجدول `feedback`
--

INSERT INTO `feedback` (`Name`, `experience`, `Comments`) VALUES
('ValentinaSmith', 'good', 'Impressive design!'),
('BenjaminHarper', 'mid', 'Average experience.'),
('GabrielleJones', 'bad', 'Terrible navigation.'),
('AlexanderMoore', 'good', 'Smooth user interfac'),
('SerenityTaylor', 'mid', 'Could be better.'),
('NathanielBrown', 'bad', 'Slow loading times.'),
('IsabellaClark', 'good', 'Excellent customer s');

-- --------------------------------------------------------

--
-- بنية الجدول `login`
--

CREATE TABLE `login` (
  `NAME` varchar(15) NOT NULL,
  `PASSWORD` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- إرجاع أو استيراد بيانات الجدول `login`
--

INSERT INTO `login` (`NAME`, `PASSWORD`) VALUES
('ValentinaSmith', 'P@ssw0rd123'),
('BenjaminHarper', 'Secure2023!'),
('GabrielleJones', 'Rainbow6789'),
('AlexanderMoore', 'ExaMple#456'),
('SerenityTaylor', 'Chaotic$wor'),
('NathanielBrown', '3nigmaP@ss!'),
('IsabellaClark', 'Sunshine789');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
