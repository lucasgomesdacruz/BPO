import styles from "./page.module.scss";
import Header from "./components/Header/Header";

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
    </>

  );
}
