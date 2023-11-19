import Image from 'next/image';
import styles from './team.module.css';

import { createClient } from 'contentful';
import contentfulConfig from '../../contentfulConfig';

async function getTeamData() {
    const client = createClient(contentfulConfig),
          res = await client.getEntries();

    return res; 
}


export default async function Team() {

    const data = await getTeamData();

    return(
        <div className="page">
            <h1 className="page__title">A equipa</h1>
            <div className={styles.team}>
                <div className={styles.team_member}>
                    <div className={styles.thumbnail}>
                        <Image src="/images/team/filipe_campelo.jpeg" alt="foo" fill="true" className={styles.thumbnail_image} />
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