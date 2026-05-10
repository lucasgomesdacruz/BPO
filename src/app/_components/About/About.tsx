import styles from "./About.module.scss";
import Badge from "../../components/ux/Badge/Badge";
import CardAbout from "../../components/CardAbout/CardAbout";
import { AiOutlineSafety, AiOutlineHeart, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { VscTarget } from "react-icons/vsc";
import { FiAward } from "react-icons/fi";

const About = () => {
  return (
    <section id="sobre" className={styles.aboutBg}>
      <div className={styles.about_container}>
        <Badge text="Sobre a empresa" />
        <h3>
          Sobre a <span>Arqueiro Departamento</span>
        </h3>
        <p>
          Com experiência e dedicação, oferecemos soluções personalizadas em Departamento Pessoal para empresas de todos os portes — com ética, responsabilidade e foco em resultados.
        </p>
      </div>
      <div className={styles.about_cards}>
        <CardAbout
          icon={AiOutlineSafety}
          title="Ética"
          text="Transparência e integridade em todos os processos."
        />
        <CardAbout
          icon={VscTarget}
          title="Responsabilidade"
          text="Comprometidos com resultados e prazos."
        />
        <CardAbout
          icon={AiOutlineHeart}
          title="Compromisso Humano"
          text="Valorizamos o aspecto humano nas relações de trabalho."
        />
        <CardAbout
          icon={FiAward}
          title="Excelência Técnica"
          text="Conhecimento atualizado em legislação trabalhista."
        />
      </div>
      <div className={styles.about_cards_secondary}>
        <CardAbout
          icon={AiOutlineStar}
          title="Missão"
          text="Oferecer soluções completas e personalizadas em Departamento Pessoal, garantindo conformidade legal, eficiência operacional e tranquilidade para que nossos clientes possam focar no crescimento de seus negócios."
        />
        <CardAbout
          icon={AiOutlineEye}
          title="Visão"
          text="Ser referência em consultoria de Departamento Pessoal, reconhecida pela excelência técnica, atendimento humanizado e pela construção de relações de confiança duradouras com nossos clientes."
        />
      </div>
    </section>
  );
};

export default About;