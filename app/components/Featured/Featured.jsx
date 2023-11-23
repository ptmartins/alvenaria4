import Image from 'next/image';
import Link from 'next/link';
import styles from './Featured.module.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { createClient } from 'contentful';
import contentfulConfig from '../../../contentfulConfig';

async function getConstructionData() {
    const client = createClient(contentfulConfig),
          res = await client.getEntries({
            content_type: 'obra'
        });

    return res; 
}

export default async function Featured() {

    const data = await getConstructionData(),
          works = data.items;

    return(
        <section className="section">
            <div className="inner-wrapper inner-wrapper--section">
                <div className={`section-header`}>
                    <h1 className={`section-title`} >Projectos recentes</h1>
                    <button className={`btn btn--cta`}>Ver todos</button>
                </div>

                <div className={styles.featured}>
                    {works.map((item, index) => {

                        const date = new Date(item.fields.data),
                              day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
                              month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth(),
                              year = date.getFullYear(),
                              res = `${day}-${month}-${year}`;

                        return(
                            <div key={index} className={styles.featured_item}>
                                <div className={styles.featured_thumb}>
                                    <Image src={`https:${item.fields.fotos[0].fields.file.url}`} fill="true"/>
                                </div>
                                <div className={styles.featured_body}>
                                    <h1 className={styles.featured_title}>{item.fields.nome}</h1>
                                    <span className={styles.featured_date}>{res}</span>
                                    <p className={styles.featured_summary}>{item.fields.resumo.content[0].content[0].value}</p>
                                    <span className={styles.featured_divider}></span>
                                    <Link href="#" className={`${styles.featured_link}`}>Saber Mais <FaArrowRightLong /> </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>    
        </section>
    )
}