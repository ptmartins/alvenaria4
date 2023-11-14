import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegistered, FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import {GiDiploma} from 'react-icons/gi';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_top}>
                <div className={styles.corporate}>
                    <span className={styles.footer_logo}>
                        <Image src="/images/logo.png" fill="true" quality={90} alt="Alvenaria 4 - Logo"/> 
                    </span>
                    <span> <FaRegistered className={styles.icon} /> NIPC 516 571 958</span> 
                    <span> <GiDiploma className={styles.icon} /> Alvará 100700 – PAR (Classe 2)</span> 
                </div>
                <div className={styles.contacts}>
                    <div className={styles.address}>
                        <span> <FaMapMarkerAlt className={styles.icon} /> Tv. do Carmo Velho, 6, 7800-195 Beja</span> 
                    </div>
                    <div className={styles.phone}>
                        <span><FaPhoneAlt className={styles.icon} /> 308 800 304 – extensão 65</span>
                    </div>
                    <div className={styles.email}>
                        <span><FaEnvelope className={styles.icon} /> alvenaria4@vintageobras.pt</span>
                    </div>
                </div>
                <div className="social">
                    <Link href="" className={styles.social_link}> <FaFacebookSquare /> </Link>
                    <Link href="" className={styles.social_link}> <FaInstagramSquare /> </Link>
                    <Link href="" className={styles.social_link}> <FaLinkedin /> </Link>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>Copyright &copy; 2023 - Alvenaria 4</span>
            </div>
           
        </footer>
    )
}