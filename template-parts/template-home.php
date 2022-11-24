<!-- Section Hero -->
<section class="section section--hero">
    <div class="inner-wrapper">
        <!-- Slider -->
        <ul class="slide-show">
            <div>
                <img src=<?php echo get_stylesheet_directory_uri() . '/images/slider/image1.jpg' ?> alt="" class="slide">
            </div>
            <div>
                <img src=<?php echo get_stylesheet_directory_uri() . '/images/slider/image3.jpg' ?> alt="" class="slide">
            </div>
            <div>
                <img src=<?php echo get_stylesheet_directory_uri() . '/images/slider/image4.jpg' ?> alt="" class="slide">
            </div>
            <div>
                <img src=<?php echo get_stylesheet_directory_uri() . '/images/slider/image5.jpg' ?> alt="" class="slide">
            </div>
            <div>
                <img src=<?php echo get_stylesheet_directory_uri() . '/images/slider/image6.jpg' ?> alt="" class="slide">
            </div>
            <div>
                <img src=<?php echo get_stylesheet_directory_uri() . '/images/slider/image7.jpg' ?> alt="" class="slide">
            </div>
            <div>
                <img src=<?php echo get_stylesheet_directory_uri() . '/images/slider/image8.jpg' ?> alt="" class="slide">
            </div>
            <div>
                <img src=<?php echo get_stylesheet_directory_uri() . '/images/slider/image9.jpg' ?> alt="" class="slide">
            </div>
            <div>
                <img src=<?php echo get_stylesheet_directory_uri() . '/images/slider/image10.jpg' ?> alt="" class="slide">
            </div>
        </ul>
        <div class="slider__overlay">
            <div class="inner-wrapper">
                <div class="overlay__content">
                    <a href="#" class="btn">
                        <span class="btn-content">Contacte-nos</span>
                        <span class="icon">
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </a>
                    <p>"Qualidade significa fazer certo quando ninguém está a ver." - Henry Ford</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section section--services">
    <div class="inner-wrapper">
        <h2 class="section__title">Servicos</h2>
        <?php
            if(have_rows('services')) {
                echo '<div class="services">';

                while(have_rows('services')) {
                    the_row();

                    $name = get_sub_field('name');

                    echo '<div class="service">
                            <span class="service__name">' . $name . '</span>
                          </div>';
                }
            }
        ?>
    </div>
</section>

<!-- Section Portfolio -->
<section id="portfolio" class="section section--portfolio">
    <div class="inner-wrapper">
        <h2 class="section__title">Portfolio</h2>
        <?php

            if(have_rows('portfolio')) {
                
                echo '<div class="featured">';

                while(have_rows('portfolio')) {
                    
                    the_row();

                    // Load sub field value.
                    $photo = get_sub_field('photo');
                    $location = get_sub_field('location');
                    $date = strtotime(get_sub_field('date'));
                    $date_output = date('M Y', $date);
                    $description = get_sub_field('description');
                    $featured = get_sub_field('featured');
                
                    if($featured) {
                        echo '<div class="featured__item">
                                <div class="featured__image">   
                                    <img src="' . $photo['url'] . '" alt="" class="portfolio__item--photo">
                                </div>
                                <div class="featured__content">
                                    <h3 class="featured__title">' . $location . '</h3>
                                    <p class="featured__date">' . $date_output . '</p>
                                    <p class="featured__description">' . $description . '</p>
                                </div>
                            </div>';
                    }

                }
                echo '</div>';
            }

        ?>
    </div>
</section>

<!-- Section Reviews -->
<section id="reviews" class="section section--reviews">
    <div class="inner-wrapper">
        <div class="reviews">
            <div class="review">iefdeuhffefwe</div>
            <div class="review">ewfewfwe</div>
            <div class="review">fwefvbetgbetg</div>
            <div class="review">regerger</div>
            <div class="review">gergergerg</div>g
        </div>
    </div>
</section>

<!-- Section Team -->
<section id="team" class="section section--team">
    <div class="inner-wrapper">
        <h2 class="section__title section__title--team">Equipa</h2>
        <?php
            if(have_rows('team')) {
        ?>
            <div class="team">
            <?php
                // Loop through rows.
                while(have_rows('team')) {
                    
                    the_row();

                    // Load sub field value.
                    $name = get_sub_field('name');
                    $role = get_sub_field('role');
                    $email = get_sub_field('email');
                    $photo = get_sub_field('photo');
            ?>
                <div class="team__member">
                    <div class="member__thumbnail">
                        <img src=<?php echo $photo['url'] ?> alt=<?php echo $photo['alt'] ?>>
                    </div>
                    <div class="member__details">
                        <h3 class="member__name"><?php echo $name ?></h3>
                        <p class="member__role"><?php echo $role ?></p>
                        <a href="mailto:<?php echo $email ?>" class="member__email"><?php echo $email ?></a>
                    </div>
                </div>
            <?php 
                }
            ?>
        <?php    
        }
        ?>
    </div>
</section>