import styles from './styles.module.scss';

export default function NavList() {
    return (
        <>
            <div className={styles.navList}>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/aboutUs">Quem Somos</a></li>
                    <li><a href="/#">Especialidades</a></li>
                    <li><a href="/#">Serviço</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </div>
        </>
    )
}
