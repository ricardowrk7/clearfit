import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../assets/css/slider.css';

const slides = [
    {
        title: "Build Your Business Better",
        btnLearn: "-- Learn More --",
        finan: "Design. Develop.",
        dox: "Test. Launch",
        btnService: "-- Our Services --",
        image: require('./../../assets/images/main-slider/2.jpg'),
    },
];


class HomeSlider2 extends Component {


    render() {
        return (
            <>
                <Slider className="slider-wrapper" autoplay>
                    {slides.map((slide, index) =>
                        <div key={index} className="slider-content" style={{ background: `url('${slide.image}') no-repeat center center` }}>
                            <div className="inner text-center inner-2 header-text-12">
                                <h1>{slide.title}</h1>
                                <h2>{slide.finan} <span>{slide.dox} </span></h2>
                                <div className="btn-box">
                                    <Link to={'/services-1'} className="theme-btn btn-style-one"><span className="btn-title">{slide.btnService}</span>
                                    </Link><Link to={'/about'} className="theme-btn btn-style-two"><span className="btn-title">{slide.btnLearn}</span></Link></div>
                            </div>
                        </div>)}
                </Slider>

                
                {/* <section className="banner-section style-two">
                    <div className="banner-carousel theme_carousel owl-theme owl-carousel" data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'>

                        <div className="slide-item">
                            <div className="image-layer lazy-image" data-bg="url('assets/images/main-slider/2.jpg')"></div>

                            <div className="auto-container">
                                <div className="content-box">
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Prosper In This <br />Volatile Fund</h2>
                                    <div className="btn-box"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">-- Our Services --</span></Link><Link to={'/#'} className="theme-btn btn-style-two"><span className="btn-title">-- Learn More --</span></Link></div>
                                </div>
                            </div>
                        </div>

                        <div className="slide-item">
                            <div className="image-layer lazy-image" data-bg="url('assets/images/main-slider/6.jpg')"></div>

                            <div className="auto-container">
                                <div className="content-box">
                                    <h3>Making Your Business Idea</h3>
                                    <h2>Prosper In This <br />Volatile Fund</h2>
                                    <div className="btn-box"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">-- Our Services --</span></Link><Link to={'/#'} className="theme-btn btn-style-two"><span className="btn-title">-- Learn More --</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                



            </>
        )
    }
}
export default HomeSlider2;