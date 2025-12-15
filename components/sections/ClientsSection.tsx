// components/sections/ClientsSection.tsx
import Marquee from '@/components/marquee';

export default function ClientsSection() {
    return (
        <section id="clientes">
            <Marquee text="BRANDING ✧ WEB ✧ MARKETING DIGITAL ✧ ESTRATEGIA ✧" border xl itemClassName="py-12 md:py-24" />
        </section>
    );
}
