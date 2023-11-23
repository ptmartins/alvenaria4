
import Link from 'next/link';
import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <section className={`section ${styles.section_contacts}`}>
        <div className={`inner-wrapper ${styles.inner_wrapper__contacts}`}>
            <div className={styles.details}>
                <h1 className={styles.title}>Contacte-nos para discutir o ser próximo projecto</h1>
                <div className={styles.address}>
                    <p>Tv do Carmo Velho, 6</p>
                    <p>7800-195 Beja</p>
                </div>
                <div className={styles.email}>
                    <Link href="mailto:geral@alvenaria4.pt" className="u-link">geral@alvenaria4.pt</Link>
                </div>
                <div className={styles.phone}>
                    <Link href="tel:+351797333333" className="u-link">+351 797 333 333</Link>
                </div>
            </div>
            <div className={styles.form}>
                {/* <ContactForm /> */}
            </div>
        </div>
    </section>
  );
};
