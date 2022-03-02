import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ServiceFilter1 from '../element/service-filter1'


const aboutbg = require('./../../assets/images/background/image-11.jpg');
// const casebg = require('./../../assets/images/background/image-14.jpg');

class Services1 extends Component {


    render() {
        return (
            <>
                 <Header/>

                 {/* <!--Search Popup--> */}
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        <div class="overlay-layer"></div>
                        <div class="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" class="theme-btn"/>
                                    </fieldset>
                                </div>
                            </form>
                            <br/>
                            <h3>Recent Search Keywords</h3>
                            <ul class="recent-searches">
                                <li><Link to={'/#'}>Finance</Link></li>
                                <li><Link to={'/#'}>Idea</Link></li>
                                <li><Link to={'/#'}>Service</Link></li>
                                <li><Link to={'/#'}>Growth</Link></li>
                                <li><Link to={'/#'}>Plan</Link></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                
                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>What We Do</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Services</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- Services Section Three --> */}
                <section class="services-section-three style-two">
                    <div class="auto-container">
                        <div class="row">
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box min-height">
                                    <div class="icon"><span class="flaticon-world"></span><span class="round-shape"></span></div>
                                    <h3>UI/UX Applications</h3>
                                    <div class="text">User experience and user interface design, or UX/UI, is the art of designing digital products tailored to the way humans think about and interact with technology. Fresh has established a proven, scientific process for creating experiences that fulfill user needs and satisfy business goals. </div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box min-height">
                                    <div class="icon"><span class="flaticon-money"></span><span class="round-shape"></span></div>
                                    <h3>Ecommerce</h3>
                                    <div class="text">Many companies have seen gains from e-commerce—but fewer have achieved the transformational results they seek. By combining digital expertise and strategy, we help businesses set and realize a bold vision for their online channels.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box min-height">
                                    <div class="icon"><span class="fab fa-cloudversify"></span><span class="round-shape"></span></div>
                                    <h3>Cloud Architecture</h3>
                                    <div class="text">For clients who want to move their services into the cloud, thinking through the underlying technology and software architecture is essential. Fresh cloud architects help you evaluate the components and structure you need, including front-end platforms, back-end platforms, cloud delivery, and your network approach.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box min-height">
                                    <div class="icon"><span class="fab fa-bitcoin"></span><span class="round-shape"></span></div>
                                    <h3>Blockchain</h3>
                                    <div class="text">Leverage our blockchain consulting services to harness the potential of blockchain and gain valuable insights on your projects spanning, DeFi, NFTs, Web3, and Metaverse. From ideation to selecting the right protocol, our team turns your aspirations into practical application.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box min-height">
                                    <div class="icon"><span class="fa fa-sitemap"></span><span class="round-shape"></span></div>
                                    <h3>Product Development Strategy</h3>
                                    <div class="text">Product development strategy connects to corporate strategy in every possible way including: technology platforms, product roadmaps, distribution channels, and customer segments.</div>
                                </div>
                            </div>
                            {/* <!-- Services Block One --> */}
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box min-height">
                                    <div class="icon"><span class="flaticon-notebook"></span><span class="round-shape"></span></div>
                                    <h3>Responsive Interface</h3>
                                    <div class="text">Every evolving business sees its user experience erode. Screens age. Priorities and preferences shift. Revive fatigued interfaces without disrupting operations — from incremental upgrades to total overhauls.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Case Studies --> */}
                <ServiceFilter1/>


                 <Footer/>
            </>
        )
    }
}
export default Services1;