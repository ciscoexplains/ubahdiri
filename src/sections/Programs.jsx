import React from 'react';
import { motion } from 'framer-motion';
import { programs } from '../data/programs';
import ProgramCard from '../components/ProgramCard';

const Programs = () => {
    return (
        <section id="programs" className="py-24 bg-white relative">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        className="text-sm font-semibold text-brand-sage uppercase tracking-wider mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Layanan
                    </motion.h2>
                    <motion.h3
                        className="text-3xl md:text-4xl font-semibold text-brand-brown-dark mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Program Eksklusif
                    </motion.h3>
                    <motion.p
                        className="text-brand-brown-dark/80 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Pilih program yang paling sesuai dengan kebutuhan emosional dan fase kehidupan Anda saat ini.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={program.id}
                            title={program.title}
                            type={program.type}
                            description={program.description}
                            forWho={program.forWho}
                            benefit={program.benefit}
                            delay={0.1 * (index + 1)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
