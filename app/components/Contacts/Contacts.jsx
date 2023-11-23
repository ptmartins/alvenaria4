'use client'

import Link from 'next/link';
import styles from './Contacts.module.css';
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegistered} from 'react-icons/fa';
import ContactForm from '../ContactForm/ContactForm';
import SocialNav from '../SocialNav/SocialNav';

export default function Contacts() {
  return (
    <section className={`section ${styles.section_contacts}`}>
        <div className={`inner-wrapper ${styles.inner_wrapper__contacts}`}>
            <div className={styles.details}>
                <h1 className={styles.title}>Contacte-nos para discutir o seu próximo projecto</h1>
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
                <SocialNav />
            </div>
            <div className={styles.form}>
               <ContactForm />
            </div>
        </div>
    </section>
  );
};
