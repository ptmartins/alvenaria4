import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return(
        <section className={styles.hero}>
            <div className={styles.hero_content}>
                <h1 className={styles.hero_title}>Edificamos ideias, transformamos realidades.</h1>
                <p className={styles.hero_subtitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore fugit modi voluptatum animi ipsa repudiandae expedita dignissimos excepturi voluptas ab. Quia error odio molestias saepe repellat sapiente sit delectus aut.</p>
                <Link href="/about" className={`btn btn--cta ${styles.hero_btn}`}>Saber mais</Link>
            </div>  
        </section>     
    )
}