import React from 'react';
import { motion } from 'framer-motion';

const ProgramCard = ({ title, type, description, forWho, benefit, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-brand-sand-light h-full flex flex-col"
        >
            <div className="text-sm font-medium text-brand-sage mb-3">{type}</div>
            <h3 className="text-xl font-semibold text-brand-brown-dark mb-4">{title}</h3>
            <p className="text-brand-brown-dark/80 mb-6 flex-grow">{description}</p>

            <div className="space-y-4 pt-4 border-t border-brand-sand-light">
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-brown-warm mb-1">Cocok Untuk</span>
                    <p className="text-sm text-brand-brown-dark/90">{forWho}</p>
                </div>
                <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-brand-brown-warm mb-1">Manfaat Utama</span>
                    <p className="text-sm text-brand-brown-dark/90">{benefit}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProgramCard;
