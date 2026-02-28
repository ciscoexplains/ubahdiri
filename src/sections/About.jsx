import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const points = [
        "Trainer, mentor & konselor pemberdayaan diri",
        "Fokus: percintaan, percaya diri & self healing",
        "NLP Master Practitioner",
        "Pendekatan empatik, praktis, berbasis psikologi"
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    <motion.div
                        className="w-full md:w-1/2 relative"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Image Placeholder */}
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-sand-light relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-dark/20 to-transparent z-10"></div>
                            <div className="w-full h-full object-cover flex items-center justify-center text-brand-brown-warm/50 text-xl font-medium">
                                Photo Profile
                            </div>
                        </div>
                        {/* Decoration Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-sage rounded-full -z-10 opacity-20 blur-xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-brown-warm rounded-full -z-10 opacity-20 blur-xl"></div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-sm font-semibold text-brand-sage uppercase tracking-wider mb-2">Tentang</h2>
                        <h3 className="text-3xl md:text-4xl font-semibold text-brand-brown-dark mb-6">
                            Sand Pollux, S.Psi
                        </h3>

                        <p className="text-brand-brown-dark/80 text-lg mb-8 leading-relaxed font-light">
                            Menghadirkan ruang aman bagi Anda untuk mengeksplorasi diri, menyembuhkan luka batin, dan merancang perjalanan transformasi personal yang berarti.
                            Pendekatan saya dirancang untuk memberikan ketenangan pikiran dan langkah praktis yang memberdayakan.
                        </p>

                        <ul className="space-y-4">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-brand-sage mt-1 flex-shrink-0" size={20} />
                                    <span className="text-brand-brown-dark font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
