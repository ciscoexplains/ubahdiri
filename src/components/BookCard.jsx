import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const BookCard = ({ title, description, coverUrl, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay }}
            className="group"
        >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-md border border-brand-sand-light bg-brand-sand-light/50 flex items-center justify-center">
                {/* Placeholder if no image provided or fallback */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-brown-warm p-6 text-center">
                    <BookOpen size={48} className="mb-4 opacity-50" />
                    <h4 className="font-semibold text-lg text-brand-brown-dark">{title}</h4>
                </div>
                {coverUrl && (
                    <img
                        src={coverUrl}
                        alt={`Cover Buku ${title}`}
                        className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                )}
            </div>
            <div>
                <h3 className="text-xl font-semibold text-brand-brown-dark mb-2">{title}</h3>
                <p className="text-brand-brown-dark/80 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export default BookCard;
