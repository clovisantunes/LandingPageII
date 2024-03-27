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
                            text='Com uma estrutura completa, nossas unidades estão preparadas para realizar atendimentos 24h, tomando as medidas imediatas para tratamento. Aqui você conta com os melhores médicos veterinários e profissionais da área durante todas as etapas do atendimento.'
                            weight='400'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}