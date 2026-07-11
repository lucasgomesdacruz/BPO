import Badge from "../../components/ux/Badge/Badge";
import Image from "next/image";
import logoHero from "../../../../public/images/logoHero.png";
import { LuCircleCheckBig, LuShield } from "react-icons/lu";
import { RxPeople } from "react-icons/rx";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section id="inicio" className="mx-auto flex max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div className="w-full max-w-2xl text-center lg:text-left">
                    <Badge text="Conformidade Garantida" />
                    <h1 className="mx-auto mb-6 max-w-[12ch] text-4xl font-semibold leading-17 sm:text-5xl lg:mx-0 lg:max-w-[12ch] lg:text-6xl">
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
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-11 bg-(--color-variable-primary) px-8 text-white transition-colors duration-300 hover:bg-(--color-primary)"
                        >
                            Conheça nossos serviços
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-11 border-(--color-variable-primary) px-8 text-(--color-variable-primary) transition-colors duration-300 hover:text-(--color-secodary)"
                        >
                            Fale Conosco
                        </Button>
                    </div>
                </div>
                <div className="flex w-full max-w-88 justify-center sm:max-w-104 lg:max-w-lg lg:justify-end">
                    <Image src={logoHero} alt="Logo Arqueiro" priority className="h-auto w-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;