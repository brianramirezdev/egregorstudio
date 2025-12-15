// components/sections/ClientsSection.tsx
import Marquee from '@/components/marquee';

export default function ClientsSection() {
    return (
        <section id="clientes" className="bg-black py-24 text-white">
            <Marquee text="TOTI SANZ · CLIENTES · MARCAS · PROYECTOS" speed="slow" dark xl />
        </section>
    );
}
