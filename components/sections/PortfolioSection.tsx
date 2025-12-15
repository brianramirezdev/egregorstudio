import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="bg-black py-32 text-white">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <h2 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">Portfolio</h2>
                </div>

                {/* Featured Project */}
                <a href="https://totisanz.com" target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="grid gap-16 lg:grid-cols-5 lg:items-center">
                        {/* Image */}
                        <div className="lg:col-span-3">
                            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-neutral-900">
                                <Image
                                    src="/totisanz.avif"
                                    alt="Toti Sanz – Web & Branding"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-br from-blue-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Corner icon */}
                                <div className="absolute right-6 top-6 flex h-16 w-16 scale-90 items-center justify-center rounded-full bg-blue-500/20 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                                    <ExternalLink className="h-8 w-8 text-white" strokeWidth={1.5} />
                                </div>

                                {/* Border */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-white/5 transition-colors duration-500 group-hover:border-blue-500/30" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-2">
                            <div className="space-y-6">
                                {/* Tags */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-blue-400">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    Branding · Web · Marketing
                                </div>

                                {/* Title */}
                                <h3 className="text-4xl font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-400 md:text-5xl lg:text-6xl">Toti Sanz</h3>

                                {/* Description */}
                                <p className="text-lg leading-relaxed text-gray-400">
                                    Desarrollo de identidad digital para un artista musical. Estrategia, diseño y ejecución con una visión clara de marca.
                                </p>

                                {/* CTA */}
                                <div className="flex items-center gap-3 pt-4">
                                    <span className="text-sm font-medium uppercase tracking-wider transition-colors group-hover:text-blue-400">Ver proyecto</span>
                                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400" />
                                </div>

                                {/* Decorative line */}
                                <div className="pt-4">
                                    <div className="h-px w-0 bg-linear-to-r from-blue-500 to-transparent transition-all duration-500 group-hover:w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Bottom note */}
                <div className="mt-24 border-t border-white/10 pt-8">
                    <p className="text-sm text-gray-500">Más proyectos próximamente</p>
                </div>
            </div>
        </section>
    );
}
