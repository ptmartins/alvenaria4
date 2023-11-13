import styles from './Footer.module.css';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.copyright}>Copyright &copy; 20233 - Alvenaria 4</div>
            <div className={styles.contacts}>
                <div className={styles.address}>
                    <span>Tv. do Carmo Velho, 6</span>
                    <span>7800-195 <Beja></Beja></span>
                </div>
                <div className={styles.phone}>
                </div>
                <div className={styles.address}>
                    <span>Tv. do Carmo Velho, 6</span>
                    <span>7800-195 <Beja></Beja></span>
                </div>
                <div className={styles.address}>
                    <span>Tv. do Carmo Velho, 6</span>
                    <span>7800-195 <Beja></Beja></span>
                </div>
                <div className={styles.address}>
                    <span>Tv. do Carmo Velho, 6</span>
                    <span>7800-195 <Beja></Beja></span>
                </div>
            </div>
        </footer>
    )
}