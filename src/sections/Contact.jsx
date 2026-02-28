import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container max-w-4xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-semibold text-brand-sage uppercase tracking-wider mb-2">Terhubung Bersama Kami</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-brand-brown-dark mb-6">
                        Jejaring Sosial
                    </h3>
                    <p className="text-brand-brown-dark/80 text-lg mb-12 max-w-2xl mx-auto">
                        Temukan insight tentang percintaan, percaya diri, dan self healing.
                        Ingat untuk <span className="font-semibold text-brand-sage-dark">subscribe & follow</span> agar tidak tertinggal insight penting.
                    </p>

                    <SocialLinks className="mb-20" />
                </motion.div>

                <motion.div
                    className="bg-brand-beige border border-brand-sand-light rounded-3xl p-8 md:p-12 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="w-16 h-16 bg-brand-sage-light/30 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-sage-dark">
                        <MessageCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-brand-brown-dark mb-4">Punya Pertanyaan?</h3>
                    <p className="text-brand-brown-dark/80 mb-8 max-w-lg mx-auto">
                        Jangan ragu untuk menghubungi admin kami. Kami siap membantu Anda memilih program yang tepat atau sekadar mendengarkan kebingungan Anda.
                    </p>

                    <a
                        href="https://wa.me/6282336696106"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Chat Admin via WhatsApp
                    </a>
                    <p className="mt-4 text-sm text-brand-brown-dark/60 font-medium">
                        Admin Novi: +62 823-3669-6106
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
