-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- المزود: localhost:3306
-- أنشئ في: 12 يناير 2016 الساعة 16:52
-- إصدارة المزود: 5.5.46-cll
-- PHP إصدارة: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- قاعدة البيانات: `hawamir_booksbooks`
--

-- --------------------------------------------------------

--
-- بنية الجدول `books`
--

CREATE TABLE IF NOT EXISTS `books` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `local_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `international_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `priority` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('yes','no') COLLATE utf8_unicode_ci NOT NULL,
  `cover` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `books_category_id_foreign` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=32 ;

--
-- إرجاع أو استيراد بيانات الجدول `books`
--

INSERT INTO `books` (`id`, `name`, `local_number`, `international_number`, `priority`, `status`, `cover`, `category_id`, `created_at`, `updated_at`) VALUES
(30, 'سيكولوجية المتداولين في البورصة', '2011/21078', '977-222-340-6', '6', 'no', '179600a229719a36c359.jpg', 24, '2015-10-28 08:41:16', '2015-10-28 08:41:16'),
(31, 'مدخل إلى التحليل الفني', '1234', '3111', '3', 'no', 'a60c63daf7d50252b7c9.jpg', 19, '2015-12-14 08:40:12', '2015-12-14 08:40:12');

-- --------------------------------------------------------

--
-- بنية الجدول `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=31 ;

--
-- إرجاع أو استيراد بيانات الجدول `category`
--

INSERT INTO `category` (`id`, `name`, `created_at`, `updated_at`) VALUES
(19, 'التحليل الفني', '2015-10-28 08:31:25', '2015-10-28 08:31:25'),
(20, 'التحليل المالي والأساسي', '2015-10-28 08:31:58', '2015-10-28 08:31:58'),
(21, 'إدارة الصناديق والمحافظ الاستثمارية وإدارة المخاطر', '2015-10-28 08:32:22', '2015-10-28 08:32:22'),
(22, 'المتاجرة في الأسواق المالية العالمية', '2015-10-28 08:32:48', '2015-10-28 08:32:48'),
(23, 'الأنظمة والتشريعات والتعاملات في الإسلام', '2015-10-28 08:33:32', '2015-10-28 08:33:32'),
(24, 'الإدارة النفسية والتحليل السيكولوجي للمتاجرين', '2015-10-28 08:34:02', '2015-10-28 08:34:02'),
(25, 'إستراتيجيات التداول في الأسواق المالية', '2015-10-28 08:34:23', '2015-10-28 08:34:23');

-- --------------------------------------------------------

--
-- بنية الجدول `files`
--

CREATE TABLE IF NOT EXISTS `files` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_store` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `notes` text COLLATE utf8_unicode_ci NOT NULL,
  `book_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `files_book_id_foreign` (`book_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=17 ;

--
-- إرجاع أو استيراد بيانات الجدول `files`
--

INSERT INTO `files` (`id`, `src`, `date_store`, `notes`, `book_id`, `created_at`, `updated_at`) VALUES
(16, '5eef3709307bd038dfc3.doc', '2015/10/28', 'نسخة قديمة', 30, '2015-10-28 08:45:55', '2015-10-28 08:45:55');

-- --------------------------------------------------------

--
-- بنية الجدول `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- إرجاع أو استيراد بيانات الجدول `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2015_10_03_121209_create_category_table', 2),
('2015_10_11_092921_create_books_table', 3),
('2015_10_12_160401_create_files_table', 4),
('2015_10_17_105516_create_task_table', 5),
('2015_10_17_110744_create_tasks_table', 6),
('2015_10_17_112456_create_user_task_table', 7);

-- --------------------------------------------------------

--
-- بنية الجدول `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `end_date` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `src` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `date_created` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_responsibility` int(11) NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `book_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `task_user_id_foreign` (`user_id`),
  KEY `task_book_id_foreign` (`book_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=81 ;

--
-- إرجاع أو استيراد بيانات الجدول `task`
--

