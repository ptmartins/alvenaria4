import { createClient } from 'contentful';
import contentfulConfig from '../../../contentfulConfig';
import styles from './Services.module.css'; 

async function getServicesData() {
    const client = createClient(contentfulConfig),
          res = await client.getEntries({
            content_type: 'servicos'
        });

    return res; 
}

export default async function Services() {

    const data = await getServicesData(),
          services = data.items;

    return(
        <section className="section section--services">
            <div className="inner-wrapper">
                <h2 className="section__title">Servicos</h2>
                <div className={styles.services}>
                    {services.map((service, index) => {
                        return(
                            <div className={styles.service}>
                                <h3 key={index}>{service.fields.servico}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>    
    )
}