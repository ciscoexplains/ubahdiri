import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram } from 'lucide-react';

const SafeSpace = () => {
    return (
        <section className="py-24 bg-brand-sand-light/30">
            <div className="container max-w-5xl mx-auto px-6">
                <motion.div
                    className="bg-brand-beige border border-brand-sand rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sage-light/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                        <div className="md:w-2/3">
                            <div className="flex items-center gap-3 mb-4">
                                <Heart className="text-brand-sage fill-brand-sage/20" size={28} />
                                <h3 className="text-2xl md:text-3xl font-semibold text-brand-brown-dark">Komunitas Safe Space</h3>
                            </div>

                            <p className="text-brand-brown-dark/80 text-lg mb-6 leading-relaxed">
                                Sand bersama istrinya, Novi, mendirikan komunitas kesadaran kesehatan mental pertama di Mojokerto bernama <span className="font-medium text-brand-brown-dark">Safe Space</span>.
                                Kami berfokus pada penyebaran kesadaran pentingnya kesehatan mental dan menyediakan ruang riil yang aman bagi siapapun untuk bertumbuh dan saling mendukung.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://instagram.com/safespace.mjk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-brand-brown-dark hover:text-brand-sage font-medium transition-colors"
                                >
                                    <Instagram size={20} /> @safespace.mjk
                                </a>
                                <span className="hidden sm:block text-brand-sand">|</span>
                                <a
                                    href="https://instagram.com/safespace.work"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-brand-brown-dark hover:text-brand-sage font-medium transition-colors"
                                >
                                    <Instagram size={20} /> @safespace.work
                                </a>
                            </div>
                        </div>

                        <div className="md:w-1/3 flex justify-center">
                            <div className="w-48 h-48 bg-white rounded-full border border-brand-sand-light shadow-sm flex items-center justify-center p-8 text-center text-brand-sage font-medium">
                                Logo<br />Safe Space
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SafeSpace;
