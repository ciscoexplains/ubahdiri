import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-brown-dark text-brand-beige py-12 border-t border-brand-brown-warm">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h3 className="text-2xl font-semibold mb-3">Sand | Ubah Diri</h3>
                <p className="text-brand-sand-light max-w-md mx-auto mb-8 font-light">
                    Trainer, Mentor & Konselor Pemberdayaan Diri. Membantu Anda membangun versi terbaik dari diri sendiri.
                </p>
                <div className="w-16 h-px bg-brand-brown-warm mx-auto mb-8 opacity-50"></div>
                <p className="text-sm opacity-80">
                    &copy; {currentYear} Sand | Ubah Diri. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
