-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 03, 2020 at 04:03 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `matkaklubi`
--

-- --------------------------------------------------------

--
-- Table structure for table `kontaktid`
--

CREATE TABLE `kontaktid` (
  `id` int(11) NOT NULL,
  `nimi` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `loodud` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kontaktid`
--

INSERT INTO `kontaktid` (`id`, `nimi`, `email`, `loodud`) VALUES
(1, 'Keegi Testija', 'inasdfasdf@adfasd.ee', '2020-06-03 15:24:50'),
(2, 'Keegi Proovija', 'werwe@adfasd.ee', '2020-06-03 15:25:36');

-- --------------------------------------------------------

--
-- Table structure for table `matkad`
--

CREATE TABLE `matkad` (
  `id` int(11) NOT NULL,
  `nimetus` varchar(50) NOT NULL,
  `lyhikirjeldus` varchar(100) NOT NULL,
  `kirjeldus` varchar(500) NOT NULL,
  `pilt1` varchar(100) NOT NULL,
  `pilt2` varchar(100) NOT NULL,
  `alguskuup` varchar(30) NOT NULL,
  `loodud` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `matkad`
--

INSERT INTO `matkad` (`id`, `nimetus`, `lyhikirjeldus`, `kirjeldus`, `pilt1`, `pilt2`, `alguskuup`, `loodud`) VALUES
(1, 'Kanuumatk võhandul', 'Salsdkfjlasdjf lasdf ls flas dflasf ', 'owiueroqwer oqwe roqw eroqwerqwerlqwerl qwerjqower oqwer oqweroqw eroiq weor qwoer qower oqwer qw', './images/matk.png', './images/matk.png', '06.08.2020', '2020-05-30 09:47:37'),
(2, 'Kanuumatk Pärnu jõel', 'Salsdkfjlasdjf lasdf ls flas dflasf ', 'owiueroqwer oqwe roqw eroqwerqwerlqwerl qwerjqower oqwer oqweroqw eroiq weor qwoer qower oqwer qw', './images/matk.png', './images/matk.png', '24.08.2020', '2020-05-30 09:50:37');

-- --------------------------------------------------------

--
-- Table structure for table `registreerumised`
--

CREATE TABLE `registreerumised` (
  `id` int(11) NOT NULL,
  `matk_id` int(11) NOT NULL,
  `nimi` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `kuup` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `markused` varchar(300) DEFAULT NULL,
  `loodud` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `registreerumised`
--

INSERT INTO `registreerumised` (`id`, `matk_id`, `nimi`, `email`, `kuup`, `markused`, `loodud`) VALUES
(1, 1, 'Mati Maasikas', 'mati.maasikas@uuuu.ee', '2020-06-01 18:05:42', NULL, '2020-06-01 18:05:42'),
(2, 1, 'Kati Murakas', 'kati.murakas@uuuu.ee', '2020-06-01 18:07:45', 'mina ka!', '2020-06-01 18:06:25'),
(3, 2, 'Rein Rebane', 'rein.rebane@ttttt.ee', '2020-06-01 18:08:49', NULL, '2020-06-01 18:08:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kontaktid`
--
ALTER TABLE `kontaktid`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `matkad`
--
ALTER TABLE `matkad`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registreerumised`
--
ALTER TABLE `registreerumised`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kontaktid`
--
ALTER TABLE `kontaktid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `matkad`
--
ALTER TABLE `matkad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `registreerumised`
--
ALTER TABLE `registreerumised`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