INSERT INTO `task` (`id`, `title`, `content`, `end_date`, `src`, `status`, `date_created`, `user_responsibility`, `user_id`, `book_id`, `created_at`, `updated_at`) VALUES
(77, 'عمرو سليم', 'سيبسيبسيبسيبسيبسيبسيب', '2015-11-13', '825a29d981098485e1d9.sql', 0, '2015-11-18', 2, 1, 30, '2015-11-18 06:53:25', '2015-11-18 06:53:25'),
(78, 'gfhfgjf', 'aqsq', '2015-11-26', 'a8f1f7cf58e443ec9bd0.png', 0, '2015-11-19', 3, 6, 30, '2015-11-19 07:35:07', '2015-11-19 07:35:07'),
(79, 'بسم الله الرحمن الرحيم', 'مطلوب منكا', '2015-12-16', '7776dddb7f736130e77b.py', 0, '2015-12-09', 4, 1, 30, '2015-12-09 10:37:49', '2015-12-09 10:37:49'),
(80, 'مراجعة كتاب الفوركس', 'عمل مراجعة', '2015-12-29', '9f2916461ce13f94b4fd.docx', 1, '2015-12-14', 6, 1, 30, '2015-12-14 08:33:03', '2015-12-14 08:33:46');

-- --------------------------------------------------------

--
-- بنية الجدول `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `permission` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=18 ;

--
-- إرجاع أو استيراد بيانات الجدول `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `permission`, `created_at`, `updated_at`) VALUES
(1, 'senior', 'seniormahmoud9@gmail.com', '$2y$10$gXDgQV8TIZ7.qOnzm2xFMeyy/GCoJ8B6mW7EI8GzQsEdPBZHakXOO', 1, '0000-00-00 00:00:00', '2015-11-18 09:56:49'),
(2, 'كابو', 'kapu@yahoo.com', '$2y$10$Dr3uOVljCaVxOS3rCBh2wumhzf6Dh7ePi7WsligRWT5SORLkXI0de', 3, '2015-10-17 08:11:12', '2015-11-19 07:22:36'),
(3, 'ياسر', 'yasser@yahoo.com', '$2y$10$ZeUoJCC1CFRc1KfWrdoAj./30F4xP9gyAeQVsgwYRY7Dewlf9AfpK', 1, '2015-10-18 05:33:38', '2015-11-18 07:37:46'),
(4, 'خالد', 'khaled@yahoo.com', '$2y$10$A0wDHjToYUd3wnyD6/V7GuB6bgcHSH/DBlOHXMNKSlMhQRBXE2DpO', 1, '2015-10-24 08:23:05', '2015-10-24 08:23:05'),
(5, 'abdelfatah', 'abdelfatah9999@yahoo.com', '$2y$10$RaFdBH2Cnk7lhShDDEjMyusb68U03RZ2RNnbhgOK1cHE0ET0OoPua', 3, '2015-10-28 08:49:52', '2015-10-28 08:49:52'),
(6, 'محمد الغباري', 'melghobary@mec.biz', '$2y$10$ov/eFJGIXStWkQAfHWVPv.46IDFUKBAEjh.VBTqhhYS9c3ltcfXxC', 1, '2015-11-19 07:20:59', '2015-11-19 07:20:59');

-- --------------------------------------------------------

--
-- بنية الجدول `user_task`
--

CREATE TABLE IF NOT EXISTS `user_task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL,
  `src` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `close_date` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `task_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `book_id` int(11) NOT NULL,
  `user_task` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `user_task_task_id_foreign` (`task_id`),
  KEY `user_task_user_id_foreign` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=43 ;

--
-- إرجاع أو استيراد بيانات الجدول `user_task`
--

INSERT INTO `user_task` (`id`, `status`, `src`, `content`, `close_date`, `task_id`, `user_id`, `book_id`, `user_task`, `created_at`, `updated_at`) VALUES
(39, 2, '', '', '', 77, 4, 30, 1, '0000-00-00 00:00:00', '2015-12-09 11:05:34'),
(40, 0, '', '', '', 78, 2, 30, 6, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 0, '', '', '', 79, 3, 30, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 2, '', '', '2015-12-14', 80, 5, 30, 1, '0000-00-00 00:00:00', '2015-12-14 08:45:14');

--
-- قيود الجداول المحفوظة
--

--
-- القيود للجدول `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE;

--
-- القيود للجدول `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE;

--
-- القيود للجدول `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_book_id_foreign` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `task_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- القيود للجدول `user_task`
--
ALTER TABLE `user_task`
  ADD CONSTRAINT `user_task_task_id_foreign` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_task_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
