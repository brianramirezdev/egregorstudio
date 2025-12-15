// components/sections/ProcessSection.tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function ProcessSection() {
    return (
        <section id="proceso" className="bg-white py-32 text-black">
            <div className="mx-auto max-w-4xl px-6">
                <h2 className="mb-16 text-4xl font-bold md:text-6xl">Proceso</h2>

                <Accordion type="single" collapsible>
                    <AccordionItem value="1">
                        <AccordionTrigger>Estrategia</AccordionTrigger>
                        <AccordionContent>Analizamos la marca, el contexto y los objetivos.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="2">
                        <AccordionTrigger>Diseño</AccordionTrigger>
                        <AccordionContent>Traducimos la estrategia en identidad y experiencia.</AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="3">
                        <AccordionTrigger>Desarrollo</AccordionTrigger>
                        <AccordionContent>Construimos una base sólida, rápida y escalable.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
