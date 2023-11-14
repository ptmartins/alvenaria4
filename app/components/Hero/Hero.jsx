import styles from './Hero.module.css';

export default function Hero() {
    return(
        <section className={styles.hero}>
            <div className={styles.hero_content}>
                <h1 className={styles.hero_title}>The future of property investing.</h1>
                <p className={styles.hero_subtitle}>High-quality, sustainable property investment with one of the UK's finest housebuilders.</p>
                <button className={`btn btn--cta ${styles.hero_btn}`} >Know more</button>
            </div>  
        </section>     
    )
}