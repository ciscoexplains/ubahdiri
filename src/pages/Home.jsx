import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import SafeSpace from '../sections/SafeSpace';
import Programs from '../sections/Programs';
import Books from '../sections/Books';
import Consultation from '../sections/Consultation';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <SafeSpace />
                <Programs />
                <Books />
                <Consultation />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default Home;
