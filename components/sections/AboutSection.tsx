import { Target, Zap, Award } from 'lucide-react';

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
    return (
        <section id="nosotros" className="bg-white py-32 text-black">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">Nosotros</h2>

                    <div className="h-1 w-32 bg-linear-to-r from-blue-500 to-blue-400" />
                </div>

                {/* Main content */}
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Left: Text */}
                    <div className="space-y-8">
                        <p className="text-2xl font-light leading-relaxed text-gray-900 md:text-3xl">
                            Egregor Studio es un estudio creativo centrado en branding, web y marketing digital.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-600">No somos una agencia genérica. Somos un estudio con criterio, estrategia y dirección creativa.</p>

                        <p className="text-lg leading-relaxed text-gray-600">
                            No seguimos fórmulas. No diseñamos “cosas bonitas”. Construimos marcas con coherencia, intención y emoción.
                        </p>

                        {/* Badge */}
                        <div className="pt-6">
                            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-50 px-6 py-3">
                                <div className="h-2 w-2 rounded-full bg-blue-500" />
                                <span className="text-sm font-medium text-blue-700">Calm but confident</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Values */}
                    <div className="space-y-6">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={value.title}
                                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-white hover:shadow-lg"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 transition-all duration-300 group-hover:bg-blue-500">
                                            <Icon className="h-6 w-6 text-blue-600 transition-colors group-hover:text-white" strokeWidth={1.5} />
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                                            <p className="text-sm leading-relaxed text-gray-600">{value.text}</p>
                                        </div>
                                    </div>

                                    {/* Accent */}
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
