import { ButtonMain } from '../UI/ButtonUi';
import SubText from '../UI/SubText';
import TitlteText from '../UI/TitleText';
import styles from './styles.module.scss';


export default function Emergency(){
    return(
        <div className={styles.emergency_container}>
            <div className={styles.topText}>
                <TitlteText 
                    size='36px'
                    text='Atendimento Emergencial'
                    weight='600'
                />
            </div>
            <div className={styles.hoursText}>
                <SubText 
                    size='28px'
                    text='24 Horas'
                    weight='600'
                />
            </div>
            <div className={styles.subTextEmergency}>
                <SubText 
                    size='24px'
                    weight='400'
                    text='Contamos com infraestrutura completa. UTI, diagnósticos por imagem, laboratório, infectologia, clínico geral e especialistas em Sapiranga.'
                />
            </div>
            <div className={styles.buttonEmergency}>
                <ButtonMain 
                    backgroundColor='var(--colors-secondary-600)'
                    text='(5X) XXXXX-XXXX'
                />
            </div>
        </div>
    )
}