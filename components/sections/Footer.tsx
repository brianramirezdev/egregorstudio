import { SiInstagram } from '@icons-pack/react-simple-icons';
import EgregorLogo from '../ui/egregor-logo';

const navigation = [
    ['Inicio', '#inicio'],
    ['Servicios', '#servicios'],
    ['Portfolio', '#portfolio'],
    ['Proceso', '#proceso'],
    ['Nosotros', '#nosotros'],
    ['Contacto', '#contacto'],
];

export default function Footer() {
    return (
        <footer className="relative bg-black px-6 py-24 text-white min-h-screen flex items-center">
            <div className="mx-auto max-w-7xl">
                {/* Main content */}
                <div className="grid gap-16 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-6">
                        <EgregorLogo className="h-12 w-12" />
                        <h3 className="text-3xl font-bold">Egregor Studio</h3>
                        <p className="max-w-sm leading-relaxed text-gray-400">
                            Estudio creativo especializado en branding, web y marketing digital. Construimos marcas con criterio, coherencia y emoción.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">Navegación</h4>
                        <nav className="flex flex-col gap-3">
                            {navigation.map(([label, href]) => (
                                <a key={label} href={href} className="group inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-blue-400">
                                    <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-4" />
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">Contacto</h4>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="group">
                                <a href="mailto:hello@egregor.studio" className="block text-lg font-medium text-gray-300 transition-colors hover:text-blue-400">
                                    hello@egregor.studio
                                </a>
                                <div className="mt-2 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                            </div>

                            {/* Social */}
                            <a
                                href="https://www.instagram.com/egregor.studio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all hover:border-blue-400 hover:bg-blue-400/10"
                            >
                                <SiInstagram className="h-5 w-5 text-gray-400 transition-colors group-hover:text-blue-400" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-sm text-gray-500 md:flex-row">
                    <p>© {new Date().getFullYear()} Egregor Studio. Todos los derechos reservados.</p>

                    <div className="flex items-center gap-3">
                        <span className="h-1 w-1 rounded-full bg-gray-600" />
                        <span>Branding</span>
                        <span className="h-1 w-1 rounded-full bg-gray-600" />
                        <span>Web</span>
                        <span className="h-1 w-1 rounded-full bg-gray-600" />
                        <span>Marketing Digital</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
