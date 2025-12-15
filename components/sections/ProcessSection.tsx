'use client';

import { useState } from 'react';
import { Lightbulb, Palette, Rocket, ChevronDown } from 'lucide-react';

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
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="proceso" className="bg-white py-32 text-black">
            <div className="mx-auto max-w-5xl px-6">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">Proceso</h2>
                    <div className="h-1 w-32 bg-linear-to-r from-blue-500 to-blue-400" />
                </div>

                {/* Process items */}
                <div className="space-y-6">
                    {processes.map((process, index) => {
                        const Icon = process.icon;
                        const isActive = activeIndex === index;

                        return (
                            <div key={process.title} className="group">
                                <button onClick={() => setActiveIndex(isActive ? null : index)} className="w-full text-left">
                                    <div
                                        className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                                            isActive ? 'border-blue-500 bg-blue-50/50 shadow-lg' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                                        }`}
                                    >
                                        {/* Main bar */}
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

                                                {/* Icon + text */}
                                                <div className="flex flex-1 items-center gap-4">
                                                    <div
                                                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl transition-all ${
                                                            isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                                        }`}
                                                    >
                                                        <Icon className="h-8 w-8" strokeWidth={1.5} />
                                                    </div>

                                                    <div>
                                                        <h3 className="mb-1 text-2xl font-semibold md:text-3xl">{process.title}</h3>
                                                        <p className="text-gray-600">{process.description}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Arrow */}
                                            <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isActive ? 'rotate-180 text-blue-500' : 'text-gray-400'}`} />
                                        </div>

                                        {/* Details */}
                                        <div
                                            className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                                                isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="border-t border-blue-200 bg-blue-100/40 px-8 py-6">
                                                    <p className="text-sm leading-relaxed text-gray-700">{process.details}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom accent */}
                                        <div
                                            className={`absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-500 to-blue-400 transition-all duration-500 ${
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
