import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShieldCheck, MapPin, Video } from 'lucide-react';

const Consultation = () => {
    return (
        <section id="consultation" className="py-24 bg-brand-sand-light/20 relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-sage/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-semibold text-brand-sage uppercase tracking-wider mb-2">Konsultasi Privat</h2>
                        <h3 className="text-3xl md:text-5xl font-semibold text-brand-brown-dark mb-6 leading-tight">
                            Konsultasi <span className="text-brand-sage">1-on-1</span>
                        </h3>

                        <p className="text-brand-brown-dark/80 text-lg mb-8 leading-relaxed font-light">
                            Dapatkan ruang yang sepenuhnya bebas dari penghakiman untuk menceritakan beban pikiran Anda.
                            Pendekatan konseling yang empati, profesional, dan sangat menjunjung tinggi kerahasiaan Anda.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-sand-light/50">
                                <div className="bg-brand-sand-light p-3 rounded-xl text-brand-brown-dark">
                                    <Video size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-brown-dark text-lg">Sesi Online</h4>
                                    <p className="text-brand-brown-dark/70 text-sm">Via Zoom atau Google Meet dari mana saja.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-brand-sand-light/50">
                                <div className="bg-brand-sand-light p-3 rounded-xl text-brand-brown-dark">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-brown-dark text-lg">Sesi Offline</h4>
                                    <p className="text-brand-brown-dark/70 text-sm">Tatap muka langsung di Mojokerto / Surabaya (dengan perjanjian).</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-brand-sage/5 rounded-2xl border border-brand-sage/20">
                                <div className="bg-white p-3 rounded-xl text-brand-sage shadow-sm border border-brand-sage/10">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-brown-dark text-lg">Aman & Rahasia</h4>
                                    <p className="text-brand-brown-dark/70 text-sm">Privasi Anda adalah prioritas utama kami.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/6282336696106"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-sage hover:bg-brand-sage-dark text-white rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <Calendar size={20} /> Jadwalkan Konsultasi
                        </a>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="aspect-square rounded-[3rem] overflow-hidden bg-brand-sand max-w-md mx-auto relative shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-brown-dark/30 to-transparent mix-blend-multiply z-10"></div>
                            {/* Image placeholder representing a peaceful/calm setting for consultation */}
                            <div className="w-full h-full flex flex-col items-center justify-center bg-brand-sand text-brand-brown-dark/50">
                                <p className="text-lg font-medium">Suasana Tenang</p>
                                <p className="text-sm">(Image Placeholder)</p>
                            </div>
                        </div>
                        {/* Soft decorative elements */}
                        <div className="absolute -bottom-4 right-8 bg-white p-4 rounded-2xl shadow-xl border border-brand-sand-light z-20 flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <p className="text-sm font-medium text-brand-brown-dark">Tersedia untuk sesi minggu ini</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Consultation;
