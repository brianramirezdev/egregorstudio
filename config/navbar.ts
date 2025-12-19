import { Briefcase, Layers, PenTool, Code, Users, Target, Mail } from 'lucide-react';

export const servicesMenu = [
    {
        title: 'Branding',
        description: 'Identidad visual, posicionamiento y coherencia de marca.',
        icon: PenTool,
        href: '#servicios',
    },
    {
        title: 'Web',
        description: 'Diseño y desarrollo web a medida.',
        icon: Code,
        href: '#servicios',
    },
    {
        title: 'Marketing',
        description: 'Estrategia digital orientada a resultados.',
        icon: Target,
        href: '#servicios',
    },
    {
        title: 'Estrategia',
        description: 'Análisis, visión y toma de decisiones.',
        icon: Layers,
        href: '#proceso',
    },
];

export const companyMenu = [
    {
        title: 'Portfolio',
        description: 'Proyectos reales, resultados reales.',
        icon: Briefcase,
        href: '#portfolio',
    },
    {
        title: 'Clientes',
        description: 'Marcas que han confiado en nosotros.',
        icon: Users,
        href: '#clientes',
    },
    {
        title: 'Nosotros',
        description: 'Quiénes somos y cómo trabajamos.',
        icon: Layers,
        href: '#nosotros',
    },
    {
        title: 'Contacto',
        description: 'Hablemos de tu proyecto.',
        icon: Mail,
        href: '#contacto',
    },
];
