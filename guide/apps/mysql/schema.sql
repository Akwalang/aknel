-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Окт 30 2012 г., 11:41
-- Версия сервера: 5.5.25
-- Версия PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `aknel_guidemarket`
--

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_component`
--

CREATE TABLE IF NOT EXISTS `gmc_component` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `aliace` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Дамп данных таблицы `gmc_component`
--

INSERT INTO `gmc_component` (`id`, `name`, `aliace`) VALUES
(1, 'Статьи', 'article'),
(5, 'Услуги', 'service'),
(6, 'Главная страница', 'start');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_com_article`
--

CREATE TABLE IF NOT EXISTS `gmc_com_article` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Дамп данных таблицы `gmc_com_article`
--

INSERT INTO `gmc_com_article` (`id`, `title`, `text`, `date`) VALUES
(1, 'Who we are', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu tincidunt arcu. Ut a orci in neque adipiscing malesuada eget id magna. Fusce consectetur, tellus et auctor interdum, tortor felis fringilla tortor, in facilisis velit augue non ipsum. Duis nec eleifend arcu. Nullam ullamcorper tristique ligula non pharetra. Ut vel sollicitudin elit. Maecenas dapibus varius eros ac dignissim. Etiam purus sapien, vulputate eget cursus vel, tincidunt ac ipsum. Aliquam accumsan velit eu dui tincidunt vulputate. Nam lacinia consequat erat, malesuada sagittis tortor porttitor non.\r\nClass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi a mollis nibh. Fusce nec lectus mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse pellentesque aliquet dolor nec imperdiet. Mauris id elit ac mauris malesuada ultrices.\r\n', '2012-10-23 08:13:05'),
(2, 'Mission', 'Sed placerat, lectus posuere euismod congue, massa felis semper nibh, eu ullamcorper libero leo a quam. In nec ipsum velit, eget euismod lectus. Sed id tellus leo, id fermentum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae aliquam augue. Phasellus cursus dui luctus lorem tincidunt sit amet lobortis velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\nEtiam euismod, elit eu mattis viverra, neque tellus dictum quam, sed molestie velit risus eget quam. Phasellus fringilla, metus id accumsan lobortis, magna mauris ultrices nulla, eu eleifend neque ante ut est. Quisque mattis dignissim nulla quis porttitor. Aliquam ac massa quis purus volutpat condimentum.', '2012-10-23 08:18:24'),
(5, 'Кто мы', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu tincidunt arcu. Ut a orci in neque adipiscing malesuada eget id magna. Fusce consectetur, tellus et auctor interdum, tortor felis fringilla tortor, in facilisis velit augue non ipsum. Duis nec eleifend arcu. Nullam ullamcorper tristique ligula non pharetra. Ut vel sollicitudin elit. Maecenas dapibus varius eros ac dignissim. Etiam purus sapien, vulputate eget cursus vel, tincidunt ac ipsum. Aliquam accumsan velit eu dui tincidunt vulputate. Nam lacinia consequat erat, malesuada sagittis tortor porttitor non.\r\nClass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi a mollis nibh. Fusce nec lectus mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse pellentesque aliquet dolor nec imperdiet. Mauris id elit ac mauris malesuada ultrices.\r\n', '2012-10-23 05:13:05'),
(3, 'Testimonials', 'Nulla euismod suscipit sollicitudin. Vivamus auctor quam mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam in purus vitae nisl scelerisque mollis sed et odio.\r\nSed id lorem massa, ultricies aliquet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse tincidunt ligula in nunc congue tincidunt. Ut rhoncus, diam nec aliquet fermentum, justo mi gravida enim, a tincidunt quam lectus non nisi.', '2012-10-23 08:19:42'),
(4, 'Contact Us', 'Cras laoreet, augue vitae hendrerit pellentesque, elit libero tristique lacus, pretium ullamcorper arcu odio eget mauris. Morbi ac ornare erat. Quisque fermentum varius lorem vitae adipiscing. Fusce iaculis bibendum tristique.\r\nAliquam erat volutpat. Duis rutrum sodales magna ut tincidunt. Pellentesque nec sapien in mauris laoreet hendrerit. Ut nisl tortor, eleifend et gravida nec, hendrerit ut lacus.', '2012-10-23 08:19:05'),
(6, 'Наша миссия', 'Sed placerat, lectus posuere euismod congue, massa felis semper nibh, eu ullamcorper libero leo a quam. In nec ipsum velit, eget euismod lectus. Sed id tellus leo, id fermentum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae aliquam augue. Phasellus cursus dui luctus lorem tincidunt sit amet lobortis velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\nEtiam euismod, elit eu mattis viverra, neque tellus dictum quam, sed molestie velit risus eget quam. Phasellus fringilla, metus id accumsan lobortis, magna mauris ultrices nulla, eu eleifend neque ante ut est. Quisque mattis dignissim nulla quis porttitor. Aliquam ac massa quis purus volutpat condimentum.', '2012-10-23 05:18:24'),
(7, 'Свидетельство', 'Nulla euismod suscipit sollicitudin. Vivamus auctor quam mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam in purus vitae nisl scelerisque mollis sed et odio.\r\nSed id lorem massa, ultricies aliquet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse tincidunt ligula in nunc congue tincidunt. Ut rhoncus, diam nec aliquet fermentum, justo mi gravida enim, a tincidunt quam lectus non nisi.', '2012-10-23 05:19:42'),
(8, 'Контакты', 'Cras laoreet, augue vitae hendrerit pellentesque, elit libero tristique lacus, pretium ullamcorper arcu odio eget mauris. Morbi ac ornare erat. Quisque fermentum varius lorem vitae adipiscing. Fusce iaculis bibendum tristique.\r\nAliquam erat volutpat. Duis rutrum sodales magna ut tincidunt. Pellentesque nec sapien in mauris laoreet hendrerit. Ut nisl tortor, eleifend et gravida nec, hendrerit ut lacus.', '2012-10-23 05:19:05');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_com_error`
--

CREATE TABLE IF NOT EXISTS `gmc_com_error` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `language_id` int(2) unsigned NOT NULL,
  `code` int(3) unsigned NOT NULL,
  `title` varchar(30) NOT NULL,
  `text` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `gmc_com_error`
--

INSERT INTO `gmc_com_error` (`id`, `language_id`, `code`, `title`, `text`) VALUES
(1, 2, 404, 'Page Not Found', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\r\nVestibulum accumsan, quam ac fermentum lobortis, dolor nisi ullamcorper ante, eu consequat risus justo eget diam. Nunc ultrices mollis nibh, vitae vehicula neque egestas ut. Curabitur eget sapien nec enim feugiat aliquet nec sit amet augue.'),
(2, 2, 504, 'Bad Request', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\r\nNunc ultrices mollis nibh, vitae vehicula neque egestas ut. Curabitur eget sapien nec enim feugiat aliquet nec sit amet augue.'),
(3, 2, 500, 'Internal Server Error', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\r\nNunc ultrices mollis nibh, vitae vehicula neque egestas ut. Curabitur eget sapien nec enim feugiat aliquet nec sit amet augue.');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_com_service`
--

CREATE TABLE IF NOT EXISTS `gmc_com_service` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `head` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `icon` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=27 ;

--
-- Дамп данных таблицы `gmc_com_service`
--

INSERT INTO `gmc_com_service` (`id`, `head`, `text`, `icon`, `date`) VALUES
(1, 'Executive production', 'The Receiving End Of Sirens (abreviado como TREOS) fue una banda de rock proveniente de Braintee, Massachusetts, en 2003. La banda incorpora muchos elementos de diferentes géneros como el metal. Fue una banda de rock proveniente de Braintee, \r\nMassachusetts, en 2003.', 'cc_5.png', '2012-10-13 09:44:16'),
(2, 'Creative review', 'Vivamus elementum sodales ligula, et commodo sapien egestas nec. In pulvinar, dolor vitae venenatis pulvinar, justo leo molestie urna, a vehicula turpis erat vitae magna. Etiam in tortor risus. Integer semper justo non justo viverra et accumsan erat pellentesque.', 'cc_1.png', '2012-10-13 06:44:16'),
(3, 'Marketing and sales strategy', 'Google Inc. (NASDAQ: GOOG) is an American multinational corporation which provides Internet-related products and services, including internet search, cloud computing, software and advertising technologies. Advertising revenues from AdWords generate almost all of the company''s profits.', 'cc_3.png', '2012-10-22 11:08:48'),
(4, 'Brand strategy and management', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don''t look even slightly believable.', 'cc_2.png', '2012-10-22 11:19:33'),
(5, 'Business development', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.', 'cc_4.png', '2012-10-22 11:19:33'),
(6, 'Multimedia design', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ', 'mm_5.png', '2012-10-22 20:26:57'),
(7, 'Internet marketing', 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.', 'mm_3.png', '2012-10-22 20:26:57'),
(8, 'Television and radio advertsing', 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 'mm_4.png', '2012-10-22 20:31:50'),
(9, 'Viral marketing', 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.', 'mm_2.png', '2012-10-22 20:31:50'),
(10, 'Content development', 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.', 'mm_1.png', '2012-10-22 20:34:13'),
(11, 'iPhone / iPad Application Development', 'Proin iaculis lacus ut elit sollicitudin tempor. Vivamus tincidunt fermentum nisi in tristique. Fusce quis aliquam felis. Aliquam at elit sapien. Donec tincidunt venenatis lorem ac rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', 'ad_1.png', '2012-10-22 20:34:13'),
(12, 'Android Application Development', 'Vestibulum accumsan, quam ac fermentum lobortis, dolor nisi ullamcorper ante, eu consequat risus justo eget diam. Nunc ultrices mollis nibh, vitae vehicula neque egestas ut. Curabitur eget sapien nec enim feugiat aliquet nec sit amet augue.', 'ad_2.png', '2012-10-22 20:34:13'),
(13, 'Cross Platform Mobile Development', 'Ut eu convallis risus. In bibendum tempus sem id suscipit. Fusce sodales, eros ut posuere malesuada, tellus lacus pretium urna, eget posuere dui tortor vel urna. Nulla laoreet dapibus imperdiet. Morbi tortor enim, dignissim quis pellentesque vitae, rutrum non arcu. Duis sed hendrerit est.', 'ad_3.png', '2012-10-22 20:34:13'),
(14, 'Еxецутиве продуцтион', 'Тхе Рецеивинг Енд Оф Сиренс (абревиадо цомо ТРЕОС) фуе уна банда де роцк провениенте де Браинтее, Массачусеттс, ен 2003. Ла банда инцорпора мучос елементос де диферентес генерос цомо ел метал. Фуе уна банда де роцк провениенте де Браинтее, \r\nМассачусеттс, ен 2003.', 'cc_5.png', '2012-10-13 06:44:16'),
(15, 'Цреативе ревиев', 'Вивамус елементум содалес лигула, ет цоммодо сапиен егестас нец. Ин пулвинар, долор витае вененатис пулвинар, жусто лео молестие урна, а вехицула турпис ерат витае магна. Етиам ин тортор рисус. Интегер семпер жусто нон жусто виверра ет аццумсан ерат пеллентескуе.', 'cc_1.png', '2012-10-13 03:44:16'),
(16, 'Маркетинг анд салес стратегы', 'Гоогле Инц. (НАСДАК: ГООГ) ис ан Америцан мултинатионал цорпоратион вхич провидес Интернет-релатед продуцтс анд сервицес, инцлудинг интернет сеарч, цлоуд цомпутинг, софтваре анд адвертисинг течнологиес. Адвертисинг ревенуес фром АдВордс генерате алмост алл оф тхе цомпаныъъс профитс.', 'cc_3.png', '2012-10-22 08:08:48'),
(17, 'Бранд стратегы анд манагемент', 'Тхере аре маны вариатионс оф пассагес оф Лорем Ипсум аваилабле, бут тхе мажориты хаве суфферед алтератион ин соме форм, бы инжецтед хумоур, ор рандомисед вордс вхич донъът лоок евен слигхтлы белиевабле.', 'cc_2.png', '2012-10-22 08:19:33'),
(18, 'Бусинесс девелопмент', 'Сед ут перспициатис унде омнис исте натус еррор сит волуптатем аццусантиум долоремкуе лаудантиум, тотам рем апериам, еакуе ипса куае аб илло инвенторе веритатис ет куаси арчитецто беатае витае дицта сунт еxплицабо. Немо еним ипсам волуптатем куиа волуптас сит аспернатур аут одит аут фугит, сед куиа цонсекуунтур магни долорес еос куи ратионе волуптатем секуи несциунт.', 'cc_4.png', '2012-10-22 08:19:33'),
(19, 'Мултимедиа десигн', 'Ат веро еос ет аццусамус ет иусто одио дигниссимос дуцимус куи бландитиис праесентиум волуптатум деленити аткуе цоррупти куос долорес ет куас молестиас еxцептури синт оццаецати цупидитате нон провидент, симиликуе сунт ин цулпа куи оффициа десерунт моллитиа аними, ид ест лаборум ет долорум фуга. ', 'mm_5.png', '2012-10-22 17:26:57'),
(20, 'Интернет маркетинг', 'Ет харум куидем рерум фацилис ест ет еxпедита дистинцтио. Нам либеро темпоре, цум солута нобис ест елигенди оптио цумкуе нихил импедит куо минус ид куод маxиме плацеат фацере поссимус, омнис волуптас ассуменда ест, омнис долор репеллендус.', 'mm_3.png', '2012-10-22 17:26:57'),
(21, 'Телевисион анд радио адвертсинг', 'Темпорибус аутем куибусдам ет аут оффициис дебитис аут рерум нецесситатибус саепе евениет ут ет волуптатес репудиандае синт ет молестиае нон рецусандае. Итакуе еарум рерум хиц тенетур а сапиенте делецтус, ут аут реициендис волуптатибус маиорес алиас цонсекуатур аут перферендис долорибус аспериорес репеллат.', 'mm_4.png', '2012-10-22 17:31:50'),
(22, 'Вирал маркетинг', 'Он тхе отхер ханд, ве деноунце витх ригхтеоус индигнатион анд дислике мен вхо аре со бегуилед анд деморализед бы тхе чармс оф плеасуре оф тхе момент, со блиндед бы десире, тхат тхеы цаннот форесее тхе паин анд троубле тхат аре боунд то енсуе; анд екуал бламе белонгс то тхосе вхо фаил ин тхеир дуты тхроугх веакнесс оф вилл, вхич ис тхе саме ас саыинг тхроугх шринкинг фром тоил анд паин.', 'mm_2.png', '2012-10-22 17:31:50'),
(23, 'Цонтент девелопмент', 'Тхесе цасес аре перфецтлы симпле анд еасы то дистингуиш. Ин а фрее хоур, вхен оур повер оф чоице ис унтраммеллед анд вхен нотхинг превентс оур беинг абле то до вхат ве лике бест, еверы плеасуре ис то бе велцомед анд еверы паин авоидед.', 'mm_1.png', '2012-10-22 17:34:13'),
(24, 'иПхоне / иПад Апплицатион Девелопмент', 'Проин иацулис лацус ут елит соллицитудин темпор. Вивамус тинцидунт ферментум ниси ин тристикуе. Фусце куис аликуам фелис. Аликуам ат елит сапиен. Донец тинцидунт вененатис лорем ац рутрум. Цласс аптент тацити социоску ад литора торкуент пер цонубиа ностра, пер инцептос хименаеос.', 'ad_1.png', '2012-10-22 17:34:13'),
(25, 'Андроид Апплицатион Девелопмент', 'Вестибулум аццумсан, куам ац ферментум лобортис, долор ниси улламцорпер анте, еу цонсекуат рисус жусто егет диам. Нунц ултрицес моллис нибх, витае вехицула некуе егестас ут. Цурабитур егет сапиен нец еним феугиат аликует нец сит амет аугуе.', 'ad_2.png', '2012-10-22 17:34:13'),
(26, 'Цросс Платформ Мобиле Девелопмент', 'Ут еу цонваллис рисус. Ин бибендум темпус сем ид сусципит. Фусце содалес, ерос ут посуере малесуада, теллус лацус претиум урна, егет посуере дуи тортор вел урна. Нулла лаореет дапибус импердиет. Морби тортор еним, дигниссим куис пеллентескуе витае, рутрум нон арцу. Дуис сед хендрерит ест.', 'ad_3.png', '2012-10-22 17:34:13');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_module`
--

CREATE TABLE IF NOT EXISTS `gmc_module` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `type_id` int(2) unsigned NOT NULL,
  `order` int(3) NOT NULL,
  `enable` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Дамп данных таблицы `gmc_module`
--

INSERT INTO `gmc_module` (`id`, `type_id`, `order`, `enable`) VALUES
(3, 1, 1, 1),
(4, 1, 2, 1),
(5, 1, 3, 1),
(6, 1, 4, 1),
(7, 1, 1, 1),
(8, 1, 2, 1),
(9, 1, 3, 1),
(10, 1, 1, 1),
(11, 2, 1, 1),
(12, 3, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_module_name`
--

CREATE TABLE IF NOT EXISTS `gmc_module_name` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `module_id` int(3) unsigned NOT NULL,
  `language_id` int(2) unsigned NOT NULL,
  `name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- Дамп данных таблицы `gmc_module_name`
--

INSERT INTO `gmc_module_name` (`id`, `module_id`, `language_id`, `name`) VALUES
(1, 3, 2, 'Creative consulting'),
(2, 4, 2, 'Media marketing'),
(3, 5, 2, 'Application development'),
(4, 6, 2, 'About Us'),
(5, 7, 2, 'Creative consulting'),
(6, 8, 2, 'Media marketing'),
(7, 9, 2, 'Application development'),
(8, 10, 2, 'Main menu'),
(9, 11, 2, 'Language menu'),
(10, 3, 1, 'Творческая консультация'),
(11, 4, 1, 'Маркетинг СМИ'),
(12, 5, 1, 'Разработка приложений'),
(13, 6, 1, 'О Нас'),
(14, 7, 1, 'Творческая консультация'),
(15, 8, 1, 'Маркетинг СМИ'),
(16, 9, 1, 'Разработка приложений'),
(17, 10, 1, 'Главное меню'),
(18, 11, 1, 'Меню Language'),
(19, 12, 2, 'Categories menu'),
(20, 12, 1, 'Меню категорий');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_module_position`
--

CREATE TABLE IF NOT EXISTS `gmc_module_position` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `position` varchar(30) NOT NULL,
  `module_id` int(3) unsigned NOT NULL,
  `categories` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Дамп данных таблицы `gmc_module_position`
--

INSERT INTO `gmc_module_position` (`id`, `position`, `module_id`, `categories`) VALUES
(1, 'footer', 3, '|0|'),
(2, 'footer', 4, '|0|'),
(3, 'footer', 5, '|0|'),
(4, 'footer', 6, '|0|'),
(5, 'services', 7, '|1|'),
(6, 'services', 8, '|2|'),
(7, 'services', 9, '|3|'),
(9, 'main', 10, '|0|'),
(10, 'language', 11, '|0|'),
(11, 'categories', 12, '|0|');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_module_type`
--

CREATE TABLE IF NOT EXISTS `gmc_module_type` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `aliace` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `gmc_module_type`
--

INSERT INTO `gmc_module_type` (`id`, `name`, `aliace`) VALUES
(1, 'Меню', 'menu'),
(2, 'Языки', 'languages'),
(3, 'Категории', 'categories');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_mod_categories`
--

CREATE TABLE IF NOT EXISTS `gmc_mod_categories` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `link_id` int(3) unsigned NOT NULL,
  `color` varchar(10) NOT NULL,
  `shadow` varchar(10) NOT NULL,
  `image` varchar(15) NOT NULL,
  `video` varchar(15) NOT NULL,
  `order` int(2) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Дамп данных таблицы `gmc_mod_categories`
--

INSERT INTO `gmc_mod_categories` (`id`, `link_id`, `color`, `shadow`, `image`, `video`, `order`) VALUES
(1, 2, '#9656a4', '#683b72', 'smi_1.png', 'vid_1.png', 1),
(2, 6, '#6ab0f0', '#5b97ce', 'smi_2.png', 'vid_1.png', 2),
(3, 11, '#a2de72', '#81a165', 'smi_3.png', 'vid_1.png', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_mod_categories_text`
--

CREATE TABLE IF NOT EXISTS `gmc_mod_categories_text` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int(2) unsigned NOT NULL,
  `language_id` int(2) NOT NULL,
  `name` varchar(35) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Дамп данных таблицы `gmc_mod_categories_text`
--

INSERT INTO `gmc_mod_categories_text` (`id`, `category_id`, `language_id`, `name`, `description`) VALUES
(1, 1, 2, 'Creative Consulting', 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.'),
(2, 2, 2, 'Media Marketing', 'Omnis voluptas assumenda est, omnis dolor repellendus.'),
(3, 3, 2, 'Application development', 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.'),
(4, 1, 1, 'Творческая Консультация', 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.'),
(5, 2, 1, 'Маркетинг СМИ', 'Omnis voluptas assumenda est, omnis dolor repellendus.'),
(6, 3, 1, 'Разработка приложений', 'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_mod_menu_link`
--

CREATE TABLE IF NOT EXISTS `gmc_mod_menu_link` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(3) unsigned NOT NULL,
  `link_id` int(3) unsigned NOT NULL,
  `language_id` int(2) unsigned NOT NULL,
  `module_id` int(3) unsigned NOT NULL,
  `name` varchar(50) NOT NULL,
  `order` int(3) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=84 ;

--
-- Дамп данных таблицы `gmc_mod_menu_link`
--

INSERT INTO `gmc_mod_menu_link` (`id`, `parent_id`, `link_id`, `language_id`, `module_id`, `name`, `order`) VALUES
(5, 0, 1, 2, 3, 'Executive production', 5),
(6, 0, 2, 2, 3, 'Creative review', 1),
(7, 0, 3, 2, 3, 'Marketing and sales strategy', 3),
(8, 0, 4, 2, 3, 'Brand strategy and management', 2),
(9, 0, 5, 2, 3, 'Business development', 4),
(10, 0, 6, 2, 4, 'Multimedia design', 1),
(11, 0, 7, 2, 4, 'Internet marketing', 2),
(12, 0, 8, 2, 4, 'Television and radio advertsing', 3),
(13, 0, 9, 2, 4, 'Viral marketing', 4),
(14, 0, 10, 2, 4, 'Content development', 5),
(15, 0, 11, 2, 5, 'iPhone / iPad Application Development', 1),
(16, 0, 12, 2, 5, 'Android Application Development', 2),
(17, 0, 13, 2, 5, 'Cross Platform Mobile Development', 3),
(18, 0, 14, 2, 6, 'Who we are', 1),
(19, 0, 15, 2, 6, 'Mission', 2),
(20, 0, 16, 2, 6, 'Testimonials', 3),
(21, 0, 17, 2, 6, 'Contact Us', 4),
(22, 0, 1, 2, 7, 'Executive production', 5),
(23, 0, 2, 2, 7, 'Creative review', 1),
(24, 0, 3, 2, 7, 'Marketing and sales strategy', 3),
(25, 0, 4, 2, 7, 'Brand strategy and management', 2),
(26, 0, 5, 2, 7, 'Business development', 4),
(27, 0, 6, 2, 8, 'Multimedia design', 1),
(28, 0, 7, 2, 8, 'Internet marketing', 2),
(29, 0, 8, 2, 8, 'Television and radio advertsing', 3),
(30, 0, 9, 2, 8, 'Viral marketing', 4),
(31, 0, 10, 2, 8, 'Content development', 5),
(32, 0, 11, 2, 9, 'iPhone / iPad', 1),
(33, 0, 12, 2, 9, 'Android', 2),
(34, 0, 13, 2, 9, 'Cross Platform Mobile Development', 3),
(35, 0, 0, 2, 10, 'What we do', 1),
(36, 0, 0, 2, 10, 'About us', 2),
(37, 0, 17, 2, 10, 'Contacts', 3),
(38, 35, 2, 2, 10, 'Creative Consulting', 1),
(39, 35, 6, 2, 10, 'Media Marketing', 2),
(40, 35, 11, 2, 10, 'App. development', 3),
(41, 36, 14, 2, 10, 'Who we are', 1),
(42, 36, 15, 2, 10, 'Mission', 2),
(43, 36, 16, 2, 10, 'Testimonials', 3),
(45, 0, 1, 1, 3, 'Исполнительное производство', 5),
(46, 0, 2, 1, 3, 'Творческий обзор', 1),
(47, 0, 3, 1, 3, 'Продавая и стратегия продаж', 3),
(48, 0, 4, 1, 3, 'Фирменная стратегия и управление', 2),
(49, 0, 5, 1, 3, 'Развитие бизнеса', 4),
(50, 0, 6, 1, 4, 'Мультимедиа проектируют', 1),
(51, 0, 7, 1, 4, 'Интернет-маркетинг', 2),
(52, 0, 8, 1, 4, 'Телевидение и радио advertsing', 3),
(53, 0, 9, 1, 4, 'Вирусный маркетинг', 4),
(54, 0, 10, 1, 4, 'развитие контента', 5),
(55, 0, 11, 1, 5, 'iPhone / Разработка приложений iPad', 1),
(56, 0, 12, 1, 5, 'разработка приложений андроида', 2),
(57, 0, 13, 1, 5, 'кросс-платформенное мобильное развитие', 3),
(58, 0, 14, 1, 6, 'Кто мы', 1),
(59, 0, 15, 1, 6, 'Миссия', 2),
(60, 0, 16, 1, 6, 'Свидетельства', 3),
(61, 0, 17, 1, 6, 'Связываются Нас', 4),
(62, 0, 1, 1, 7, 'Исполнительное производство', 5),
(63, 0, 2, 1, 7, 'Творческий обзор', 1),
(64, 0, 3, 1, 7, 'Продавая и стратегия продаж', 3),
(65, 0, 4, 1, 7, 'Фирменная стратегия и управление', 2),
(66, 0, 5, 1, 7, 'Развитие бизнеса', 4),
(67, 0, 6, 1, 8, 'Мультимедиа проектируют', 1),
(68, 0, 7, 1, 8, 'Интернет-маркетинг', 2),
(69, 0, 8, 1, 8, 'Телевидение и радио advertsing', 3),
(70, 0, 9, 1, 8, 'Вирусный маркетинг', 4),
(71, 0, 10, 1, 8, 'развитие контента', 5),
(72, 0, 11, 1, 9, 'iPhone / iPad', 1),
(73, 0, 12, 1, 9, 'Андроид', 2),
(74, 0, 13, 1, 9, 'кросс-платформенное мобильное развитие', 3),
(75, 0, 0, 1, 10, 'Что мы делаем', 1),
(76, 0, 0, 1, 10, 'О нас', 2),
(77, 0, 17, 1, 10, 'Контакты', 3),
(78, 75, 2, 1, 10, 'Творческая Консультация', 1),
(79, 75, 6, 1, 10, 'Маркетинг СМИ', 2),
(80, 75, 11, 1, 10, 'Приложение. развитие', 3),
(81, 76, 14, 1, 10, 'Кто мы', 1),
(82, 76, 15, 1, 10, 'Миссия', 2),
(83, 76, 16, 1, 10, 'Свидетельства', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_sys_category`
--

CREATE TABLE IF NOT EXISTS `gmc_sys_category` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `id_parent` int(3) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `aliace` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Дамп данных таблицы `gmc_sys_category`
--

INSERT INTO `gmc_sys_category` (`id`, `id_parent`, `name`, `aliace`) VALUES
(1, 0, 'Creative Consulting', 'creative-consulting'),
(2, 0, 'Media marketing', 'media-marketing'),
(3, 0, 'Application development', 'application-development'),
(4, 0, 'About us', 'about-us');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_sys_favicon`
--

CREATE TABLE IF NOT EXISTS `gmc_sys_favicon` (
  `id` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `template_id` tinyint(2) unsigned NOT NULL,
  `name` varchar(15) NOT NULL,
  `file` varchar(20) NOT NULL,
  `links` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `gmc_sys_favicon`
--

INSERT INTO `gmc_sys_favicon` (`id`, `template_id`, `name`, `file`, `links`) VALUES
(1, 1, 'Белый', 'white', '|3|'),
(2, 1, 'Голубой', 'blue', '|0|2|'),
(3, 1, 'Фиолетовый', 'purple', '|4|'),
(4, 1, 'Зелёный', 'green', '|1|'),
(5, 1, 'Серый', 'gray', '');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_sys_language`
--

CREATE TABLE IF NOT EXISTS `gmc_sys_language` (
  `id` int(2) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `prefix` varchar(10) NOT NULL,
  `browser_lang` varchar(8) NOT NULL,
  `side` int(1) unsigned NOT NULL,
  `default` int(1) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `gmc_sys_language`
--

INSERT INTO `gmc_sys_language` (`id`, `name`, `prefix`, `browser_lang`, `side`, `default`) VALUES
(1, 'rus', 'rus', 'ru', 0, 1),
(2, 'eng', 'eng', 'en', 0, 0),
(3, 'Русский', 'rus', 'ru', 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_sys_link`
--

CREATE TABLE IF NOT EXISTS `gmc_sys_link` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `aliace` varchar(255) NOT NULL,
  `cat_id` int(3) unsigned NOT NULL,
  `enable` int(1) unsigned NOT NULL DEFAULT '1',
  `start` int(1) unsigned NOT NULL DEFAULT '0',
  `link` varchar(255) NOT NULL,
  `cache` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Дамп данных таблицы `gmc_sys_link`
--

INSERT INTO `gmc_sys_link` (`id`, `aliace`, `cat_id`, `enable`, `start`, `link`, `cache`) VALUES
(1, 'executive-production', 1, 1, 0, '/#1#/#aliace#', '/creative-consulting/executive-production'),
(2, 'creative-review', 1, 1, 0, '/#1#/#aliace#', '/creative-consulting/creative-review'),
(3, 'marketing-and-sales-strategy', 1, 1, 0, '/#1#/#aliace#', '/creative-consulting/marketing-and-sales-strategy'),
(4, 'brand-strategy-and-management', 1, 1, 0, '/#1#/#aliace#', '/creative-consulting/brand-strategy-and-management'),
(5, 'business-development', 1, 1, 0, '/#1#/#aliace#', '/creative-consulting/business-development'),
(6, 'multimedia-design', 2, 1, 0, '/#2#/#aliace#', '/media-marketing/multimedia-design'),
(7, 'internet-marketing', 2, 1, 0, '/#2#/#aliace#', '/media-marketing/internet-marketing'),
(8, 'television-and-radio-advertsing', 2, 1, 0, '/#2#/#aliace#', '/media-marketing/television-and-radio-advertsing'),
(9, 'viral-marketing', 2, 1, 0, '/#2#/#aliace#', '/media-marketing/viral-marketing'),
(10, 'content-development', 2, 1, 0, '/#2#/#aliace#', '/media-marketing/content-development'),
(11, 'iphone-ipad-application-development', 3, 1, 0, '/#3#/#aliace#', '/application-development/iphone-ipad-application-development'),
(12, 'android-application-development', 3, 1, 0, '/#3#/#aliace#', '/application-development/android-application-development'),
(13, 'cross-platform-mobile-development', 3, 1, 0, '/#3#/#aliace#', '/application-development/cross-platform-mobile-development'),
(14, 'who-we-are', 4, 1, 0, '/#4#/#aliace#', '/about-us/who-we-are'),
(15, 'mission', 4, 1, 0, '/#4#/#aliace#', '/about-us/mission'),
(16, 'testimonials', 4, 1, 0, '/#4#/#aliace#', '/about-us/testimonials'),
(17, 'contact-us', 4, 1, 0, '/#4#/#aliace#', '/about-us/contact-us');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_sys_link_connection`
--

CREATE TABLE IF NOT EXISTS `gmc_sys_link_connection` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `link_id` int(4) unsigned NOT NULL,
  `language_id` int(2) unsigned NOT NULL,
  `component_id` int(2) unsigned NOT NULL,
  `model` varchar(15) NOT NULL,
  `item_id` int(4) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=39 ;

--
-- Дамп данных таблицы `gmc_sys_link_connection`
--

INSERT INTO `gmc_sys_link_connection` (`id`, `link_id`, `language_id`, `component_id`, `model`, `item_id`) VALUES
(1, 1, 2, 5, 'view', 1),
(2, 2, 2, 5, 'view', 2),
(3, 3, 2, 5, 'view', 3),
(4, 4, 2, 5, 'view', 4),
(5, 5, 2, 5, 'view', 5),
(6, 6, 2, 5, 'view', 6),
(7, 7, 2, 5, 'view', 7),
(8, 8, 2, 5, 'view', 8),
(9, 9, 2, 5, 'view', 9),
(10, 10, 2, 5, 'view', 10),
(11, 11, 2, 5, 'view', 11),
(12, 12, 2, 5, 'view', 12),
(13, 13, 2, 5, 'view', 13),
(14, 14, 2, 1, 'view', 1),
(15, 15, 2, 1, 'view', 2),
(16, 16, 2, 1, 'view', 3),
(17, 17, 2, 1, 'view', 4),
(18, 1, 1, 5, 'view', 14),
(19, 2, 1, 5, 'view', 15),
(20, 3, 1, 5, 'view', 16),
(21, 4, 1, 5, 'view', 17),
(22, 5, 1, 5, 'view', 18),
(23, 6, 1, 5, 'view', 19),
(24, 7, 1, 5, 'view', 20),
(25, 8, 1, 5, 'view', 21),
(26, 9, 1, 5, 'view', 22),
(27, 10, 1, 5, 'view', 23),
(28, 11, 1, 5, 'view', 24),
(29, 12, 1, 5, 'view', 25),
(30, 13, 1, 5, 'view', 26),
(31, 14, 1, 1, 'view', 14),
(32, 15, 1, 1, 'view', 15),
(33, 16, 1, 1, 'view', 16),
(34, 17, 1, 1, 'view', 17),
(35, 14, 1, 1, 'view', 5),
(36, 15, 1, 1, 'view', 6),
(37, 16, 1, 1, 'view', 7),
(38, 17, 1, 1, 'view', 8);

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_sys_template`
--

CREATE TABLE IF NOT EXISTS `gmc_sys_template` (
  `id` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `directory` varchar(25) NOT NULL,
  `enable` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `gmc_sys_template`
--

INSERT INTO `gmc_sys_template` (`id`, `name`, `directory`, `enable`) VALUES
(1, 'Guide Market', 'guidemarket_templ', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_sys_template_file`
--

CREATE TABLE IF NOT EXISTS `gmc_sys_template_file` (
  `id` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `template_id` tinyint(2) unsigned NOT NULL,
  `name` varchar(15) NOT NULL,
  `file` varchar(20) NOT NULL,
  `links` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `gmc_sys_template_file`
--

INSERT INTO `gmc_sys_template_file` (`id`, `template_id`, `name`, `file`, `links`) VALUES
(1, 1, 'По умолчанию', 'services_page', '|-1|'),
(3, 1, 'Главная', 'start_page', '|0|'),
(5, 1, 'Статьи', 'article_page', '|14|15|16|17|error|');

-- --------------------------------------------------------

--
-- Структура таблицы `gmc_sys_user`
--

CREATE TABLE IF NOT EXISTS `gmc_sys_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `login` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `mail` varchar(25) NOT NULL,
  `type` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `gmc_sys_user`
--

INSERT INTO `gmc_sys_user` (`id`, `login`, `password`, `mail`, `type`) VALUES
(1, 'admin', '11d4e2f73012233722d629c8cac43b34', 'redmonkey@gmail.com', 'superadmin');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
