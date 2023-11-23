import Link from 'next/link';
import styles from './Nav.module.css';

export default function NavBar() {
    return(
        <div className={styles.nav}>
            <ul className={styles.nav_list}>
                <li className={styles.nav_item}>
                    <Link href="/about" className={styles.nav_link}>A empresa</Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/projects" className={styles.nav_link}>Projectos</Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="/team" className={styles.nav_link}>A equipa</Link>
                </li>
                <li className={styles.nav_item}>
                    <Link href="#" className={styles.nav_link}>Contactos</Link>
                </li>
            </ul>
        </div>
    )
}