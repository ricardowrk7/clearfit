import React, { useState } from "react";
import { Link } from 'react-router-dom';

const gallerybg = require('./../../assets/images/background/image-14.jpg');

const images = [
    {
        id: 1,
        name: "DiverciTea",
        industry: "ecommerce",
        eCommerce: true,
        imgUrl: require('../../assets/images/portfolio/DiverciTea.png')
    },
    {
        id: 2,
        name: "Angels Eyewear",
        industry: "ecommerce",
        eCommerce: true,
        imgUrl: require('../../assets/images/portfolio/AngelsEyewear.png')
    },
    {
        id: 3,
        name: "Cbus Social",
        industry: "SEO",
        services: true,
        imgUrl: require('../../assets/images/portfolio/SEO.png')
    },
    {
        id: 4,
        name: "Vohnt",
        industry: "Car Care",
        services: true,
        imgUrl: require('../../assets/images/portfolio/vohnt-carcare.png')
    },
    {
        id: 5,
        name: "Pierre Jean-Louis",
        industry: "Art Installation",
        services: true,
        imgUrl: require('../../assets/images/portfolio/art-instalation.png')
    },
    {
        id: 6,
        name: "Jess Garage Doors",
        industry: "Construction",
        services: true,
        imgUrl: require('../../assets/images/portfolio/garage-service.png')
    },
    {
        id: 7,
        name: "Thomas George",
        industry: "Real Estate",
        lifestyle: true,
        eCommerce: true,
        imgUrl: require('../../assets/images/portfolio/Artboard-1.png')
    },
    {
        id: 8,
        name: "The Furniture Store",
        industry: "Ecommerce",
        lifestyle: true,
        eCommerce: true,
        imgUrl: require('../../assets/images/portfolio/Artboard-2.png')
    },
    {
        id: 9,
        name: "OneOf",
        industry: "NFT's",
        lifestyle: true,
        services: true,
        imgUrl: require('../../assets/images/portfolio/Artboard-3.png')
    },
    {
        id: 10,
        name: "SimpliLearn",
        industry: "Education",
        lifestyle: true,
        imgUrl: require('../../assets/images/portfolio/Artboard-4.png')
    },
    {
        id: 11,
        name: "Virtual Employee",
        industry: "Staffing",
        business: true,
        lyfestyle: true,
        imgUrl: require('../../assets/images/portfolio/Artboard-5.png')
    },
    {
        id: 12,
        name: "Cooley",
        industry: "Law Firm",
        business: true,
        services: true,
        imgUrl: require('../../assets/images/portfolio/Artboard-6.png')
    }
];

const FILTER_DEFS = {
    ECOMMERCE: image => image.eCommerce,
    SERVICES: image => image.services,
    LIFESTYLE: image => image.lifestyle,
    BUSINESS: image => image.business,
    NONE: image => image
};

const ServiceFilter1 = props => {
    const [state, setState] = useState({
        list: images,
        filterKey: "NONE"
    });

    const { list, filterKey } = state;
    const filteredList = list.filter(FILTER_DEFS[filterKey]);
    return (
        <>
            <section class="gallery-section">
                <div class="sec-bg" style={{ backgroundImage: "url(" + gallerybg + ")" }}></div>
                <div class="sortable-masonry">

                    <div class="auto-container">
                        <div class="sec-title light text-center">
                            <div class="sub-title">Portfolio</div>
                            <h2>See What Kind Of <br />Work We Have Done</h2>
                        </div>
                        {/* <!--Filter--> */}
                        <div class="filters text-center light">
                            <ul class="filter-tabs filter-btns">
                            <li class="active filter" onClick={() => setState({ ...state, filterKey: "NONE" })}><span>Web Portfolio</span></li>
                                <li class="filter" onClick={() => setState({ ...state, filterKey: "ECOMMERCE" })}><span>Ecommerce</span></li>
                                <li class="filter" onClick={() => setState({ ...state, filterKey: "SERVICES" })}><span>Services </span></li>
                                <li class="filter" onClick={() => setState({ ...state, filterKey: "LIFESTYLE" })}><span>Lifestyle</span></li>
                                <li class="filter" onClick={() => setState({ ...state, filterKey: "BUSINESS" })}><span>Business</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="auto-container">
                        <div class="items-container row">
                            {/* <!-- Gallery Block One --> */}
                            {filteredList.map(image => (
                                <div class="col-lg-4 col-md-6 gallery-block-one" key={image.id}>
                                    <div class="inner-box">
                                        <div class="image">
                                            <img src={image.imgUrl} alt="" />
                                        </div>
                                        <div class="caption-title">
                                            <Link to={`/${image.name.toLowerCase().replace(/\s+/g, '')}`}>
                                            <h5>{image.name}</h5>
                                            <h3 style={{minWidth: '180px', color: '#111'}}>{image.industry}</h3>
                                            <div class="view-project"><Link data-fancybox="example gallery" to={`/${image.name.toLowerCase().replace(/\s+/g, '')}`} class="zoom-btn"><span>+</span></Link></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceFilter1;
