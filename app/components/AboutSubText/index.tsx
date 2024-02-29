import SubText from '../UI/SubText';
import TitlteText from '../UI/TitleText';
import styles from './styles.module.scss';

export default function AboutSubText(){
    return(
        <>
        <div className={styles.containerSubText}>
        
            <div className={styles.textItem}>
                <TitlteText 
                    size='28px'
                    text='Atendimento 24 horas '
                    weight='400'
                />
                <SubText 
                    size='18px'
                    text='Oferecemos serviços clínicos, cirúrgicos e emergenciais. Temos raio-x, laboratório 24 horas, UTI e CTI, internação exclusiva para gatos, e um time de especialistas para cuidar do seu bichinho de estimação.'
                    weight='300'
                />
                <SubText 
                    size='18px'
                    text='Traga seu pet para a Lorem Ipsum!'
                    weight='300'
                />
            </div>
            <div className={styles.imgItem}>
                <img src='../assets/medic.png'></img>
            </div>
        </div>
        </>
    )
}