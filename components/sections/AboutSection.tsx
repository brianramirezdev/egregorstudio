'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        icon: Target,
        title: 'Criterio',
        text: 'Pensamos antes de diseñar. Cada decisión tiene una razón de ser.',
    },
    {
        icon: Zap,
        title: 'Coherencia',
        text: 'Construimos sistemas completos, no elementos aislados.',
    },
    {
        icon: Award,
        title: 'Precisión',
        text: 'Ejecutamos con atención al detalle y profesionalidad.',
    },
];

export default function AboutSection() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const lineRef = useRef(null);
    const textRef = useRef(null);
    const valuesRef = useRef([]);

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

            // Text animation
            gsap.from(textRef.current.children, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out',
            });

            // Values animation
            valuesRef.current.forEach((value, i) => {
                if (!value) return;
                gsap.from(value, {
                    scrollTrigger: {
                        trigger: value,
                        start: 'top 85%',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: 'power3.out',
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="nosotros" className="bg-white py-32 text-black">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="mb-20">
                    <h2 ref={titleRef} className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                        Nosotros
                    </h2>

                    <div ref={lineRef} className="h-1 w-32 origin-left bg-gradient-to-r from-blue-500 to-blue-400" />
                </div>

                {/* Main content */}
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Left: Description */}
                    <div ref={textRef} className="space-y-8">
                        <p className="text-2xl font-light leading-relaxed text-gray-900 md:text-3xl">
                            Egregor Studio es un estudio creativo centrado en branding, web y marketing digital.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-600">No somos una agencia genérica. Somos un estudio con criterio, estrategia y dirección creativa.</p>

                        <p className="text-lg leading-relaxed text-gray-600">
                            No seguimos fórmulas. No diseñamos "cosas bonitas". Construimos marcas con coherencia, intención y emoción.
                        </p>

                        {/* Badge */}
                        <div className="pt-6">
                            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-50 px-6 py-3">
                                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                                <span className="text-sm font-medium text-blue-700">Calm but confident</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Values */}
                    <div className="space-y-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    ref={(el) => (valuesRef.current[index] = el)}
                                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-blue-500 hover:bg-white hover:shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 transition-all group-hover:bg-blue-500 group-hover:scale-110">
                                            <Icon className="h-6 w-6 text-blue-600 transition-colors group-hover:text-white" strokeWidth={1.5} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                                            <p className="text-sm leading-relaxed text-gray-600">{value.text}</p>
                                        </div>
                                    </div>

                                    {/* Bottom accent bar */}
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom philosophy */}
                <div className="mt-20 border-t border-gray-200 pt-12">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-lg leading-relaxed text-gray-600">
                            Trabajamos con marcas, artistas y proyectos que buscan construir algo sólido, valoran el criterio y entienden la importancia de la coherencia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
