import Image from 'next/image';
import styles from './team.module.css';

export default function Team() {
    return(
        <div className="page">
            <h1 className="page__title">A equipa</h1>
            <div className={styles.team}>
                <div className={styles.team_member}>
                    <div className={styles.thumbnail}>
                        <Image src="/images/team/filipe_campelo.jpeg" fill="true" className={styles.thumbnail_image} />
                    </div>
                    <div className={styles.body}>
                        <span className={styles.role}>Director Técnico</span>
                        <h2 className={styles.name}>Filipe Campelo</h2>
                    </div>
                </div>
            </div>
        </div>    
    )
}