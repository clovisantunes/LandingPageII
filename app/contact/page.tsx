import AboutMain from "../components/AboutMain";
import Emergency from "../components/Emergency";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { ButtonMain, ButtonUi } from "../components/UI/ButtonUi";
import TitlteText from "../components/UI/TitleText";
import styles from './styles.module.scss';

export default function Contact(){
    return(
        <>
            <NavBar />
            <div className={styles.contact_container}>
            <AboutMain 
                text="Contato"
                urlImage="../assets/dogPhone.png"
            />
            <div className={styles.formContainer}>
                <TitlteText 
                    size="36px"
                    text="Entre em contato, podemos ajudar"
                    weight="400"
                />
                <div className={styles.formItem}>
                    <input placeholder="nome"/>
                    <input placeholder="email"/>
                </div>
                <div className={styles.formItem}>
                    <input placeholder="Telefone"/>
                    <input placeholder="especialidade"/>
                </div>
                <div className={styles.textAreaItem}>
                    <textarea 
                     placeholder="Sua mensagem..."
                     />
                </div>
                <div className={styles.buttonCard}>
                    <ButtonMain
                        text="Enviar"
                        backgroundColor="#000000"
                    />
                </div>
            </div>
                <Emergency />
                <Footer />
            </div>
        </>
    )
}