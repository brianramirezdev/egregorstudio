'use client';

import Link from 'next/link';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import EgregorLogo from '@/components/ui/egregor-logo';

const links = [
    ['INICIO', '#inicio'],
    ['SERVICIOS', '#servicios'],
    ['PORTFOLIO', '#portfolio'],
    ['PROCESO', '#proceso'],
    ['CLIENTES', '#clientes'],
    ['NOSOTROS', '#nosotros'],
    ['CONTACTO', '#contacto'],
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-black/40 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                {/* Logo (opcional, discreto) */}
                <div className="flex items-center gap-2">
                    <EgregorLogo className="h-6 w-6 text-white/80" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map(([label, href]) => (
                        <Link key={label} href={href} className="text-xs tracking-[0.25em] text-white/70 transition-colors hover:text-white">
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <button aria-label="Abrir menú">
                            <Menu className="h-5 w-5 text-white" />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-full max-w-sm bg-black p-8">
                        <SheetTitle className="sr-only">Menú de navegación</SheetTitle>

                        {/* Mobile Header */}
                        <div className="mb-10 flex items-center gap-3">
                            <EgregorLogo className="h-8 w-8 text-white" />
                            <span className="text-lg font-semibold text-white">Egregor</span>
                        </div>

                        {/* Mobile Links */}
                        <nav className="flex flex-col gap-6">
                            {links.map(([label, href]) => (
                                <Link key={label} href={href} onClick={handleLinkClick} className="text-2xl font-medium text-white/80 transition-colors hover:text-white">
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
