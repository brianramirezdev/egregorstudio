// components/sections/PortfolioSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="bg-black py-32 text-white">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20 flex items-end justify-between">
                    <h2 className="text-4xl font-bold md:text-6xl">Portfolio</h2>

                    <span className="text-sm text-gray-400">Proyecto destacado</span>
                </div>

                {/* Featured Project */}
                <Link href="https://totisanz.com" target="_blank" className="group block">
                    <div className="grid gap-12 md:grid-cols-2 md:items-center">
                        {/* Image */}
                        <div className="relative aspect-4/3 overflow-hidden bg-neutral-900">
                            <Image
                                src="https://totisanz.com/images/og-image.jpg"
                                alt="Toti Sanz — Web & Branding"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <p className="mb-4 text-sm uppercase tracking-widest text-blue-500">Branding · Web · Marketing Digital</p>

                            <h3 className="mb-6 text-3xl font-semibold md:text-4xl">Toti Sanz</h3>

                            <p className="mb-8 max-w-md text-gray-300">
                                Desarrollo de identidad digital para un artista musical. Estrategia, diseño y ejecución con una visión clara de marca.
                            </p>

                            <span className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-blue-500">
                                Ver proyecto
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}
