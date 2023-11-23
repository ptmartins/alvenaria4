'use client'

import Image from 'next/image';
import Carousel from '../Carousel/Carousel';
import styles from './Featured.module.css';

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
                    <h1 className={`section-title`} >Projectos em destaque</h1>
                    <button className={`btn btn--cta`}>Ver todos</button>
                </div>

                {works.map((item, index) => {

                    return(
                        <div key={index}>
                            <Image src={`https:${item.fields.fotos[0].fields.file.url}`} width="400" height="260"/>
                            <h1>{item.fields.nome}</h1>
                        </div>
                    )
                })}
            </div>    
        </section>
    )
}