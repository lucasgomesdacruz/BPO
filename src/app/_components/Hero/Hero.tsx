import styles from "./Hero.module.scss";
import Badge from "../../components/ux/Badge/Badge";
import Image from "next/image";
import logoHero from "../../../../public/images/logoHero.png";
import { LuCircleCheckBig, LuShield } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";

const Hero = () => {
    return (
        <section id="inicio" className={styles.heroBg}>
            <div className={styles.hero_container}>
                <div className={styles.hero_text}>
                    <Badge text="Conformidade Garantida" />
                    <h1>
                        Soluções completas em <span>Departamento Pessoal</span> para sua empresa
                    </h1>
                    <p>
                        A aqueiro departamento pessoal oferece serviços especializados em
                        Departamento Pessoal para simplificar sua rotina e garantir
                        conformidade com a legislação.
                    </p>
                    <div className={styles.hero_spans}>
                        <span>
                            <LuCircleCheckBig size={20} /> 100% Conformidade
                        </span>
                        <span>
                            <RxPeople size={20} /> Suporte Dedicado
                        </span>
                        <span>
                            <LuShield size={20} /> Segurança Total
                        </span>
                    </div>

                    <div className={styles.container_buttons}>
                        <button className={styles.button_services}>Conheça nossos serviços</button>
                        <button className={styles.button_contact}>Fale Conosco</button>
                    </div>
                </div>
                <div className={styles.container_image}>
                    <Image src={logoHero} alt="Logo Arqueiro" priority />
                </div>
            </div>
        </section>
    );
};

export default Hero;