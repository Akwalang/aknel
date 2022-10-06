-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Окт 30 2012 г., 13:32
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `aknel_05`
--

-- --------------------------------------------------------

--
-- Структура таблицы `ak_article`
--

CREATE TABLE IF NOT EXISTS `ak_article` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8 NOT NULL,
  `sys_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `text` text CHARACTER SET utf8 NOT NULL,
  `author` varchar(25) CHARACTER SET utf8 NOT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `date_change` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `keywords` varchar(600) CHARACTER SET utf8 NOT NULL,
  `description` varchar(600) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=cp1251 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `ak_article`
--

INSERT INTO `ak_article` (`id`, `title`, `sys_name`, `text`, `author`, `date_create`, `date_change`, `keywords`, `description`) VALUES
(1, 'AknelCMS', '', '<p><img src="images/aknel.png" align="left" width="150" /></p><p>Aknel – это графический движок, цель которого: частично заменить технологию flash.</p>\r\n<p>Его ядро выстроено на основе мощной библиотеки jQuery, с помощью которой и происходит обмен данных сервера и клиента. На данный момент движок находится в стадии разработки, и конечная дата выхода альфа-версии пока неизвестна. \r\n</p>\r\n', '', '2011-09-10 08:42:55', '0000-00-00 00:00:00', '', ''),
(2, 'Технология', '', '<p>Donec suscipit rhoncus erat at aliquam. Duis orci urna, tempus lacinia tempus quis, ultricies ut metus. Duis aliquam, sapien sed laoreet facilisis, erat erat convallis justo, at faucibus erat arcu sit amet quam. Quisque non placerat tortor. Duis dui mauris, aliquet ac ultrices ac, mattis non lacus. Vivamus ultrices bibendum nulla, vel euismod libero porta et. Curabitur vestibulum accumsan sem, eget scelerisque tellus gravida et. Cras pulvinar sollicitudin felis sed consequat. Mauris suscipit rutrum eleifend. Curabitur id viverra lectus. Nunc eu dolor turpis. Nam pulvinar nibh eget eros eleifend sit amet volutpat nisi placerat. Donec iaculis, mauris sed facilisis mollis, enim lorem aliquam nibh, in scelerisque ante arcu cursus lectus. Aliquam ipsum odio, aliquam vel sodales sed, tincidunt sit amet elit. Maecenas bibendum neque ut mauris dignissim vestibulum. Morbi adipiscing tempus felis id tincidunt.</p>', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(3, 'Возможности', '', '<p>Aenean nisi nisi, placerat vel iaculis in, facilisis ac eros. Sed at dapibus tortor. Donec fermentum, diam ac lacinia mollis, lorem justo sagittis felis, convallis pulvinar augue libero eu metus. Ut et lacus nulla. Morbi molestie tortor mi. Morbi egestas dolor vel nisi varius sit amet porttitor nulla aliquam. Sed placerat sagittis nisl, a luctus risus scelerisque at. Aliquam eu dui nisl, eu porta lacus. Curabitur nec posuere velit. Fusce malesuada eros id tortor adipiscing vel eleifend nunc elementum. Quisque dapibus cursus ligula, id gravida lectus consequat ac. Duis vitae dolor a ipsum ultrices cursus a sed justo. Vestibulum a volutpat velit. Nulla eu massa diam, vitae vulputate diam.<a href="index.php?type=article&id=2">Технология</a></p>\r\n<div>\r\n<div class="animate_banner lock">\r\n    <div class="ab_bg">\r\n    </div>\r\n    <div class="ab_bg2">\r\n    </div>\r\n<div class="ab_bg_text" unselectable="on">\r\nsecurity\r\n</div>\r\n    <div class="ab_bigtext" unselectable="on">\r\n    	Безопаснось \r\n    </div>\r\n    <div class="ab_smalltext" unselectable="on">\r\n    	гарантированная защита\r\n    </div>\r\n    <div class="ab_img">\r\n    </div>\r\n    <a href="index.php?type=article&id=4">\r\n    </a>\r\n</div>\r\n<div class="animate_banner garranted">\r\n    <div class="ab_bg">\r\n    </div>\r\n    <div class="ab_bg2">\r\n    </div>\r\n<div class="ab_bg_text" unselectable="on">\r\nasynchrony\r\n</div>\r\n    <div class="ab_bigtext" unselectable="on">\r\n    	Асинхронность\r\n    </div>\r\n    <div class="ab_smalltext" unselectable="on">\r\n    	быстрая загрузка данных\r\n    </div>\r\n    <div class="ab_img">\r\n    </div>\r\n    <a href="index.php?type=article&id=1">\r\n    </a>\r\n</div>\r\n\r\n\r\n</div>', '', '2011-09-11 14:19:40', '0000-00-00 00:00:00', '', ''),
(4, 'Развитие', '', '<p>Nullam lobortis justo vel tortor dictum mattis. Nunc semper molestie dictum. Morbi ultrices est at odio venenatis tempor sit amet sit amet orci. Proin consectetur, augue vitae pretium lobortis, est magna malesuada ante, ac feugiat diam tellus vitae ipsum. Donec bibendum auctor justo pellentesque vulputate.</p>', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
(5, 'Пятый материал', '', '<p>Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. Пятый материал. </p>', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `ak_article_options`
--

CREATE TABLE IF NOT EXISTS `ak_article_options` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `enable` tinyint(1) NOT NULL DEFAULT '3',
  `enable_title` tinyint(1) NOT NULL DEFAULT '3',
  `enable_author` varchar(25) NOT NULL,
  `enable_date_create` tinyint(1) NOT NULL DEFAULT '3',
  `enable_date_change` tinyint(1) NOT NULL DEFAULT '3',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `ak_article_options`
--

INSERT INTO `ak_article_options` (`id`, `enable`, `enable_title`, `enable_author`, `enable_date_create`, `enable_date_change`) VALUES
(1, 3, 3, '', 3, 3),
(2, 3, 3, '', 3, 3),
(3, 3, 3, '', 3, 3),
(4, 3, 3, '', 3, 3),
(5, 3, 3, '', 3, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `ak_favicons`
--

CREATE TABLE IF NOT EXISTS `ak_favicons` (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `template_id` tinyint(2) NOT NULL,
  `name` varchar(15) NOT NULL,
  `file` varchar(20) NOT NULL,
  `links` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `ak_favicons`
--

INSERT INTO `ak_favicons` (`id`, `template_id`, `name`, `file`, `links`) VALUES
(1, 1, 'Оранжевый', 'orange', '|3|'),
(2, 1, 'Голубой', 'blue', '|-1|2|'),
(3, 1, 'Красный', 'red', '|4|'),
(4, 1, 'Зелёный', 'green', '|1|');

-- --------------------------------------------------------

--
-- Структура таблицы `ak_module`
--

CREATE TABLE IF NOT EXISTS `ak_module` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `sys_name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `insert_position` varchar(255) NOT NULL,
  `position` int(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sys_name` (`sys_name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `ak_module`
--

INSERT INTO `ak_module` (`id`, `name`, `sys_name`, `type`, `insert_position`, `position`) VALUES
(1, 'Главное меню', 'main_menu', 'menu', 'horizontal_menu', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `ak_module_menu`
--

CREATE TABLE IF NOT EXISTS `ak_module_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `module_id` int(4) NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `position` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `ak_module_menu`
--

INSERT INTO `ak_module_menu` (`id`, `module_id`, `name`, `link`, `position`) VALUES
(1, 1, 'Главная', 'index.php?type=article&id=1', 1),
(2, 1, 'Технология', 'index.php?type=article&id=2', 2),
(3, 1, 'Возможности', 'index.php?type=article&id=3', 3),
(4, 1, 'Развитие', 'index.php?type=article&id=4', 4);

-- --------------------------------------------------------

--
-- Структура таблицы `ak_start`
--

CREATE TABLE IF NOT EXISTS `ak_start` (
  `component` varchar(15) NOT NULL,
  `id` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `ak_start`
--

INSERT INTO `ak_start` (`component`, `id`) VALUES
('article', '1');

-- --------------------------------------------------------

--
-- Структура таблицы `ak_templates`
--

CREATE TABLE IF NOT EXISTS `ak_templates` (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `directory` varchar(15) NOT NULL,
  `stat` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `ak_templates`
--

INSERT INTO `ak_templates` (`id`, `name`, `directory`, `stat`) VALUES
(1, 'Idea', 'idea_templ', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `ak_templates_files`
--

CREATE TABLE IF NOT EXISTS `ak_templates_files` (
  `id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `template_id` int(2) NOT NULL,
  `name` varchar(15) NOT NULL,
  `file` varchar(20) NOT NULL,
  `links` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `ak_templates_files`
--

INSERT INTO `ak_templates_files` (`id`, `template_id`, `name`, `file`, `links`) VALUES
(1, 1, 'По умолчанию', 'other_page', '|-1|'),
(3, 1, 'Главная', 'start_page', '|0|');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
