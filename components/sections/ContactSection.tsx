'use client';

import { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Aquí irá tu lógica real de envío
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="bg-white py-32 text-black">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">Contacto</h2>
                    <div className="h-1 w-32 bg-linear-to-r from-blue-500 to-blue-400" />
                </div>

                <div className="grid gap-20 lg:grid-cols-2">
                    {/* Left: Info */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="mb-4 text-3xl font-semibold md:text-4xl">Empecemos una conversación</h3>
                            <p className="text-lg leading-relaxed text-gray-600">
                                Si tienes un proyecto, una marca o una idea que necesita criterio, estrategia y diseño, hablemos.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {/* Email directo */}
                            <div className="group">
                                <div className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                                    <Mail className="h-4 w-4" />
                                    Contacto directo
                                </div>
                                <a href="mailto:hello@egregor.studio" className="block text-2xl font-semibold transition-colors hover:text-blue-500 md:text-3xl">
                                    hello@egregor.studio
                                </a>
                                <div className="mt-3 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                            </div>

                            {/* Philosophy box */}
                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                                <p className="text-sm leading-relaxed text-gray-600">
                                    Trabajamos con marcas, artistas y proyectos que buscan construir algo sólido y coherente. Cuéntanos qué tienes en mente y veremos si encajamos.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                                <User className="h-4 w-4 text-blue-500" />
                                Nombre
                            </label>
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                disabled={isSubmitting}
                                className="h-14 w-full rounded-xl border border-gray-200 bg-white px-4 text-black placeholder-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                                <Mail className="h-4 w-4 text-blue-500" />
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                disabled={isSubmitting}
                                className="h-14 w-full rounded-xl border border-gray-200 bg-white px-4 text-black placeholder-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                                <MessageSquare className="h-4 w-4 text-blue-500" />
                                Mensaje
                            </label>
                            <textarea
                                placeholder="Háblanos de tu proyecto..."
                                rows={6}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                disabled={isSubmitting}
                                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-black placeholder-gray-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
                            />
                        </div>

                        {/* Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                            className="group relative h-14 w-full overflow-hidden rounded-xl bg-blue-500 font-semibold text-white transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-500"
                        >
                            <div className="flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                        Enviando…
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                        Enviar mensaje
                                    </>
                                )}
                            </div>
                        </button>

                        {/* Status messages */}
                        {submitStatus === 'success' && (
                            <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                                <CheckCircle className="h-5 w-5 shrink-0" />
                                <span className="text-sm">Mensaje enviado. Te responderemos pronto.</span>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
                                <AlertCircle className="h-5 w-5 shrink-0" />
                                <span className="text-sm">Algo ha fallado. Inténtalo de nuevo.</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
