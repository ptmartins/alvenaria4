import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SocialNav from '../SocialNav/SocialNav';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegistered} from 'react-icons/fa';
import {GiDiploma} from 'react-icons/gi';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.footer_logo}>
                    <div className={styles.logo}>
                        <Image src="/images/logo.png" fill="true" quality={90} alt="Alvenaria 4 - Logo"/> 
                    </div>
                    <div className={styles.corporate}>
                        <span>  NIPC 516 571 958</span> 
                        <span>  Alvará 100700 – PAR (Classe 2)</span> 
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.address}>
                        <FaMapMarkerAlt className={styles.icon} /> Tv. do Carmo Velho, 6, 7800-195 Beja
                    </div>
                    <div className={styles.phone}>
                        <FaPhoneAlt className={styles.icon} /> 308 800 304 – extensão 65
                    </div>
                    <div className={styles.email}>
                        <FaEnvelope className={styles.icon} /> alvenaria4@vintageobras.pt
                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom}> 
                <div className={styles.copyright}>
                    <span>Copyright &copy; 2023 - Alvenaria 4</span>
                </div>
                <SocialNav />
            </div>           
        </footer>
    )
}