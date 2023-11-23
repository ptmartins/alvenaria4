import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.footer_logo}>
                    <Image src="/images/logo.png" fill="true" quality={90} alt="Alvenaria 4 - Logo"/> 
                </div>
                <div className={styles.corporate}>
                    <span>  NIPC 516 571 958</span> 
                    <span>  Alvará 100700 – PAR (Classe 2)</span> 
                </div>
            </div>
            <div className={styles.footer_bottom}> 
                <div className={styles.copyright}>
                    <span>Copyright &copy; 2023 - Alvenaria 4</span>
                </div>
            </div>           
        </footer>
    )
}