import { ButtonMain } from '../UI/ButtonUi';
import SubText from '../UI/SubText';
import TitlteText from '../UI/TitleText';
import styles from './styles.module.scss';
interface ServicesData {
    service: Record<string, string>;
    images: Record<string, string>;
    texts: Record<string, string>;
}
export default function Services(){

    const servicesData: ServicesData = {
        service: {
            'cirurgia': 'CIRURGIAS',
            'odontologia': 'ODONTOLOGIA',
            'oftamologia':'OFTALMOLOGIA',
            'endo': 'ENDOCRINOLOGIA',
            'derma': "DERMATOLOGIA",
            'ortopedia': 'ORTOPEDIA / NEUROLOGIA',
            'oncologia': 'ONCOLOGIA',
            'ozonioterapia': 'OZONIOTERAPIA',
            'prenatal': 'PRÉ NATAL PET'
        },
        images: {
            'cirurgia':'/assets/dog 1.png',
            'odontologia':'/assets/dog 2.png',
            'oftamologia':'/assets/dog 3.png',
            'endo':'/assets/dog 4.png',
            'derma':'/assets/dog 5.png',
            'ortopedia':'/assets/dog 6.png',
            'oncologia':'/assets/dog 7.png',
            'ozonioterapia':'/assets/dog 8.png',
            'prenatal':'/assets/dog 9.png'
        },
        texts: {
            'cirurgia':'Contamos também com uma equipe especializada de cirurgiões, anestesistas e auxiliares para a realização das cirurgias.',
            'odontologia':'Para os procedimentos odontológicos, contamos com os equipamentos mais modernos, como ultrassom dentário e fotopolimerizador para restaurações dentárias.',
            'oftamologia':'A avaliação periódica com um oftalmologista veterinário é de extrema importância para detectar de modo precoce afecções que podem em curto e longo prazo afetar de modo importante a visão. ',
            'endo':'A endocrinologia veterinária é uma especialidade que diagnostica e trata doenças relacionadas aos desequilíbrios hormonais dos animais, dedicando-se também a problemas relacionados ao metabolismo deles.',
            'derma':'Alterações dermatológicas são as mais comuns na rotina da clínica veterinária. A coceira e suas consequências como infecções, mudanças de humor e lesões repetitivas na pele são capazes de reduzir muito a qualidade de vida dos pets. ',
            'ortopedia':'Sempre com o objetivo de oferecer serviços de qualidade aos animais, a Lorem ipsum tem uma equipe de médicos veterinários especializados nestas duas áreas. ',
            'oncologia':'O oncologista é o profissional capaz de decidir qual o melhor plano a seguir após o diagnóstico, de acordo com o tipo de tumor, assim como o local afetado, o tempo de evolução e a espécie acometida. ',
            'ozonioterapia':'A ozonioterapia é a utilização do gás ozônio, associado ao gás oxigênio, formando o chamado ozônio medicinal, utilizado como agente terapêutico para o tratamento de diversas patologias.',
            'prenatal':'O ideal é que, quando você decidir que sua fêmea vai ser mamãe, vocês a levem para uma visita ao veterinário antes mesmo de colocá-la junto ao macho(para a cópula) para que as orientações sobre vacinas, vermífugos e cuidados com a gestação e o parto sejam dadas.'
        }
    };
    
    const serviceItems = Object.keys(servicesData.service).map((key) => (
        <div key={key} className={styles.servicesItem} id={key}>
            <img src={servicesData.images[key]} alt={key} />
            <div className={styles.serviceName}>
                <SubText 
                    size='16px'
                    weight='400'
                    text={servicesData.service[key]}
                />
            </div>
            <div className={styles.serviceDescription}>
                    <div className={styles.titleSub}>
                        <TitlteText 
                            size='16px'
                            weight='400'
                            text={servicesData.service[key]}
                        />
                    </div>
                    <div className={styles.coments}>
                        <SubText 
                            size='12px'
                            text={servicesData.texts[key]}
                            weight='200'
                        />
                    </div>
                    <div className={styles.buttonCardDescription}>
                        <ButtonMain 
                            backgroundColor='#5FBDC4'
                            text='Veja mais'
                        />
                    </div>
            </div>
        </div>
    ));

    return(
        <div className={styles.services_contaner}>
            <div className={styles.services_Card}>
                {serviceItems}
            </div>
            <div className={styles.buttonServices}>
                <ButtonMain 
                    backgroundColor='var(--colors-secondary-600)'
                    text='Entre em contato'
                />
            </div>
        </div>
    );
}
