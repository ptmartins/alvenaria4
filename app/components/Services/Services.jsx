import { createClient } from 'contentful';
import contentfulConfig from '../../../contentfulConfig';
import styles from './Services.module.css'; 
import { FaPaintRoller, FaBath, FaTools, FaHammer, FaRecycle } from "react-icons/fa";
import { BsHousesFill } from "react-icons/bs";
import { MdKitchen } from "react-icons/md";

async function getServicesData() {
    const client = createClient(contentfulConfig),
          res = await client.getEntries({
            content_type: 'servicos'
        });

    return res; 
}

export default async function Services() {

    const data = await getServicesData(),
          services = data.items,
          getServiceIcon = (service) => {
            switch(service) {
                case 'Construção de moradias':
                    return <FaHammer className={styles.icon} />;
                    break;
                case 'Pintura de fachadas':
                    return <FaPaintRoller className={styles.icon} />;
                    break;
                case 'Remodelações':
                    return <BsHousesFill className={styles.icon} />;
                    break;
                case 'Remodelações de cozinhas':
                    return <MdKitchen className={styles.icon} />;
                    break;
                case 'Remodelações de casas de banho':
                    return <FaBath className={styles.icon} />;
                    break;
                case 'Reabilitação de edificios':
                    return <FaRecycle className={styles.icon} />;
                    break;                             
            }
          };

    return(
        <section className="section section--services">
            <div className="inner-wrapper">
                <h2 className="section__title">Servicos</h2>
                <div className={styles.services}>
                    {services.map((service, index) => {
                        return(
                            <div className={styles.service}>
                                {getServiceIcon(service.fields.servico)}
                                <h3 key={index}>{service.fields.servico}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>    
    )
}