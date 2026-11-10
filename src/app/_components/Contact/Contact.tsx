"use client";
import Badge from "../../components/ux/Badge/Badge";
import CardAbout from "../../components/CardAbout/CardAbout";
import { LuPhone, LuCircleCheckBig } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Carousel } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
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
    <section id="contato" className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-20 text-center sm:px-6 lg:px-8">
      <div className="mb-10 max-w-4xl">
        <Badge text="Entre em Contato" />
        <h3 className="mb-8 text-3xl font-bold leading-none text-slate-900 sm:text-4xl lg:text-5xl">Fale com a gente</h3>
        <p className="text-base leading-8 text-(--color-tercery) sm:text-xl">
          Escolha o canal que preferir e entre em contato conosco. Estamos prontos para ajudar sua empresa!
        </p>
      </div>

      <div className="mb-8 w-full md:hidden">
        {loaded ? (
          <Carousel
            items={contactItems}
            itemTemplate={itemTemplate}
            showIndicators
          />
        ) : (
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
        )}
      </div>

      <div className="mb-8 hidden w-full gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
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

      <div className="grid w-full gap-6 rounded-lg bg-(--color-variable-primary) p-6 text-left text-white md:grid-cols-2 md:p-10">
        <div>
          <h3 className="text-2xl font-bold leading-9 text-white md:text-3xl">Por que escolher a Arqueiro Departamento?</h3>
          <p className="mt-3 text-sm leading-7 text-white/90 md:text-base">
            Somos referência em soluções de Departamento Pessoal, oferecendo excelência e confiança para sua empresa.
          </p>
        </div>
        <ul className="flex flex-col gap-3 text-sm text-white md:text-base">
          <li className="flex items-center gap-3"><LuCircleCheckBig size={20} /> Atendimento personalizado</li>
          <li className="flex items-center gap-3"><LuCircleCheckBig size={20} /> Tecnologia avançada e segura</li>
          <li className="flex items-center gap-3"><LuCircleCheckBig size={20} /> Equipe qualificada e experiente</li>
          <li className="flex items-center gap-3"><LuCircleCheckBig size={20} /> Conformidade total garantida</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;