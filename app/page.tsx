import Navigation from '@/components/Navigation';

import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ClientsSection from '@/components/sections/ClientsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
        <main className="bg-white font-sans text-black antialiased dark:bg-black dark:text-white">
            {/* Navegación */}
            <Navigation />

            {/* Secciones */}
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <ProcessSection />
            <ClientsSection />
            <AboutSection />
            <ContactSection />

            {/* Footer */}
            <Footer />
        </main>
    );
}
