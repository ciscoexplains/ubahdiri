import React from 'react';
import { motion } from 'framer-motion';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

const Books = () => {
    return (
        <section id="books" className="py-24 bg-brand-beige">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            className="text-sm font-semibold text-brand-sage uppercase tracking-wider mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            Karya Tulis
                        </motion.h2>
                        <motion.h3
                            className="text-3xl md:text-4xl font-semibold text-brand-brown-dark"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Buku Digital
                        </motion.h3>
                    </div>
                    <motion.p
                        className="text-brand-brown-dark/80 text-lg md:max-w-md md:text-right"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Bacaan praktis dan reflektif untuk menemani proses perubahan diri dan penyembuhan luka batin.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {books.map((book, index) => (
                        <BookCard
                            key={book.id}
                            title={book.title}
                            description={book.description}
                            coverUrl={book.coverUrl}
                            delay={0.2 * index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Books;
