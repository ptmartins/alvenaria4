'use client';

import Carousel from '../Carousel/Carousel';
import styles from'./Brandings.css';

export default function Brandings() {
    const images = [
            '/images/logos/robbialac_logo.webp',
            '/images/logos/cin_logo.webp',
            '/images/logos/recer_logo.webp',
            '/images/logos/roca_logo.webp',
            '/images/logos/sanindusa_logo.webp',
            '/images/logos/weber_logo.webp',
            '/images/logos/sika_logo.webp',
            '/images/logos/love_logo.webp',
            '/images/logos/danosa_logo.webp',
            '/images/logos/sanitana_logo.webp',
            '/images/logos/porcelanosa_logo.webp',
        ],
        carouselOptions = {
            slidesPerView: 1, 
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true
            }, 
            breakpoints: {
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }
        };

    return(
        <section className="section section__brandings">
            <div className="inner-wrapper">
                <div className="brands">
                    <Carousel slides={images} options={carouselOptions}/>
                </div>
            </div>
        </section>    
    )
}