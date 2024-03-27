import SubText from '../UI/SubText';
import TitlteText from '../UI/TitleText';
import styles from './styles.module.scss';

export default function SessionAbout(){
    return(
        <>
        <div className={styles.session_container}>
        <div className={styles.imgItem}>
                <img src='../assets/badgeDog.png'></img>
            </div>
            <div className={styles.textItem}>
                <TitlteText 
                    size='24px'
                    text='Hospital Veterinário Lorem Ipsum'
                    weight='400'
                />
                <SubText 
                    size='16px'
                    text='A Lorem Ipsun oferece suporte hospitalar para cães e gatos que necessitam de cuidados e procedimentos intensivos, em XXXXXXXX.'
                    weight='300'
                />
                <SubText 
                    size='16px'
                    text='Contamos com uma equipe técnica especializada, que prioriza o bem-estar animal. '
                    weight='300'
                />
            </div>
            
        
        </div>
        </>
    )
}