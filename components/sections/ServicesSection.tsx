// components/sections/ServicesSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const services = [
    {
        title: 'Branding',
        description: 'Construimos identidades con estrategia, coherencia y emoción.',
    },
    {
        title: 'Diseño Web',
        description: 'Webs estéticas, intuitivas y alineadas con tu negocio.',
    },
    {
        title: 'Desarrollo Web',
        description: 'Velocidad, seguridad, responsive y SEO inicial.',
    },
    {
        title: 'Universo de Marca',
        description: 'Ilustraciones, packaging y sistemas visuales completos.',
    },
];

export default function ServicesSection() {
    return (
        <section id="servicios" className="bg-white py-32 text-black">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-16 text-4xl font-bold md:text-6xl">Servicios</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <Card key={service.title}>
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
