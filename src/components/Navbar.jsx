import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Tentang', href: '#about' },
        { name: 'Program', href: '#programs' },
        { name: 'Buku', href: '#books' },
        { name: 'Konsultasi', href: '#consultation' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-beige/90 backdrop-blur-md border-b border-brand-sand">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 text-xl font-semibold text-brand-brown-dark">
                    <span>Sand | Ubah Diri</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-brand-brown-dark hover:text-brand-sage transition-colors duration-300 font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#consultation"
                        className="px-5 py-2.5 bg-brand-sage hover:bg-brand-sage-dark text-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        Konsultasi
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-brand-brown-dark"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-beige border-b border-brand-sand overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-brand-brown-dark font-medium py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#consultation"
                                className="mt-2 text-center py-3 bg-brand-sage text-white rounded-xl font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                Konsultasi 1-on-1
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
