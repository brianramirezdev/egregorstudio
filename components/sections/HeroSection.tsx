// components/sections/HeroSection.tsx
import EgregorLogo from '@/components/ui/egregor-logo';

export default function HeroSection() {
    return (
        <section id="inicio" className="relative flex min-h-screen items-center justify-center bg-black text-white">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <EgregorLogo className="mx-auto mb-12 h-24 w-24" />

                <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                    Branding, Web <br /> y Marketing Digital
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-300">
                    Creamos marcas con estrategia, coherencia y emoción. Diseñamos y desarrollamos experiencias digitales con criterio.
                </p>
            </div>
        </section>
    );
}
