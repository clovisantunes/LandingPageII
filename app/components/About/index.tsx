import SubText from '../UI/SubText';
import TitlteText from '../UI/TitleText';
import styles from './styles.module.scss';

export default function About(){
    return(
        <>
            <div className={styles.about_container}>
                <div className={styles.image_container}>
                    <div className={styles.imageCard}>

                    </div>
                </div>
                <div className={styles.textAbout}>
                    <div className={styles.textTitle}>
                        <TitlteText 
                            size='48px'
                            text='Centro Veterinário'
                            weight='500'
                        />
                        <TitlteText 
                            size='18px'
                            text='Lorem ipusm'
                            weight='500'
                        />
                        <SubText 
                            size='24px'
                            text='O Centro Veterinário Loren Pet 24 horas, localizado na cidade de Loren Ipsun, surgiu de um desejo de evolução pessoal e profissional. Aqui colocamos em prática tudo aquilo em que acreditamos, preparando com carinho todos os ambientes, visando proporcionar o máximo de conforto para nossos pacientes e o máximo de confiança e segurança para nossos clientes.'
                            weight='400'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}