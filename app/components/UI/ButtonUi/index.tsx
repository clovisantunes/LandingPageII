import styles from './styles.module.scss';

interface ButtonProps{
    text: string;
    subText: string;
}
interface ButtonMainProps{
    text: string;
    backgroundColor: string;
}

 function ButtonUi({text, subText}: ButtonProps){
    return(
        <>
        <div className={styles.buttonUi}>
            <span>{text}</span>
            <span>{subText}</span>
        </div>

        </>
    )
}
 function ButtonMain({text, backgroundColor}: ButtonMainProps){
    return(
        <>
        <div className={styles.buttonMain} style={{backgroundColor: backgroundColor}}>
            <span>{text}</span>
        </div>

        </>
    )
}


export  { ButtonMain, ButtonUi };