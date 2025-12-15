'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EgregorLogo = ({ className = '' }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M50 25 L50 75 M35 40 L65 40 M35 60 L65 60" />
    </svg>
);

export default function HeroSection() {
    const sectionRef = useRef(null);
    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(logoRef.current, {
                scale: 0,
                opacity: 0,
                duration: 1.2,
                ease: 'back.out(1.7)',
            })
                .from(
                    lineRef.current,
                    {
                        scaleX: 0,
                        duration: 0.8,
                        ease: 'power2.inOut',
                    },
                    '-=0.4'
                )
                .from(
                    titleRef.current.children,
                    {
                        y: 100,
                        opacity: 0,
                        stagger: 0.15,
                        duration: 1,
                    },
                    '-=0.6'
                )
                .from(
                    subtitleRef.current,
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                    },
                    '-=0.3'
                );

            // Animación continua sutil del logo
            gsap.to(logoRef.current, {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="inicio" className="relative flex min-h-screen items-center justify-center bg-black text-white overflow-hidden">
            {/* Patrón de fondo sutil */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-6xl px-6 text-center">
                <div ref={titleRef} className="overflow-hidden">
                    <h1 className="text-6xl font-bold leading-tight tracking-tight md:text-8xl lg:text-9xl">
                        <div className="inline-block">Branding,</div> <div className="inline-block">Web</div>
                        <br />
                        <div className="inline-block">y Marketing</div>
                    </h1>
                </div>

                <p ref={subtitleRef} className="mx-auto mt-12 max-w-2xl text-lg text-gray-400 md:text-xl">
                    Construimos marcas con estrategia, coherencia y emoción.
                    <br />
                    Diseñamos experiencias digitales con criterio.
                </p>
            </div>
        </section>
    );
}
