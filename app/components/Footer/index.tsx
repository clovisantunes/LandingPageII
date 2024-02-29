import SubText from "../UI/SubText";
import styles from "./styles.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className={styles.foooter_container}>
        <div className={styles.logoContainer}>
          <div className={styles.logoCard} />
          <div className={styles.social}>
            <CiInstagram />
            <FaYoutube />
            <FaFacebookSquare />
          </div>
        </div>
        <div className={styles.containerContainer}>
          <SubText size="36px" text="Contato" weight="600" />
          <div className={styles.contactItems}>
            <MdOutlineMailOutline />
            <SubText size="16px" text="loremipsumpet@gmail.com" weight="600" />
          </div>
          <div className={styles.contactItems}>
            <FaWhatsapp />
            <SubText size="16px" text="(51)9xxxx-xxxx" weight="600" />
          </div>
          <div className={styles.contactItems}>
            <BsFillTelephoneFill />
            <SubText size="16px" text="(51)9xxxx-xxxx" weight="600" />
          </div>
        </div>
        <div className={styles.addresContainer}>
          <SubText size="28px" text="Nosso endereço" weight="400" />
          <div className={styles.addresItems}>
            <IoLocationOutline />
            <SubText size="24px" text="Cidade-Estado, 93000-000" weight="400" />
          </div>
        </div>
        <div className={styles.hoursContainer}>
          <SubText size="24px" text="Horários de atendimento" weight="400" />
          <SubText size="16px" text="Seg a Sex: 08:30 às 18:30" weight="400" />
          <SubText size="16px" text="Sábado: 08:30 às 12:30" weight="400" />
          <SubText
            size="16px"
            text="Plantão veterinário 24 horas"
            weight="400"
          />
        </div>
      </div>
      <div className={styles.copyright}>
      <SubText
            size="16px"
            text="© LoremIpsumpet 2024. Todos os direitos reservados."
            weight="400"
          />
      </div>
    </>
  );
}
