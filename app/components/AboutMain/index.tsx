import SubText from '../UI/SubText';
import TitlteText from '../UI/TitleText';
import styles from './styles.module.scss';
interface aboutMainProps{
    text: string;
    urlImage: string;
}

export default function AboutMain({text, urlImage}: aboutMainProps){
    return(
        <>
            <div className={styles.aboutMain_container}>
                <div className={styles.localAbout}>
                    <div className={styles.pathlocal}>
                    <a href='/'>
                    <TitlteText 
                        size='28px'
                        text='Inicio'
                        weight='300'
                    />
                    </a>
                    <TitlteText 
                        size='36px'
                        text='/'
                        weight='200'
                    />
                    <TitlteText 
                        size='36'
                        text={text}
                        weight='600'
                    />
                    </div>
                    <div className={styles.aboutText}>
                           <SubText 
                            size='28px'
                            text='Lorem Ipsum Clínica Veterinária 24 horas Sapiranga'
                            weight='400'
                           />                              
                    </div>
                </div>
                <div className={styles.imageAbout}>
                    <img src={urlImage} />
                </div>
            </div>
        </>
    )
}