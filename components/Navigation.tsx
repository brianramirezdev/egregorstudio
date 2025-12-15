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
        <nav className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
            <div className="mx-auto flex max-w-7xl items-center lg:justify-center px-6 py-4 lg:px-8">
                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {links.map(([label, href]) => (
                        <Link key={label} href={href} className="text-sm font-medium transition-colors hover:text-blue-500">
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden ml-auto">
                        <button aria-label="Abrir menú">
                            <Menu className="h-5 w-5" />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-full max-w-sm p-6">
                        <SheetTitle className="sr-only">Menú de navegación</SheetTitle>

                        {/* Mobile Header */}
                        <div className="mb-8 flex items-center gap-3 border-b border-black/10 pb-6 dark:border-white/10">
                            <EgregorLogo className="h-8 w-8 text-blue-500" />
                            <span className="text-lg font-semibold">Egregor Studio</span>
                        </div>

                        {/* Mobile Links */}
                        <nav className="flex flex-col">
                            {links.map(([label, href]) => (
                                <Link
                                    key={label}
                                    href={href}
                                    onClick={handleLinkClick}
                                    className="flex items-center justify-between border-b border-black/10 py-4 text-lg transition-colors hover:text-blue-500 dark:border-white/10"
                                >
                                    <span>{label}</span>
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
