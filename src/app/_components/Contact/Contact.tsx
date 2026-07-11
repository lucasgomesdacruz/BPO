"use client";
import styles from "./Contact.module.scss";
import Badge from "../../components/ux/Badge/Badge";
import CardAbout from "../../components/CardAbout/CardAbout";
import { LuPhone, LuCircleCheckBig } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Carousel } from "primereact/carousel";
import { Skeleton } from "primereact/skeleton";
import { useEffect, useState } from "react";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const contactItems = [
    {
      icon: LuPhone,
      title: "Telefone",
      text: "(00) 00000-0000.",
      subText: "Seg à Sex, 8h às 18h",
      buttonText: "Ligar Agora",
    },
    {
      icon: FaRegComment,
      title: "WhatsApp",
      text: "(00) 00000-0000",
      subText: "Atendimento rápido",
      buttonText: "Enviar mensagem",
    },
    {
      icon: MdOutlineMail,
      title: "E-mail",
      text: "contato@diegoconsultoria.com.br",
      subText: "Resposta em até 24h",
      buttonText: "Enviar e-mail",
    },
  ];

  const itemTemplate = (item: {
    icon: React.ElementType;
    title: string;
    text: string;
    subText: string;
    buttonText: string;
  }) => (
    <div className="mb-2">
      <CardAbout
        icon={item.icon}
        title={item.title}
        text={item.text}
        subText={item.subText}
        buttonText={item.buttonText}
      />
    </div>
  );
  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.contact_container}>
        <Badge text="Entre em Contato" />
        <h3>Fale com a gente</h3>
        <p>
          Escolha o canal que preferir e entre em contato conosco. Estamos prontos para ajudar sua empresa!
        </p>
      </div>
      <div className={styles.mobileCarousel}>
        {loaded ? (
          <Carousel
            value={contactItems}
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
      <div className={styles.contact_cards}>
        {contactItems.map((item) => (
          <CardAbout
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
            subText={item.subText}
            buttonText={item.buttonText}
          />
        ))}
      </div>
      <div className={styles.services_contact}>
        <div>
          <h3>Por que escolher a Arqueiro Departamento?</h3>
          <p>
            Somos referência em soluções de Departamento Pessoal, oferecendo excelência e confiança para sua empresa.
          </p>
        </div>
        <ul>
          <li>
            <LuCircleCheckBig size={20} />
            Atendimento personalizado
          </li>
          <li>
            <LuCircleCheckBig size={20} />
            Tecnologia avançada e segura
          </li>
          <li>
            <LuCircleCheckBig size={20} />
            Equipe qualificada e experiente
          </li>
          <li>
            <LuCircleCheckBig size={20} />
            Conformidade total garantida
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;