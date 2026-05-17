"use client";
import styles from "./Services.module.scss";
import Badge from "../../components/ux/Badge/Badge";
import CardAbout from "../../components/CardAbout/CardAbout";
import { PiCalculatorLight } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { AiOutlineFileText } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { SlPresent } from "react-icons/sl";
import useWindowSize from "@/app/hooks/useWindow";
import { Carousel } from "primereact/carousel";
import { useEffect, useState } from "react";
import { Skeleton } from "primereact/skeleton";


const Services = () => {
  const size = useWindowSize()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  // const isSmallScreen = typeof size.width === "number" && size.width <= 720

  const services = [
    {
      icon: PiCalculatorLight,
      title: "Fechamento de folha de pagamento",
      text: "Garantimos cálculos precisos, cumprimento de prazos e conformidade com a legislação.",
    },
    {
      icon: IoTimeOutline,
      title: "Controle de ponto eletrônico",
      text: "Soluções integradas para controle de jornada e banco de horas.",
    },
    {
      icon: SlPresent,
      title: "Gestão e compra de benefícios",
      text: "Administração estratégica de vale-transporte, alimentação, saúde e outros.",
    },
    {
      icon: RxPeople,
      title: "Atendimento aos colaboradores",
      text: "Canal direto para dúvidas, orientações e suporte diário.",
    },
    {
      icon: AiOutlineFileText,
      title: "Envios aos órgãos fiscais",
      text: "Transmissão segura de eventos via eSocial, FGTS Digital, Conectividade ICPv2, DCTFWeb, EFD Reinf e PerdComp Web.",
    },
    {
      icon: FiUserCheck,
      title: "Admissão, rescisão, férias e 13° salário",
      text: "Gestão completa do ciclo de vida do colaborador com agilidade e segurança.",
    },
  ]

  const itemTemplate = (item: { icon: React.ElementType; title: string; text: string }) => (
    <div className="mb-2">
      <CardAbout icon={item.icon} title={item.title} text={item.text} />
    </div>
  )

  return (
    <section id="servicos" className={styles.servicesBg}>
      <div className={styles.services_container}>
        <Badge text="Nossos Serviços" />
        <h2>
          Soluções Completas para <span>Departamento Pessoal</span>
        </h2>
        <h3>
          Oferecemos uma gama completa de serviços especializados para simplificar sua gestão de pessoas e garantir total conformidade com a legislação trabalhista.
        </h3>
      </div>
      <div className={styles.mobileCarousel}>
        {!loaded ? (
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
        ) : (
          <Carousel
            value={services}
            itemTemplate={itemTemplate}
            numVisible={1}
            numScroll={1}
            showIndicators
          />
        )}
      </div>
      <div className={styles.services_cards}>
        {services.map((s) => (
          <CardAbout key={s.title} icon={s.icon} title={s.title} text={s.text} />
        ))}
      </div>
      <div className={styles.services_contact}>
        <h3>Pronto para simplificar seu Departamento Pessoal?</h3>
        <p>
          Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com segurança e conformidade.
        </p>
        <button>Solicitar Orçamento</button>
      </div>
    </section>
  );
};

export default Services;