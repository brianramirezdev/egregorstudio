'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const labelRef = useRef(null);
    const imageRef = useRef(null);
    const imageInnerRef = useRef(null);
    const contentRef = useRef(null);
    const overlayRef = useRef(null);
    const cornerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%',
                },
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            });

            gsap.from(labelRef.current, {
                scrollTrigger: {
                    trigger: labelRef.current,
                    start: 'top 80%',
                },
                y: -20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            });

            // Image reveal con mask
            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 75%',
                },
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            });

            // Content animation
            gsap.from(contentRef.current.children, {
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 75%',
                },
                x: 50,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out',
            });

            // Parallax effect on scroll
            gsap.to(imageInnerRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
                y: -50,
                scale: 1.1,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => {
        gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
        });
        gsap.to(cornerRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'back.out(2)',
        });
        gsap.to(imageInnerRef.current, {
            scale: 1.15,
            duration: 0.6,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.4,
        });
        gsap.to(cornerRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
        });
        gsap.to(imageInnerRef.current, {
            scale: 1.1,
            duration: 0.6,
            ease: 'power2.out',
        });
    };

    return (
        <section ref={sectionRef} id="portfolio" className="bg-black py-32 text-white">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h2 ref={headerRef} className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                            Portfolio
                        </h2>
                    </div>
                    <div ref={labelRef} className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                        <span className="text-sm uppercase tracking-wider text-gray-400">Proyecto destacado</span>
                    </div>
                </div>

                {/* Featured Project */}
                <a href="https://totisanz.com" target="_blank" rel="noopener noreferrer" className="group block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="grid gap-16 lg:grid-cols-5 lg:items-center">
                        {/* Image */}
                        <div className="lg:col-span-3">
                            <div ref={imageRef} className="relative aspect-4/3 max-w-200 overflow-hidden rounded-2xl bg-neutral-900">
                                <img
                                    ref={imageInnerRef}
                                    src="/totisanz.avif"
                                    alt="Toti Sanz – Web & Branding"
                                    className="h-full w-full object-cover"
                                    style={{ transform: 'scale(1.1)' }}
                                />

                                {/* Overlay gradient */}
                                <div ref={overlayRef} className="absolute inset-0 bg-linear-to-br from-blue-500/30 to-transparent opacity-0" />

                                {/* Corner accent */}
                                <div ref={cornerRef} className="absolute right-6 top-6 opacity-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm">
                                        <ExternalLink className="h-8 w-8 text-white" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Border decoration */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-white/5 transition-colors group-hover:border-blue-500/30" />
                            </div>
                        </div>

                        {/* Content */}
                        <div ref={contentRef} className="lg:col-span-2">
                            <div className="space-y-6">
                                {/* Tags */}
                                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-blue-400 backdrop-blur-sm">
                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                    Branding · Web · Marketing
                                </div>

                                {/* Title */}
                                <h3 className="text-4xl font-bold tracking-tight transition-colors group-hover:text-blue-400 md:text-5xl lg:text-6xl">Toti Sanz</h3>

                                {/* Description */}
                                <p className="text-lg leading-relaxed text-gray-400">
                                    Desarrollo de identidad digital para un artista musical. Estrategia, diseño y ejecución con una visión clara de marca.
                                </p>

                                {/* CTA */}
                                <div className="flex items-center gap-3 pt-4">
                                    <span className="text-sm font-medium uppercase tracking-wider text-white transition-colors group-hover:text-blue-400">Ver proyecto</span>
                                    <ArrowUpRight className="h-5 w-5 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-400" />
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
