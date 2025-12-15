// components/sections/ClientsSection.tsx
import Marquee from '@/components/marquee';

export default function ClientsSection() {
    return (
        <section id="clientes">
            <Marquee text="TOTI SANZ ✧ CLIENTES ✧ MARCAS ✧ PROYECTOS ✧" border xl itemClassName="py-12 md:py-24" />
        </section>
    );
}
