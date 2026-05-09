import { SlSocialLinkedin } from 'react-icons/sl'
import styles from './Footer.module.scss'
import { FaInstagram } from 'react-icons/fa'
import { LuPhone } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'

const Footer = () => {

    return (
        <div className={styles.footer_bg}>
            <div className={styles.footer_container}>
                <div className={styles.footer_info}>
                    <h2>
                        Arqueiro Departamento Pessoal
                    </h2>
                    <p>
                        Soluções completas em Departamento Pessoal para sua empresa. Atuamos com ética, responsabilidade e foco em resultados.
                    </p>
                    <div className={styles.footerRedes}>
                        <a href="">
                            <SlSocialLinkedin size={20} />
                        </a>
                        <a href="">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
                <div className={styles.footer_sections}>
                    <h2>Menu</h2>
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div className={styles.footer_contact}>
                    <h2>Contato</h2>
                    <ul>
                        <li>
                            <MdOutlineMail />
                            <a
                                href="mailto:contato@diegoconsultoria.com">contato@diegoconsultoria.com
                            </a>
                        </li>
                        <li>
                            <LuPhone />
                            <a
                                href="tel:+551112345678">(11) 1234-5678
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Footer