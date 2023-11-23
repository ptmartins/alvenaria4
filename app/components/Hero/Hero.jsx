import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return(
        <section className={styles.hero}>
            <div className={`inner-wrapper ${styles.hero_inner}`}>
                <div className={styles.hero_content}>
                    <h1 className={styles.hero_title}>Edificamos ideias, transformamos realidades.</h1>
                    <p className={styles.hero_subtitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore fugit modi voluptatum animi ipsa repudiandae expedita dignissimos excepturi voluptas ab. Quia error odio molestias saepe repellat sapiente sit delectus aut.</p>
                    <Link href="/about" className={`btn btn--cta ${styles.hero_btn}`}>Saber mais</Link>
                </div>  
                <div className={styles.hero_thumbnail}>
                    <Image src="/images/hero.jpg" fill="true" />
                </div>
                <div className={styles.hero_bottomThumb}>
                    <Image src="/images/hero_bottom.jpg" fill="true" />
                </div>
            </div>
        </section>     
    )
}