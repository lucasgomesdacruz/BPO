import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import CardAbout from "./components/CardAbout/CardAbout";
import { PiCalculatorLight } from "react-icons/pi"
import { IoTimeOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { AiOutlineFileText } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { SlPresent } from "react-icons/sl";

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.heroBg}>
        <div className={styles.hero_container}>
          <div className={styles.hero_text}>
            <h1>Soluções completas em <span>Departamento Pessoal</span> para sua empresa</h1>
            <p>
              A Diego Consultoria oferece serviços especializados em Departamento
              Pessoal para simplificar sua rotina e garantir conformidade com a
              legislação.
            </p>

            <div className={styles.container_buttons}>
              <button className={styles.button_services}>
                Conheça nossos serviços
              </button>
              <button className={styles.button_contact}>
                Fale Conosco
              </button>
            </div>

          </div>
          <div className={styles.container_image}>
            <h1>IMAGEM</h1>
          </div>
        </div>
      </section>
      <section className={styles.servicesBg}>
        <div className={styles.services_container}>
          <h2>Soluções Completas para <span>Departamento Pessoal</span></h2>
          <h3>Oferecemos uma gama completa de serviços especializados para simplificar sua gestão de pessoas e garantir total conformidade com a legislação trabalhista.</h3>
        </div>
        <div className={styles.services_cards}>
          <CardAbout
            icon={PiCalculatorLight}
            title="Fechamento de folha de pagamento"
            text="Garantimos cálculos precisos, cumprimento de prazos e conformidade com a legislação."
          />
          <CardAbout
            icon={IoTimeOutline}
            title="Controle de ponto eletrônico"
            text="Soluções integradas para controle de jornada e banco de horas."
          />
          <CardAbout
            icon={SlPresent}
            title="Gestão e compra de benefícios"
            text="Administração estratégica de vale-transporte, alimentação, saúde e outros."
          />
          <CardAbout
            icon={RxPeople}
            title="Atendimento aos colaboradores"
            text="Canal direto para dúvidas, orientações e suporte diário."
          />
          <CardAbout
            icon={AiOutlineFileText}
            title="Envios aos órgãos fiscais" text="Transmissão segura de eventos via eSocial, FGTS Digital, Conectividade ICPv2, DCTFWeb, EFD Reinf e PerdComp Web."
          />
          <CardAbout
            icon={FiUserCheck}
            title="Admissão, rescisão, férias e 13° salário"
            text="Gestão completa do ciclo de vida do colaborador com agilidade e segurança."
          />
        </div>
        <div className={styles.services_contact}>
          <h3>Pronto para simplificar seu Departamento Pessoal?</h3>
          <p>Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com segurança e conformidade.</p>
          <button>Solicitar Orçamento</button>
        </div>
      </section>
    </>

  );
}
