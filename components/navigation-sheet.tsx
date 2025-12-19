import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import EgregorLogo from './ui/egregor-logo';

const links = [
    ['INICIO', '#inicio'],
    ['SERVICIOS', '#servicios'],
    ['PORTFOLIO', '#portfolio'],
    ['PROCESO', '#proceso'],
    ['CLIENTES', '#clientes'],
    ['NOSOTROS', '#nosotros'],
    ['CONTACTO', '#contacto'],
];

export const NavigationSheet = () => {
    return (
        <Sheet>
            <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
            </VisuallyHidden>

            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu />
                </Button>
            </SheetTrigger>

            <SheetContent className="px-6 py-3">
                {/* LOGO */}
                <EgregorLogo className="h-6 w-6" />

                {/* LINKS */}
                <nav className="mt-12 text-base space-y-4">
                    {links.map(([label, href]) => (
                        <Link key={label} href={href} className="block">
                            {label}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};
