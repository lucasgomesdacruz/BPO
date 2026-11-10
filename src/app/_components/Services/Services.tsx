"use client";
import Badge from "../../components/ux/Badge/Badge";
import CardAbout from "../../components/CardAbout/CardAbout";
import { PiCalculatorLight } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { AiOutlineFileText } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { SlPresent } from "react-icons/sl";
import { Carousel } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Services = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
  ];

  const itemTemplate = (item: { icon: React.ElementType; title: string; text: string }) => (
    <div className="mb-2">
      <CardAbout icon={item.icon} title={item.title} text={item.text} />
    </div>
  );

  return (
    <section id="servicos" className="mx-auto mt-8 flex max-w-7xl flex-col items-center px-4 pb-20 pt-20 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-4xl text-center">
        <Badge text="Nossos Serviços" />
        <h2 className="mb-8 text-3xl font-bold leading-none text-slate-900 sm:text-4xl lg:text-5xl">
          Soluções Completas para <span className="text-(--color-variable-primary)">Departamento Pessoal</span>
        </h2>
        <h3 className="text-base font-medium leading-8 text-(--color-tercery) sm:text-xl">
          Oferecemos uma gama completa de serviços especializados para simplificar sua gestão de pessoas e garantir total conformidade com a legislação trabalhista.
        </h3>
      </div>

      <div className="mb-8 w-full md:hidden">
        {!loaded ? (
          <div className="flex min-h-[280px] w-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8">
            <Skeleton className="h-14 w-14 rounded-full" />
            <Skeleton className="h-8 w-[70%]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
            <div className="mt-auto flex justify-center gap-2">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-3 w-3 rounded-full" />
            </div>
          </div>
        ) : (
          <Carousel items={services} itemTemplate={itemTemplate} showIndicators />
        )}
      </div>

      <div className="mb-8 hidden w-full gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
        {services.map((s) => (
          <CardAbout key={s.title} icon={s.icon} title={s.title} text={s.text} />
        ))}
      </div>

      <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-(--color-variable-primary) p-6 text-center text-white md:p-10 lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold leading-9 text-white md:text-3xl">Pronto para simplificar seu Departamento Pessoal?</h3>
          <p className="mt-3 text-base leading-7 text-white/90 md:text-lg">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com segurança e conformidade.
          </p>
        </div>
        <button className="flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-medium text-(--color-variable-primary) transition-transform duration-300 hover:scale-[1.03]">
          Solicitar Orçamento
        </button>
      </div>
    </section>
  );
};

export default Services;