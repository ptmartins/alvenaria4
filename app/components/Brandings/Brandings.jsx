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
            slidesPerView: 3, 
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true
            }
        };

    return(
        <section className="section section__brandings">
            <div className="inner-wrapper">
                <h2 className="section__title">Algumas das marcas com que trabalhamos</h2>
                <div className="brands">
                    <Carousel slides={images} options={carouselOptions}/>
                </div>
            </div>
        </section>    
    )
}