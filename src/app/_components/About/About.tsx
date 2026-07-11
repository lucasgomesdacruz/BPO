"use client";
import styles from "./About.module.scss";
import Badge from "../../components/ux/Badge/Badge";
import CardAbout from "../../components/CardAbout/CardAbout";
import { AiOutlineSafety, AiOutlineHeart, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { VscTarget } from "react-icons/vsc";
import { FiAward } from "react-icons/fi";
import { Carousel } from "primereact/carousel";
import { Skeleton } from "primereact/skeleton";
import { useEffect, useState } from "react";

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const aboutItems = [
    {
      icon: AiOutlineSafety,
      title: "Ética",
      text: "Transparência e integridade em todos os processos.",
    },
    {
      icon: VscTarget,
      title: "Responsabilidade",
      text: "Comprometidos com resultados e prazos.",
    },
    {
      icon: AiOutlineHeart,
      title: "Compromisso Humano",
      text: "Valorizamos o aspecto humano nas relações de trabalho.",
    },
    {
      icon: FiAward,
      title: "Excelência Técnica",
      text: "Conhecimento atualizado em legislação trabalhista.",
    },
    {
      icon: AiOutlineStar,
      title: "Missão",
      text: "Oferecer soluções completas e personalizadas em Departamento Pessoal, garantindo conformidade legal, eficiência operacional e tranquilidade para que nossos clientes possam focar no crescimento de seus negócios.",
    },
    {
      icon: AiOutlineEye,
      title: "Visão",
      text: "Ser referência em consultoria de Departamento Pessoal, reconhecida pela excelência técnica, atendimento humanizado e pela construção de relações de confiança duradouras com nossos clientes.",
    },
  ];

  const itemTemplate = (item: { icon: React.ElementType; title: string; text: string }) => (
    <div className="mb-2">
      <CardAbout icon={item.icon} title={item.title} text={item.text} />
    </div>
  );

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
      <div className={styles.mobileCarousel}>
        {loaded ? (
          <Carousel
            value={aboutItems}
            itemTemplate={itemTemplate}
            numVisible={1}
            numScroll={1}
            showIndicators
          />
        ) : (
          <div className={styles.skeletonCard}>
            <Skeleton shape="circle" size="3.5rem" />
            <Skeleton width="70%" height="2rem" />
            <Skeleton width="100%" height="1rem" />
            <Skeleton width="90%" height="1rem" />
            <Skeleton width="80%" height="1rem" />
            <div className={styles.skeletonIndicators}>
              <Skeleton shape="circle" size="0.8rem" />
              <Skeleton shape="circle" size="0.8rem" />
              <Skeleton shape="circle" size="0.8rem" />
            </div>
          </div>
        )}
      </div>
      <div className={styles.about_cards}>
        {aboutItems.slice(0, 4).map((item) => (
          <CardAbout key={item.title} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
      <div className={styles.about_cards_secondary}>
        {aboutItems.slice(4).map((item) => (
          <CardAbout key={item.title} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default About;