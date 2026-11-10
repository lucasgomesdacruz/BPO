"use client";
import Badge from "../../components/ux/Badge/Badge";
import CardAbout from "../../components/CardAbout/CardAbout";
import { AiOutlineSafety, AiOutlineHeart, AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { VscTarget } from "react-icons/vsc";
import { FiAward } from "react-icons/fi";
import { Carousel } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
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
    <section id="sobre" className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-20 text-center sm:px-6 lg:px-8">
      <div className="mb-10 flex max-w-4xl flex-col items-center">
        <Badge text="Sobre a empresa" />
        <h3 className="mb-8 text-3xl font-bold leading-none text-slate-900 sm:text-4xl lg:text-5xl">
          Sobre a <span className="text-(--color-variable-primary)">Arqueiro Departamento</span>
        </h3>
        <p className="max-w-3xl text-base leading-8 text-(--color-tercery) sm:text-xl">
          Com experiência e dedicação, oferecemos soluções personalizadas em Departamento Pessoal para empresas de todos os portes — com ética, responsabilidade e foco em resultados.
        </p>
      </div>

      <div className="mb-8 w-full md:hidden">
        {loaded ? (
          <Carousel
            items={aboutItems}
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

      <div className="mb-8 hidden w-full gap-8 md:grid md:grid-cols-2 xl:grid-cols-4">
        {aboutItems.slice(0, 4).map((item) => (
          <CardAbout key={item.title} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>

      <div className="hidden w-full gap-8 md:grid md:grid-cols-2">
        {aboutItems.slice(4).map((item) => (
          <CardAbout key={item.title} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default About;