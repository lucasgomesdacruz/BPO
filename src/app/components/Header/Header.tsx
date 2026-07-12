"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import useWindowSize from "@/app/hooks/useWindow";

const Header = () => {
    const [open, setOpen] = useState(false);
    const { width } = useWindowSize();

    const closeMenu = () => setOpen(false);

    useEffect(() => {
        if (width && width >= 768) {
            closeMenu();
        }
    }, [width]);

    return (
        <header className="w-ful">
            <div className="mx-auto flex max-w-7xl items-center justify-between h-20">
                <div className="flex items-center gap-3 md:gap-6">
                    <Link href="/" aria-label="Home" className="block">
                        <Image
                            src="/images/logoHero.png"
                            alt="Logo Arqueiro"
                            width={180}
                            height={62}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop / tablet nav: visible from md and up */}
                <nav className="hidden items-center gap-6 md:flex">
                    <Link href="/" className="text-base font-medium text-(--color-secodary) hover:text-(--color-primary)">Início</Link>
                    <Link href="/servicos" className="text-base font-medium text-(--color-secodary) hover:text-(--color-primary)">Serviços</Link>
                    <Link href="/sobre" className="text-base font-medium text-(--color-secodary) hover:text-(--color-primary)">Sobre</Link>
                    <Link href="/contato" className="text-base font-medium text-(--color-secodary) hover:text-(--color-primary)">Contato</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/contato"
                        className="hidden rounded-md px-3 py-2 text-sm font-medium text-white bg-(--color-variable-primary) hover:opacity-95 md:inline-flex">
                        Fale Conosco
                    </Link>

                    {/* Mobile sheet trigger */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger>
                            <button aria-label="Abrir menu" className="inline-flex items-center rounded-md p-2 text-2xl md:hidden">
                                <FaBars />
                            </button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-full sm:max-w-sm md:max-w-md">
                            <ul className="flex justify-center h-full text-center flex-col gap-5">
                                <li>
                                    <Link href="/" onClick={closeMenu} className="block text-lg font-medium text-(--color-secodary)">Início</Link>
                                </li>
                                <li>
                                    <Link href="/servicos" onClick={closeMenu} className="block text-lg font-medium text-(--color-secodary)">Serviços</Link>
                                </li>
                                <li>
                                    <Link href="/sobre" onClick={closeMenu} className="block text-lg font-medium text-(--color-secodary)">Sobre</Link>
                                </li>
                                <li>
                                    <Link href="/contato" onClick={closeMenu} className="block text-lg font-medium text-(--color-secodary)">Contato</Link>
                                </li>
                            </ul>

                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
