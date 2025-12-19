import { Button } from '@/components/ui/button';
import { NavMenu } from '@/components/nav-menu';
import { NavigationSheet } from '@/components/navigation-sheet';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 w-full h-16 bg-background border-b backdrop-blur">
            <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-8">
                    {/* Desktop Menu */}
                    <NavMenu className="hidden md:block" />
                </div>

                <div className="flex items-center gap-3">
                    <Button>
                        <Link href="#contacto" className="flex items-center gap-3">
                            Contacto <ArrowUpRight />
                        </Link>
                    </Button>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <NavigationSheet />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
