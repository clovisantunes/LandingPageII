import {ButtonUi} from '../UI/ButtonUi';
import LogoUi from '../UI/LogoUi';
import NavList from '../UI/NavList';
import styles from './styles.module.scss';

export default function NavBar(){
    return(
        <>
        <div className={styles.navbar_Container}>
        <div className={styles.navbar_card}>
            <div className={styles.logoCard}>
                <LogoUi />
            </div>
            <div className={styles.navList}>
                <NavList />
            </div>
            <div className={styles.buttonCard}>
                <ButtonUi 
                    text='Emergencia 24H'
                    subText='Clique aqui'
                />
            </div>
            <div className={styles.lineCard}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>
        </div>
        </div>
        </>
    )
}