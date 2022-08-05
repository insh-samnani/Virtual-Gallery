-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2022 at 01:28 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gallery2`
--

-- --------------------------------------------------------

--
-- Table structure for table `pictures`
--

CREATE TABLE `pictures` (
  `Picture` varchar(256) NOT NULL,
  `Uploads` text NOT NULL,
  `Date` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pictures`
--

INSERT INTO `pictures` (`Picture`, `Uploads`, `Date`) VALUES
('FAST', 'uploads/1.jpg', '02/08/2022'),
('FAST', 'uploads/2.jpg', '02/08/2022'),
('FAST', 'uploads/4.webp', '02/08/2022'),
('Meme', 'uploads/3.webp', '02/08/2022'),
('Meme', 'uploads/5.webp', '02/08/2022'),
('Meme', 'uploads/6.webp', '02/08/2022'),
('Meme', 'uploads/7.webp', '02/08/2022'),
('Meme', 'uploads/8.webp', '02/08/2022'),
('Meme', 'uploads/9.gif', '02/08/2022'),
('Goat', 'uploads/16.webp', '02/08/2022'),
('Goat', 'uploads/17.jpg', '02/08/2022'),
('Goat', 'uploads/18.jpg', '02/08/2022'),
('Piegons', 'uploads/20.jpg', '02/08/2022'),
('Piegons', 'uploads/19.avif', '02/08/2022'),
('Piegons', 'uploads/21.jpg', '02/08/2022'),
('Mario', 'uploads/22.jpg', '02/08/2022'),
('Mario', 'uploads/23.jpg', '02/08/2022'),
('Mario', 'uploads/24.jpg', '02/08/2022'),
('Cat', 'uploads/50.webp', '04/08/2022'),
('Cat', 'uploads/52.jpg', '04/08/2022'),
('Cat', 'uploads/53.jpg', '04/08/2022'),
('Cat', 'uploads/51.jpg', '04/08/2022'),
('Caterpillar', 'uploads/54.jpg', '04/08/2022'),
('Squarrel', 'uploads/61.jpg', '05/08/2022');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
