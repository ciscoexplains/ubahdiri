import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-beige">
            {/* Subtle background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-sand/30 blur-3xl"></div>
                <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-brand-sage-light/20 blur-3xl"></div>
            </div>

            <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-block"
                >
                    <span className="bg-brand-sand-light text-brand-brown-dark px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                        Sand | Ubah Diri
                    </span>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl lg:text-7xl font-semibold text-brand-brown-dark leading-tight md:leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Ubah Diri, Tenangkan Batin, Bangun Versi Terbaikmu
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-brand-brown-dark/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Fokus pada <span className="font-medium text-brand-sage-dark">percintaan</span>, <span className="font-medium text-brand-sage-dark">percaya diri</span> & <span className="font-medium text-brand-sage-dark">self healing</span>. Langkah pertamamu menuju ketenangan batin dimulai di sini.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#programs"
                        className="w-full sm:w-auto px-8 py-4 bg-brand-sage hover:bg-brand-sage-dark text-white rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                    >
                        Ikuti Program <ArrowRight size={18} />
                    </a>
                    <a
                        href="#consultation"
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-brown-warm text-brand-brown-dark hover:bg-brand-brown-warm hover:text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center"
                    >
                        Konsultasi 1-on-1
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
