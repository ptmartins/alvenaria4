'use client';

import Carousel from '../Carousel/Carousel';
import styles from'./Brandings.module.css';

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
      ];

    return(
        <section className="section section__brandings">
            <div className="brands">
                <Carousel images={images}/>
            </div>
        </section>    
    )
}