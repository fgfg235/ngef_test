import React from 'react';
import PreLoader from './components/common/PreLoader';
import Header from './components/header/Header';
import HeroImage from './components/hero-image/HeroImage';
import Pricing from './components/pricing/Pricing';
import Brand from './components/brand/Brand';
import Footer from './components/footer/Footer';

const HomeOne = () => {
    return (
        <div className="main-wrapper" >

            {/* Pre Loader */}
            <PreLoader />

            {/* Header */}
            <Header />

            {/* Hero Image */}
            <HeroImage />

            {/* Pricing Area */}
            {/* <Pricing /> */}

            {/* Brand Area */}
            <Brand />

            {/* Footer Area */}
            <Footer />

        </div>
    )
}

export default HomeOne
