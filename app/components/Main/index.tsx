import { ButtonMain } from "../UI/ButtonUi";
import SubText from "../UI/SubText";
import TitlteText from "../UI/TitleText";
import styles from "./styles.module.scss";

export default function Main() {
  return (
    <>
      <div className={styles.MainContainer}>
        <div className={styles.shadow} />
        <div className={styles.containerCenter}>
          <div className={styles.titleMain}>
            <TitlteText size="48px" weight="bold" text="Lorem ipusm" />
          </div>
          <div className={styles.subTitle}>
            <TitlteText size="24px" weight="bold" text="Centro veterinário" />
          </div>
          <div className={styles.subText}>
            <SubText size="16px" weight="400" text="Atendimento 24 horas"/>
          </div>
          <div className={styles.buttonCards}>
            <div className={styles.button}>
            <ButtonMain 
              backgroundColor="#6F4993"
              text="(51) 9XXXX-XXXX"
            />
            </div>
            <div className={styles.button}>
            <ButtonMain 
              backgroundColor="#5FBDC4"
              text="Conheça a clinica"
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
