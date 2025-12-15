'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Globe, Code, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: Palette,
        title: 'Branding',
        description: 'Construimos identidades con estrategia, coherencia y emoción.',
    },
    {
        icon: Globe,
        title: 'Diseño Web',
        description: 'Webs estéticas, intuitivas y alineadas con tu negocio.',
    },
    {
        icon: Code,
        title: 'Desarrollo Web',
        description: 'Velocidad, seguridad, responsive y SEO inicial.',
    },
    {
        icon: Sparkles,
        title: 'Universo de Marca',
        description: 'Ilustraciones, packaging y sistemas visuales completos.',
    },
];

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const lineRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animación del título
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                },
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            });

            // Animación de la línea
            gsap.from(lineRef.current, {
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 85%',
                },
                scaleX: 0,
                duration: 1,
                ease: 'power2.out',
            });

            // Animación de las cards
            cardsRef.current.forEach((card, i) => {
                if (!card) return;

                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    },
                    y: 80,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: 'power3.out',
                });

                // Hover effects
                const icon = card.querySelector('.service-icon');
                const line = card.querySelector('.service-line');
                const number = card.querySelector('.service-number');

                card.addEventListener('mouseenter', () => {
                    gsap.to(icon, {
                        scale: 1.1,
                        rotate: 5,
                        duration: 0.3,
                        ease: 'back.out(2)',
                    });
                    gsap.to(line, {
                        scaleX: 1,
                        duration: 0.4,
                        ease: 'power2.out',
                    });
                    gsap.to(number, {
                        y: -5,
                        opacity: 0.8,
                        duration: 0.3,
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(icon, {
                        scale: 1,
                        rotate: 0,
                        duration: 0.3,
                    });
                    gsap.to(line, {
                        scaleX: 0,
                        duration: 0.4,
                        ease: 'power2.out',
                    });
                    gsap.to(number, {
                        y: 0,
                        opacity: 0.1,
                        duration: 0.3,
                    });
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="servicios" className="bg-white py-32 text-black">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20">
                    <h2 ref={titleRef} className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                        Servicios
                    </h2>

                    <div ref={lineRef} className="h-1 w-32 origin-left bg-linear-to-r from-blue-500 to-blue-400" />
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={service.title} ref={(el) => (cardsRef.current[index] = el)} className="group relative cursor-pointer">
                                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 transition-all duration-500 hover:border-blue-500 hover:shadow-2xl">
                                    {/* Top accent line */}
                                    <div className="service-line absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-linear-to-r from-blue-500 to-blue-400" />

                                    {/* Number background */}
                                    <div className="service-number absolute right-8 top-8 text-[120px] font-bold leading-none text-gray-50 opacity-10 transition-all">
                                        0{index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 transition-colors group-hover:bg-blue-50 service-icon">
                                            <Icon className="h-10 w-10 text-blue-500" strokeWidth={1.5} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mb-4 text-3xl font-semibold tracking-tight">{service.title}</h3>

                                        {/* Description */}
                                        <p className="text-base leading-relaxed text-gray-600">{service.description}</p>
                                    </div>

                                    {/* Bottom corner decoration */}
                                    <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-transparent transition-colors group-hover:border-blue-500/20" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
