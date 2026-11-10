import { SlSocialLinkedin } from 'react-icons/sl'
import { FaInstagram } from 'react-icons/fa'
import { LuPhone } from 'react-icons/lu'
import { MdOutlineMail } from 'react-icons/md'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full bg-[#111827] px-4 py-12 md:py-16">
            <div className="mx-auto grid max-w-7xl gap-8 text-white md:grid-cols-2 lg:grid-cols-3 lg:text-left">
                <div className="flex flex-col items-start text-left">
                    <h2 className="mb-4 text-2xl font-bold text-white">
                        Arqueiro Departamento Pessoal
                    </h2>
                    <p className="mb-6 max-w-md text-sm leading-7 text-slate-300">
                        Soluções completas em Departamento Pessoal para sua empresa. Atuamos com ética, responsabilidade e foco em resultados.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-(--color-variable-primary) text-white transition hover:opacity-90"
                        >
                            <SlSocialLinkedin size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-(--color-variable-primary) text-white transition hover:opacity-90"
                        >
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="text-left">
                    <h2 className="mb-4 text-2xl font-bold text-white">Menu</h2>
                    <ul className="flex flex-col gap-4 text-sm text-slate-200">
                        <li><Link href="/" className="transition hover:text-white">Início</Link></li>
                        <li><Link href="/servicos" className="transition hover:text-white">Serviços</Link></li>
                        <li><Link href="/sobre" className="transition hover:text-white">Sobre</Link></li>
                        <li><Link href="/contato" className="transition hover:text-white">Contato</Link></li>
                    </ul>
                </div>

                <div className="text-left">
                    <h2 className="mb-4 text-2xl font-bold text-white">Contato</h2>
                    <ul className="flex flex-col gap-4 text-sm text-slate-200">
                        <li className="flex items-center gap-2">
                            <MdOutlineMail />
                            <a
                                href="mailto:contato@diegoconsultoria.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                contato@diegoconsultoria.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <LuPhone />
                            <a
                                href="tel:+551112345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                (11) 1234-5678
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer