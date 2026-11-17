import Badge from "../../components/ux/Badge/Badge";
import Image from "next/image";
import logoHero from "../../../../public/images/logoHero.png";
import { LuCircleCheckBig, LuShield } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
const Hero = () => {
    return (
        <section id="inicio" className="mx-auto flex max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div className="w-full max-w-2xl">
                    <Badge text="Conformidade Garantida" />
                    <h1 className="mb-6 max-w-[12ch] lg:max-w-[12ch] md:max-w-[16ch] font-semibold lg:text-left md:text-center text-left lg:leading-17 md:leading-17 leading-12 lg:text-6xl md:text-6xl text-5xl">
                        Soluções completas em <span className="text-(--color-variable-primary)">Departamento Pessoal</span> para sua empresa
                    </h1>
                    <p className="mx-auto mb-6 max-w-[45ch] text-base leading-7 text-(--color-tercery) sm:text-lg lg:mx-0">
                        A aqueiro departamento pessoal oferece serviços especializados em
                        Departamento Pessoal para simplificar sua rotina e garantir
                        conformidade com a legislação.
                    </p>
                    <div className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                        <span className="flex items-center gap-1 font-normal text-(--color-tercery)">
                            <LuCircleCheckBig size={20} className="text-(--color-variable-primary)" /> 100% Conformidade
                        </span>
                        <span className="flex items-center gap-1 font-normal text-(--color-tercery)">
                            <RxPeople size={20} className="text-(--color-variable-primary)" /> Suporte Dedicado
                        </span>
                        <span className="flex items-center gap-1 font-normal text-(--color-tercery)">
                            <LuShield size={20} className="text-(--color-variable-primary)" /> Segurança Total
                        </span>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <a
                            href="/#servicos"
                            className="inline-flex h-11 items-center justify-center rounded-md bg-[#006a6a] px-8 text-base text-white transition-colors duration-300 hover:bg-[#003737] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006a6a]"
                        >
                            Conheça nossos serviços
                        </a>
                        <a
                            href="https://wa.me/5521969538015"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-11 items-center justify-center rounded-md border border-[#006a6a] px-8 text-base text-[#006a6a] transition-colors duration-300 hover:bg-[#006a6a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#006a6a]"
                        >
                            Fale Conosco
                        </a>
                    </div>
                </div>
                <div className="hidden w-full max-w-lg lg:flex lg:justify-end">
                    <Image
                        src={logoHero}
                        alt="Logo Arqueiro"
                        priority
                        className="h-auto w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;