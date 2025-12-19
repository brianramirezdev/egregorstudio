import LogoLoop from '../logo-loop';
import ModelViewer from '../model-viewer';
import RotatingText from '../rotating-text';

import { SiNextdotjs, SiReact, SiAstro, SiTailwindcss, SiLaravel, SiStripe, SiVercel, SiFigma, SiCloudflare } from '@icons-pack/react-simple-icons';

const allLogos = [
    { node: <SiNextdotjs size={36} title="Next.js" /> },
    { node: <SiReact size={36} title="React" /> },
    { node: <SiAstro size={36} title="Astro" /> },
    { node: <SiTailwindcss size={36} title="Tailwind CSS" /> },
    { node: <SiLaravel size={36} title="Laravel" /> },
    { node: <SiStripe size={36} title="Stripe" /> },
    { node: <SiVercel size={36} title="Vercel" /> },
    { node: <SiCloudflare size={36} title="Cloudflare" /> },
    { node: <SiFigma size={36} title="Figma" /> },
];

export default function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-screen bg-radial from-zinc-800 via-zinc-900 to-black text-white overflow-hidden">
            {/* LOGO 3D MOBILE / TABLET */}
            <div className="absolute inset-x-0 top-100 sm:top-100 md:top-1/2 -translate-y-[90%] flex justify-center pointer-events-none lg:hidden">
                <div className="w-65 sm:w-90 md:w-100 h-75 sm:h-90 md:h-100">
                    <ModelViewer url="/models/egregor_logo.glb" width="100%" height="100%" />
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-10 mx-auto pt-50 lg:pt-0 max-w-7xl px-6 min-h-screen flex items-center">
                <div className="w-full grid lg:grid-cols-2 items-center gap-12">
                    {/* TEXT */}
                    <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h1 className="flex flex-col items-center text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                            <RotatingText
                                texts={['Branding', 'Web', 'Marketing', 'Estrategia']}
                                rotationInterval={2600}
                                staggerDuration={0.03}
                                splitBy="characters"
                                mainClassName="block"
                                elementLevelClassName="inline-block"
                            />
                            <span className="block">con criterio</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-400">
                            Construimos marcas con estrategia, coherencia y emoción.
                            <br />
                            Diseñamos experiencias digitales con criterio.
                        </p>
                    </div>

                    {/* LOGO DESKTOP */}
                    <div className="hidden lg:flex items-center justify-center pointer-events-none">
                        <div className="w-full max-w-140 h-140">
                            <ModelViewer url="/models/egregor_logo.glb" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </div>
            {/* LOGO LOOP */}
            <div
                className="
                    hero-logos
                    absolute bottom-16 md:bottom-24 left-1/2 -translate-x-1/2
                    w-full max-w-7xl
                    z-10 opacity-95
                "
            >
                <LogoLoop logos={allLogos} speed={30} gap={40} scaleOnHover pauseOnHover />
            </div>
        </section>
    );
}
