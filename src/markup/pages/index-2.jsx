import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Team from '../components/Team';
import Header2 from '../layout/header2';
import HomeSlider2 from '../element/home-slider2';
import Footer from '../layout/footer';
import Testimonial1 from '../element/testimonial1'
import VideoPopup2 from './../element/video-popup2'
import '../../assets/css/color-2.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const counterbg1 = require('./../../assets/images/background/image-5.jpg');
const touchbg1 = require('./../../assets/images/background/image-8.jpg');



class Index2 extends Component {


    render() {
        return (
            <>
                <Header2 />


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
                                        <input type="submit" value="Search Now!" class="theme-btn" />
                                    </fieldset>
                                </div>
                            </form>
                            <br />
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

                <HomeSlider2 />


                {/* <!-- Feature Section --> */}
                <section class="feature-section">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row">
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="fab fa-react"></span></div>
                                            <h5>React</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="fab fa-node"></span></div>
                                            <h5>Node</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="fab fa-battle-net"></span></div>
                                            <h5>.Net</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-world"></span></div>
                                            <h5>UI/UX Design</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="fab fa-aws"></span></div>
                                            <h5>AWS</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="fab fa-app-store-ios"></span></div>
                                            <h5>React Native</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- About Section Two --> */}
                <section class="about-section-two">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="content-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="sec-title">
                                        <div class="sub-title">About Us</div>
                                        <h2>We Work With <br />You To Address</h2>
                                        <div class="text">Your business has an new idea, but maybe you're new to the software space. Our team of developers are trained in all of the latest in web development technologies. Modern software is custom tailored for your business, we focus on a value add strategy where we help you to design your software to get the most bang for your buck.</div>
                                    </div>
                                    <div class="author-info">
                                        <div class="wrapper-box">
                                            <h2>Jason C. Maynard</h2>
                                            <div class="designation">Founder</div>
                                            <div class="text">The most important aspect of software development projects isn’t programming, it’s communication. Lets talk.</div>
                                        </div>
                                        <div class="signature"><img src={require('../../assets/images/resource/signature-2.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/FaceApp_1637718250873.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- Funfacts Section --> */}
                <section class="funfacts-section" style={{ backgroundImage: "url(" + counterbg1 + ")" }}>
                    <div class="auto-container">
                        {/* <!-- Fact Counter --> */}
                        <div class="fact-counter-two">
                            <div class="row">
                                {/* <!--Column--> */}
                                <div class="column counter-column col-xl-3 col-lg-6">
                                    <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div class="content">
                                            <div class="icon"><img src={require('../../assets/images/icons/icon-12.png')} alt="" /></div>
                                            <div class="count-outer count-box">
                                                <CountUp
                                                    end={100}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor
                                                            onChange={start}
                                                            delayedCall
                                                        >
                                                            <span class="count-text" ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <span>%</span>
                                            </div>
                                            <div class="counter-title">Data Monitoring</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Column--> */}
                                <div class="column counter-column col-xl-3 col-lg-6">
                                    <div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                        <div class="content">
                                            <div class="icon"><img src={require('../../assets/images/icons/icon-13.png')} alt="" /></div>
                                            <div class="count-outer count-box">
                                                <CountUp
                                                    end={170}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor
                                                            onChange={start}
                                                            delayedCall
                                                        >
                                                            <span class="count-text" ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <span>%</span>
                                            </div>
                                            <div class="counter-title">Conversions</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Column--> */}
                                <div class="column counter-column col-xl-3 col-lg-6">
                                    <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                        <div class="content">
                                            <div class="icon"><img src={require('../../assets/images/icons/icon-14.png')} alt="" /></div>
                                            <div class="count-outer count-box">
                                                <CountUp
                                                    end={99}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor
                                                            onChange={start}
                                                            delayedCall
                                                        >
                                                            <span class="count-text" ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <span>%</span>
                                            </div>
                                            <div class="counter-title">Customer Satisfaction</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!--Column--> */}
                                <div class="column counter-column col-xl-3 col-lg-6">
                                    <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                        <div class="content">
                                            <div class="icon"><img src={require('../../assets/images/icons/icon-15.png')} alt="" /></div>
                                            <div class="count-outer count-box">
                                                <CountUp
                                                    end={73}
                                                    redraw={true}
                                                >
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor
                                                            onChange={start}
                                                            delayedCall
                                                        >
                                                            <span class="count-text" ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                                <span>%</span>
                                            </div>
                                            <div class="counter-title">Development Cost</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Statistic Section --> */}
                <section class="statistic-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="graph"><img src={require('../../assets/images/resource/graph.png')} alt="" /></div>
                            </div>
                            <div class="col-lg-6">
                                <div class="sec-title">
                                    <div class="sub-title">Our Stategy</div>
                                    <h2>We Add Value <br /> To Your Project </h2>
                                </div>
                                <div class="progress-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <h5>Business Planing</h5>
                                    <div class="bar">
                                        <div data-percent="74%"><div class="count-text">74%</div></div>
                                        <ProgressBar  className="count-bar" now={74} />
                                    </div>
                                </div>
                                <div class="progress-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <h5>Online Services</h5>
                                    <div class="bar">
                                    <ProgressBar  className="count-bar" now={64} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Services Section Two --> */}
                <section class="services-section-two">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="left-column" style={{ backgroundImage: "url(" + touchbg1 + ")" }}>
                                <div class="sec-title light">
                                    <div class="sub-title">Get In Touch</div>
                                    <h2>Contact Us Or <br /> Share Details</h2>
                                </div>
                                {/* <!-- Contact Form--> */}
                                <div class="contact-form">
                                    <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                        <div class="row clearfix">
                                            <div class="col-md-12 form-group">
                                                <input type="text" name="username" placeholder="Enter name here......" required="" />
                                                <i class="fas fa-user"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <input type="email" name="email" placeholder="Enter email here......" required="" />
                                                <i class="fas fa-envelope"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <textarea name="message" placeholder="Enter message here......"></textarea>
                                                <i class="fas fa-edit"></i>
                                            </div>

                                            <div class="col-md-12 form-group">
                                                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Get In Touch</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="right-column">
                                <div class="services-content">
                                    <div class="sec-title">
                                        <div class="sub-title">Our Services</div>
                                        <h2>What We Really<br /> Do Here.</h2>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-16.png')} alt="" /></div>
                                        <h2>Software Development</h2>
                                        <div class="text">Over 500 brands have trusted us to build their online businesses using the most powerful platforms to achieve results. </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-17.png')} alt="" /></div>
                                        <h2>UI/UX Design</h2>
                                        <div class="text">Front end technologies are what drive the best user experiences on the web today. Our network of engineers are experts in the modern web. </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-18.png')} alt="" /></div>
                                        <h2>Cloud Architecture</h2>
                                        <div class="text">Take advantage of powerful cloud environments and how your organization can move to modernized data architectures. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Gallery Section --> */}
                <section class="gallery-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Portfolio</div>
                            <h2>Case Study</h2>
                        </div>
                        <div class="row">
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/portfolio/DiverciTea.png')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Divercitea</h5>
                                        <h3><Link to={'/#'}>Online Food Ordering</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/portfolio/AngelsEyewear.png')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Angels Eyewear</h5>
                                        <h3><Link to={'/#'}>eCommerce</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/portfolio/SEO.png')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Cbus Social</h5>
                                        <h3><Link to={'/#'}>Marketing</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/portfolio/vohnt-carcare.png')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Vohnt</h5>
                                        <h3><Link to={'/#'}>Carcare</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/portfolio/art-instalation.png')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Pierre Jean-Louis</h5>
                                        <h3><Link to={'/#'}>Art Instalations</Link></h3>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Gallery Block One --> */}
                            <div class="col-lg-4 col-md-6 style-two gallery-block-one">
                                <div class="inner-box">
                                    <div class="image">
                                        <img src={require('../../assets/images/portfolio/garage-service.png')} alt="" />
                                    </div>
                                    <div class="caption-title">
                                        <h5>Jess Garage Doors</h5>
                                        <h3><Link to={'/#'}>Construction</Link></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Video Section --> */}

                <VideoPopup2 />
                {/* <!-- Team Section --> */}
                <section class="team-section">
                    <Team />
                </section>

                {/* <!-- Testimonial Section --> */}
                <Testimonial1 />

                {/* <!-- News Section --> */}
                <section class="news-section">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">News</div>
                            <h2>News From Resource</h2>
                        </div>
                        <div class="row">
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-1.jpg')} data-src="assets/images/resource/news-1.jpg" alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-2.jpg')} data-src="assets/images/resource/news-2.jpg" alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>Business consultant is involved in the planning.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- News Block One --> */}
                            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-3.jpg')} alt="" /></Link></div>
                                    <div class="lower-content">
                                        <div class="category">Business</div>
                                        <ul class="post-meta">
                                            <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>28th March 2020</Link></li>
                                            <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                        </ul>
                                        <h3><Link to={'/blog-details'}>Business consultant is a professional who analyzes.</Link></h3>
                                        <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>





                <Footer />
            </>
        )
    }
}
export default Index2;