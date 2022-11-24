<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?php bloginfo('name'); ?> </title>
    <?php wp_head(); ?>
</head>
<body>

    <header class="header">
        <div class="inner-wrapper inner-wrapper--header">
            <!-- Logo -->
            <div class="header__logo">
                <img class="A4_png" src=<?php echo get_stylesheet_directory_uri() . '/images/logo/Logo_Alvenaria4-simbolo.png' ?> alt="logo" href="#"/>
            </div>
            <input type="checkbox" class="menu-btn" id="menu-btn" id="menu-btn">
            <label for="menu-btn" class="menu-icon">
                <span class="menu-icon__line"></span>
            </label>
            <!-- Navigation -->
            <!-- <ul class="nav__list">
                <li class="nav__listItem">
                    <a href="#" class="nav__link">HOME</a>
                </li>
                <li class="nav__listItem">
                    <a href="#" class="nav__link">SERVIÇOS</a>
                </li>
                <li class="nav__listItem">
                    <a href="#" class="nav__link">SOBRE NÓS</a>
                </li>
                <li class="nav__listItem">
                    <a href="#" class="nav__link">PORTFOLIO</a>
                </li>
                <li class="nav__listItem">
                    <a href="#" class="nav__link">EQUIPA</a>
                </li>
            </ul> -->
            <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
        </div>
    </header>
    <main class="main">
