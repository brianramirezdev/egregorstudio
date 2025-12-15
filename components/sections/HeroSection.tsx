export default function HeroSection() {
    return (
        <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-6xl px-6 text-center">
                <h1 className="text-6xl font-bold leading-tight tracking-tight md:text-8xl lg:text-9xl">
                    <span className="block">Branding, Web</span>
                    <span className="block">y Marketing</span>
                </h1>

                <p className="mx-auto mt-12 max-w-2xl text-lg text-gray-400 md:text-xl">
                    Construimos marcas con estrategia, coherencia y emoción.
                    <br />
                    Diseñamos experiencias digitales con criterio.
                </p>
            </div>
        </section>
    );
}
