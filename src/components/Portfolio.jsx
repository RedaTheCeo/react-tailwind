import React from 'react';
import Analytics from './Analytics';
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero'
import Newsletter from './Newsletter';

const Portfolio = () => {
    return (
        <div>
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
        </div>
    );
}

export default Portfolio;
