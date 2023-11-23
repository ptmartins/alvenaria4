'use client'

import Link from 'next/link';
import styles from './Nav.module.css';
import {useState} from 'react';
import { LuMenu } from "react-icons/lu";

export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    /**
     * Toggle burger menu
     */
    const toggleMenu = () => setShowMenu(!showMenu);

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
            <LuMenu className={styles.burger} onClick={() => toggleMenu()}/>
            <ul className={`${styles.mobileMenu} ${showMenu ? styles.show : ''}`}>
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