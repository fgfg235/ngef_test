import React from 'react';
import {Outlet} from 'react-router-dom';
import HeaderTwo from './components/header/HeaderTwo';
import Brand from './components/brand/Brand';
import Footer from './components/footer/Footer';
import { BreadcrumbBox } from './components/common/Breadcrumb';

const HomeTwo = () => {
    return (
        <div className="main-wrapper" >

            {/* Header 2 */}
            <HeaderTwo />

            {/* Breadcroumb */}
            <BreadcrumbBox title="" />

            {/* About Us */}
            <Outlet />

            {/* Brand Area */}
            <Brand />

            {/* Footer Area */}
            <Footer />

        </div>
    )
}

export default HomeTwo
