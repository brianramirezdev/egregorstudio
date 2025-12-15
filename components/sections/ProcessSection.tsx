'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Palette, Rocket, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processes = [
    {
        icon: Lightbulb,
        number: '01',
        title: 'Estrategia',
        description: 'Analizamos la marca, el contexto y los objetivos.',
        details: 'Investigación profunda, análisis competitivo, definición de posicionamiento, tono de comunicación y arquitectura de marca. Pensamos antes de diseñar.',
    },
    {
        icon: Palette,
        number: '02',
        title: 'Diseño',
        description: 'Traducimos la estrategia en identidad y experiencia.',
        details: 'Dirección creativa, sistemas visuales coherentes, tipografía, paleta de color, aplicaciones de marca y diseño de interfaces. Forma con función.',
    },
    {
        icon: Rocket,
        number: '03',
        title: 'Desarrollo',
        description: 'Construimos una base sólida, rápida y escalable.',
        details: 'Frontend optimizado, backend robusto, SEO técnico, despliegue profesional y documentación. Código limpio y mantenible.',
    },
];

export default function ProcessSection() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const lineRef = useRef(null);
    const itemsRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
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

            // Line animation
            gsap.from(lineRef.current, {
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: 'top 85%',
                },
                scaleX: 0,
                duration: 1,
                ease: 'power2.out',
            });

            // Items animation
            itemsRef.current.forEach((item, i) => {
                if (!item) return;

                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                    },
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: 'power3.out',
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleToggle = (index) => {
        const newIndex = activeIndex === index ? null : index;
        setActiveIndex(newIndex);

        // Animate the details panel
        const item = itemsRef.current[index];
        const details = item?.querySelector('.details-panel');
        const arrow = item?.querySelector('.arrow-icon');

        if (details && arrow) {
            if (newIndex === index) {
                gsap.to(details, {
                    height: 'auto',
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                });
                gsap.to(arrow, {
                    rotate: 180,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            } else {
                gsap.to(details, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in',
                });
                gsap.to(arrow, {
                    rotate: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            }
        }
    };

    return (
        <section ref={sectionRef} id="proceso" className="bg-white py-32 text-black">
            <div className="mx-auto max-w-5xl px-6">
                {/* Header */}
                <div className="mb-20">
                    <h2 ref={titleRef} className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                        Proceso
                    </h2>

                    <div ref={lineRef} className="h-1 w-32 origin-left bg-gradient-to-r from-blue-500 to-blue-400" />
                </div>

                {/* Process Items */}
                <div className="space-y-6">
                    {processes.map((process, index) => {
                        const Icon = process.icon;
                        const isActive = activeIndex === index;

                        return (
                            <div key={process.title} ref={(el) => (itemsRef.current[index] = el)} className="group relative">
                                <button onClick={() => handleToggle(index)} className="w-full text-left">
                                    <div
                                        className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                                            isActive
                                                ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white shadow-lg'
                                                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                                        }`}
                                    >
                                        {/* Main content bar */}
                                        <div className="flex items-center justify-between p-8">
                                            <div className="flex flex-1 items-center gap-6">
                                                {/* Number */}
                                                <span
                                                    className={`text-5xl font-bold transition-colors md:text-6xl ${
                                                        isActive ? 'text-blue-500' : 'text-gray-200 group-hover:text-gray-300'
                                                    }`}
                                                >
                                                    {process.number}
                                                </span>

                                                {/* Icon & Title */}
                                                <div className="flex flex-1 items-center gap-4">
                                                    <div
                                                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl transition-all ${
                                                            isActive ? 'bg-blue-500 shadow-lg' : 'bg-gray-100 group-hover:bg-gray-200'
                                                        }`}
                                                    >
                                                        <Icon className={`h-8 w-8 ${isActive ? 'text-white' : 'text-gray-600'}`} strokeWidth={1.5} />
                                                    </div>

                                                    <div className="flex-1">
                                                        <h3 className="mb-1 text-2xl font-semibold md:text-3xl">{process.title}</h3>
                                                        <p className={`text-base ${isActive ? 'text-gray-700' : 'text-gray-600'}`}>{process.description}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Arrow indicator */}
                                            <div className="ml-4 shrink-0">
                                                <div className="arrow-icon">
                                                    <ChevronDown className={`h-6 w-6 transition-colors ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expandable details */}
                                        <div className="details-panel h-0 overflow-hidden opacity-0">
                                            <div className="border-t border-blue-200 bg-gradient-to-br from-blue-100/50 to-transparent px-8 py-6">
                                                <p className="text-sm leading-relaxed text-gray-700">{process.details}</p>
                                            </div>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div
                                            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-12'
                                            }`}
                                        />
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-500">Cada proyecto es único. Adaptamos nuestro proceso a tus necesidades.</p>
                </div>
            </div>
        </section>
    );
}
