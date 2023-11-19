import Link from 'next/link';
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import styles from './SocialNav.module.css'

export default function SocialNav() {
    return(
        <div className={styles.social}>
            <Link href="" className={styles.social_link}> <FaFacebookSquare /> </Link>
            <Link href="" className={styles.social_link}> <FaInstagramSquare /> </Link>
            <Link href="" className={styles.social_link}> <FaLinkedin /> </Link>
        </div>    
    )
}