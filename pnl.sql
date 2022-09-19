-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-09-2022 a las 21:25:14
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pnl`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllJugadores` ()   SELECT * FROM jugadores$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertJugador` (IN `nombre` VARCHAR(50), IN `apellidos` VARCHAR(50), IN `edad` VARCHAR(50), IN `posicion` VARCHAR(50), IN `equipo` VARCHAR(50), IN `nacionalidad` VARCHAR(50), IN `superbowls` INT(4) UNSIGNED)   INSERT INTO jugadores (nombre,apellidos,edad,posicion,equipo,nacionalidad,superbowls) values (nombre,apellidos,edad,posicion,equipo,nacionalidad,superbowls)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `nombre` varchar(50) NOT NULL,
  `estadio` varchar(50) NOT NULL,
  `campeonatos` int(3) NOT NULL,
  `liga` varchar(50) NOT NULL,
  `division` varchar(50) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`nombre`, `estadio`, `campeonatos`, `liga`, `division`, `id`) VALUES
('Patriots', 'Gillette Stadium', 6, 'NFL', 'AFC este', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadios`
--

CREATE TABLE `estadios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `equipo` varchar(50) NOT NULL,
  `localidad` varchar(50) NOT NULL,
  `capacidad` int(12) NOT NULL,
  `apertura` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estadios`
--

INSERT INTO `estadios` (`id`, `nombre`, `equipo`, `localidad`, `capacidad`, `apertura`) VALUES
(1, 'Patriots', 'PNLG', 'Mexico', 65878, '11 de mayo de 2002');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `edad` int(3) NOT NULL,
  `nacionalidad` varchar(50) NOT NULL,
  `equipo` varchar(50) NOT NULL,
  `posicion` varchar(50) NOT NULL,
  `superbowls` int(3) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`nombre`, `apellidos`, `edad`, `nacionalidad`, `equipo`, `posicion`, `superbowls`, `id`) VALUES
('Alan', 'Rodriguez', 22, 'Mexicana', 'Patriots', 'Mariscal de campo', 3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estadios`
--
ALTER TABLE `estadios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `estadios`
--
ALTER TABLE `estadios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
