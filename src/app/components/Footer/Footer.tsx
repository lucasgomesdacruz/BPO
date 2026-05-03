import styles from './Footer.module.scss'

const Footer = () => {

    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_info}>
                <h3>
                    Diego Consultoria
                </h3>
                <p>
                    Soluções completas em Departamento Pessoal para sua empresa. Atuamos com ética, responsabilidade e foco em resultados.
                </p>
            </div>
            <div>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div>
                <p>Contato</p>
                <ul>
                    <li><a href="mailto:contato@diegoconsultoria.com">contato@diegoconsultoria.com</a></li>
                    <li><a href="tel:+551112345678">(11) 1234-5678</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Footer