import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import CardAbout from "./components/CardAbout/CardAbout";
import { PiCalculatorLight } from "react-icons/pi"
import { IoTimeOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { AiOutlineFileText, AiOutlineHeart, AiOutlineSafety } from "react-icons/ai";
import { FiAward, FiUserCheck } from "react-icons/fi";
import { SlPresent } from "react-icons/sl";
import { VscTarget } from "react-icons/vsc";
import { LuPhone } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Badge from "./components/ux/Badge/Badge";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.heroBg}>
        <div className={styles.hero_container}>
          <div className={styles.hero_text}>
            <Badge
              text="Conformidade Garantida"
            />
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
          <Badge
            text="Nossos Serviços"
          />
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
      <section className={styles.aboutBg}>
        <div className={styles.about_container}>
          <Badge
            text="Sobre a empresa"
          />
          <h3>Sobre a <span>Diego Consultoria</span></h3>
          <p>Com experiência e dedicação, oferecemos soluções personalizadas em Departamento Pessoal para empresas de todos os portes — com ética, responsabilidade e foco em resultados.</p>
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
      </section>
      <section className={styles.contact}>
        <div className={styles.contact_container}>
          <Badge
            text="Entre em Contato"
          />
          <h3>Fale com a gente</h3>
          <p>Escolha o canal que preferir e entre em contato conosco. Estamos prontos para ajudar sua empresa!</p>
        </div>
        <div className={styles.contact_cards}>
          <CardAbout
            icon={LuPhone}
            title="Telefone"
            text="(00) 00000-0000."
            subText="Seg à Sex, 8h às 18h"
            buttonText="Ligar Agora"
          />
          <CardAbout
            icon={FaRegComment}
            title="WhatsApp"
            text="(00) 00000-0000"
            subText="Atendimento rápido"
            buttonText="Enviar mensagem"
          />
          <CardAbout
            icon={MdOutlineMail}
            title="E-mail"
            text="contato@diegoconsultoria.com.br"
            subText="Resposta em até 24h"
            buttonText="Enviar e-mail"
          />
        </div>
      </section>
      <Footer />
    </>

  );
}
