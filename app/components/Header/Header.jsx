import Image from 'next/image';
import Link from 'next/link';
import Nav from '../Nav/Nav';
import styles from './Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={`inner-wrapper ${styles.header_inner}`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/images/logo.png" title="Alvenaria4" fill="true" quality={90} alt="Alvenaria 4 - Logo"/> 
                    </Link>
                </div>
                <Nav />
            </div>
        </header>    
    )
}