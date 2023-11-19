import Image from 'next/image';
import styles from './team.module.css';

import { createClient } from 'contentful';
import contentfulConfig from '../../contentfulConfig';

async function getTeamData() {
    const client = createClient(contentfulConfig),
          res = await client.getEntries({
            content_type: 'team'
        });

    return res; 
}


export default async function Team() {

    const data = await getTeamData(),
          team = data.items;

    return(
        <div className="page">
            <div className={`inner-wrapper ${styles.inner_wrapper__team}`}>
                <h1 className="page__title">A equipa</h1>
                <div className={styles.team}>

                    {team.map(item => {
                        return(
                            <div className={styles.team_member}>
                                <div className={styles.thumbnail}>
                                    <Image 
                                        src={"/images/team/unknown_male.png"}
                                        alt="foo" 
                                        fill="true" 
                                        className={styles.thumbnail_image}
                                    />
                                </div>
                                <div className={styles.body}>
                                    <span className={styles.role}>{item.fields.cargo}</span>
                                    <h2 className={styles.name}>{item.fields.nome}</h2>
                                </div>
                            </div>
                        ) 
                    })}
                </div>
            </div>
        </div>    
    )
}