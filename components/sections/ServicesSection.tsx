import { Palette, Globe, Code, Sparkles } from 'lucide-react';

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
    return (
        <section id="servicios" className="bg-white py-32 text-black">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">Servicios</h2>

                    <div className="h-1 w-32 origin-left bg-linear-to-r from-blue-500 to-blue-400" />
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div key={service.title} className="group relative">
                                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 transition-all duration-500 hover:border-blue-500 hover:shadow-xl">
                                    {/* Top accent line */}
                                    <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-linear-to-r from-blue-500 to-blue-400 transition-transform duration-500 group-hover:scale-x-100" />

                                    {/* Number background */}
                                    <div className="absolute right-8 top-8 text-[120px] font-bold leading-none text-gray-50 opacity-10 transition-transform duration-500 group-hover:-translate-y-1">
                                        0{index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-50">
                                            <Icon className="h-10 w-10 text-blue-500" strokeWidth={1.5} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mb-4 text-3xl font-semibold tracking-tight">{service.title}</h3>

                                        {/* Description */}
                                        <p className="text-base leading-relaxed text-gray-600">{service.description}</p>
                                    </div>

                                    {/* Bottom corner detail */}
                                    <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-transparent transition-colors duration-500 group-hover:border-blue-500/20" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
