-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 11, 2023 at 09:26 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopse`
--

-- --------------------------------------------------------

--
-- Table structure for table `addproducts`
--

CREATE TABLE `addproducts` (
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_category` varchar(255) NOT NULL,
  `item_price` varchar(255) NOT NULL,
  `item_dsc` varchar(255) NOT NULL,
  `item_qty` varchar(255) NOT NULL,
  `item_image` varchar(255) NOT NULL,
  `item_discount` varchar(255) DEFAULT NULL,
  `item_subtotal` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `add_to_carts`
--

CREATE TABLE `add_to_carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_category` varchar(255) DEFAULT NULL,
  `item_price` varchar(255) NOT NULL,
  `item_dsc` varchar(255) NOT NULL,
  `item_qty` varchar(255) NOT NULL,
  `item_image` varchar(255) NOT NULL,
  `item_discount` varchar(255) DEFAULT NULL,
  `item_subtotal` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `add_to_carts`
--

INSERT INTO `add_to_carts` (`id`, `user_id`, `item_id`, `item_name`, `item_category`, `item_price`, `item_dsc`, `item_qty`, `item_image`, `item_discount`, `item_subtotal`, `created_at`, `updated_at`) VALUES
(1, '1', '1', 'Indian Chicken Kabab (Murg Malai)', NULL, '199', 'Testy nd delicous', '3', 'https://www.thespruceeats.com/thmb/GqFnT-HurnFcC3DWQKK6fTlTcZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/murg-malai-kabab-1957372-Hero_01-bb66c49fd80e4b95b26a6fdd68bd7a7d.jpg', '6', '561.18', '2023-07-11 01:17:35', '2023-07-11 01:17:54'),
(2, '1', '2', 'Indian Chicken Kabab (Murg Malai)', NULL, '199', 'Testy nd delicous', '2', 'https://www.thespruceeats.com/thmb/GqFnT-HurnFcC3DWQKK6fTlTcZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/murg-malai-kabab-1957372-Hero_01-bb66c49fd80e4b95b26a6fdd68bd7a7d.jpg', '6', '374.12', '2023-07-11 01:17:42', '2023-07-11 01:17:49');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `item_category` varchar(255) DEFAULT NULL,
  `item_price` varchar(255) DEFAULT NULL,
  `item_discount` varchar(255) DEFAULT NULL,
  `item_image` varchar(255) DEFAULT NULL,
  `item_dsc` varchar(255) DEFAULT NULL,
  `item_qty` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `item_name`, `item_category`, `item_price`, `item_discount`, `item_image`, `item_dsc`, `item_qty`, `created_at`, `updated_at`) VALUES
(1, 'Addiction Jeans', 'Jeans', '1199', '6', 'https://5.imimg.com/data5/ZO/KW/TB/SELLER-13622981/jeans-article-addiction-.jpg', 'New Addiction Edition Jeans', '1', '2023-07-11 01:49:08', '2023-07-11 01:49:08'),
(2, 'Branded Shirts', 'Shirts', '499', '4', 'https://cdn.josephturner.co.uk/Original/Mens-Aqua-Short-Sleeve-Linen-Shirt-MCLNSSAQU_5.jpg', 'Branded Shirts at low price', '1', '2023-07-11 01:51:44', '2023-07-11 01:51:44'),
(3, 'Branded T-Shirts', 'T-shirts', '399', '2.5', 'https://assets.ajio.com/medias/sys_master/root/20230602/PX12/64792d1842f9e729d70b8fde/-473Wx593H-461378045-multi-MODEL.jpg', 'Branded TShirts at low price', '1', '2023-07-11 01:53:31', '2023-07-11 01:53:31'),
(4, 'Branded Sunglasses', 'Sunglasses', '199', '5.5', 'https://rukminim1.flixcart.com/image/450/500/xif0q/sunglass/r/n/z/medium-candyb1-elligator-original-imaggtvrnnrbdvkn.jpeg?q=90&crop=false', 'Branded Sunglasses at low price', '1', '2023-07-11 01:54:50', '2023-07-11 01:54:50'),
(5, 'Branded Shoes', 'Shoes', '1699', '7.5', 'https://rukminim1.flixcart.com/image/400/400/xif0q/shoe/u/a/x/6-hrxcs003-hrx-by-hrithik-roshan-black-original-imagp2t4hvpsxgr5.jpeg?q=70', 'Branded Shoes at low price', '1', '2023-07-11 01:56:11', '2023-07-11 01:56:11');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_05_05_055724_create_items_table', 1),
(6, '2023_05_06_071021_create_add_to_carts_table', 1),
(7, '2023_05_10_061425_create_pending_carts_table', 1),
(8, '2023_05_15_190440_create_my__orders_table', 1),
(9, '2023_05_17_190419_create_sellers_table', 1),
(10, '2023_05_17_195344_create__addproducts_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `my_orders`
--

CREATE TABLE `my_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `item_id` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_category` varchar(255) NOT NULL,
  `item_price` varchar(255) NOT NULL,
  `item_dsc` varchar(255) NOT NULL,
  `item_qty` varchar(255) NOT NULL,
  `item_image` varchar(255) NOT NULL,
  `item_discount` varchar(255) DEFAULT NULL,
  `item_subtotal` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pending_carts`
--

CREATE TABLE `pending_carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `item_id` varchar(255) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_category` varchar(255) DEFAULT NULL,
  `item_price` varchar(255) NOT NULL,
  `item_dsc` varchar(255) NOT NULL,
  `item_qty` varchar(255) NOT NULL,
  `item_image` varchar(255) NOT NULL,
  `item_discount` varchar(255) DEFAULT NULL,
  `item_subtotal` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pending_carts`
--

INSERT INTO `pending_carts` (`id`, `user_id`, `item_id`, `item_name`, `item_category`, `item_price`, `item_dsc`, `item_qty`, `item_image`, `item_discount`, `item_subtotal`, `created_at`, `updated_at`) VALUES
(1, NULL, '3', 'Indian Chicken Kabab (Murg Malai)', NULL, '199', 'Testy nd delicous', '2', 'https://www.thespruceeats.com/thmb/GqFnT-HurnFcC3DWQKK6fTlTcZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/murg-malai-kabab-1957372-Hero_01-bb66c49fd80e4b95b26a6fdd68bd7a7d.jpg', '6', '374.12', '2023-07-11 01:19:58', '2023-07-11 01:20:03'),
(2, NULL, '2', 'Indian Chicken Kabab (Murg Malai)', NULL, '199', 'Testy nd delicous', '3', 'https://www.thespruceeats.com/thmb/GqFnT-HurnFcC3DWQKK6fTlTcZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/murg-malai-kabab-1957372-Hero_01-bb66c49fd80e4b95b26a6fdd68bd7a7d.jpg', '6', '561.18', '2023-07-11 01:19:59', '2023-07-11 01:20:18');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sellers`
--

CREATE TABLE `sellers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Sufiyaan', 'ss@g.com', '09993717359', NULL, '1111', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addproducts`
--
ALTER TABLE `addproducts`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `add_to_carts`
--
ALTER TABLE `add_to_carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `my_orders`
--
ALTER TABLE `my_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `pending_carts`
--
ALTER TABLE `pending_carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sellers_email_unique` (`email`),
  ADD UNIQUE KEY `sellers_phone_unique` (`phone`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addproducts`
--
ALTER TABLE `addproducts`
  MODIFY `item_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `add_to_carts`
--
ALTER TABLE `add_to_carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `my_orders`
--
ALTER TABLE `my_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pending_carts`
--
ALTER TABLE `pending_carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sellers`
--
ALTER TABLE `sellers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
