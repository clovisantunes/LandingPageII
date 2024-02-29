import AboutMain from "../components/AboutMain";
import AboutSubText from "../components/AboutSubText";
import Emergency from "../components/Emergency";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import SessionAbout from "../components/SessionAbout";
import styles from './styles.module.scss';

export default function AboutUs(){
    return(
        <>
        <NavBar />
            <div className={styles.about_container}>
                <AboutMain 
                    text="Sobre nós"
                    urlImage="../assets/dogAbout.png"
                />
                <SessionAbout />
                <AboutSubText />
                <Emergency />
                <Footer />
            </div>
        </>
    )
}