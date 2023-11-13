import Image from 'next/image';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.inner_wrapper}>
                <div className={styles.logo}>
                    <Image src="/images/logo.png" fill="true" quality={90} alt="Alvenaria 4 - Logo"/> 
                </div>
                <Nav />
            </div>
        </header>    
    )
}