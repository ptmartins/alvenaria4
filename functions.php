<?php 

    // Stylesheets
    function theme_stylesheets() {
        wp_enqueue_style( 'fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css', false, '1.1', 'all');
        wp_enqueue_style( 'slick', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css', false, '1.8.1', 'all');
        wp_enqueue_style( 'slick_theme', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css', false, '1.8.1', 'all');
        wp_enqueue_style( 'main', get_template_directory_uri() . '/css/main.css', false, '1.0', 'all');
    }
    add_action( 'wp_enqueue_scripts', 'theme_stylesheets');

    // Scripts
    function theme_scripts() {
        wp_enqueue_script( 'jquery_1_11', 'https://code.jquery.com/jquery-1.11.0.min.js', false, '1.11.0', true);
        wp_enqueue_script( 'jquery_migrate', 'https://code.jquery.com/jquery-migrate-1.2.1.min.js', false, '1.2.1', true);
        wp_enqueue_script( 'slick', 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js', false, '1.8.1', true);  
        wp_enqueue_script( 'main', get_template_directory_uri() . '/js/bundle.js', false, '1.0', true);
    }
    add_action( 'wp_enqueue_scripts', 'theme_scripts');

    // Menu
    function register_menus() {
        register_nav_menus(
          array(
            'main-menu' => __( 'Main Menu' ),
           )
         );
       }
    add_action( 'init', 'register_menus' ); 