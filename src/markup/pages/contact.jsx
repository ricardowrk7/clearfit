import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import GoogleMaps from "simple-react-google-maps";
// import { REACT_APP_GOOGLE_API_KEY } from './config'

const aboutbg = require('./../../assets/images/background/image-11.jpg');




class Contact extends Component {

    render() {
        console.log(process.env)
        return (
            <>
                <Header />
                

                {/* <!--Search Popup--> */}
                <div id="search-popup" className="search-popup">
                    <div className="close-search theme-btn"><span className="flaticon-cancel"></span></div>
                    <div className="popup-inner">
                        <div className="overlay-layer"></div>
                        <div className="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div className="form-group">
                                    <fieldset>
                                        <input type="search" className="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" className="theme-btn"/>
                                    </fieldset>
                                </div>
                            </form>
                            <br/>
                            <h3>Recent Search Keywords</h3>
                            <ul className="recent-searches">
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
                <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Contact Us</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Contact</li>
                        </ul>
                    </div>

                </section>

                {/* <!-- Map Section --> */}
                {/* <!-- Map Section --> */}
                <section className="map-section">
                    <div className="map-column">
                        <GoogleMaps
                            apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
                            style={{ height: "800px", width: "100%" }}
                            zoom={12}
                            center={{ lat: 40.055660, lng: -83.047060 }}
                            markers={{ lat: 40.055660, lng: -83.047060 }} //optional
                        />
                    </div>
                </section>

                {/* <!-- Contact Section Two --> */}
                <section className="contact-section-two">
                    <div className="auto-container">
                        <div className="contact-info-area">
                            <div className="contact-info">
                                <div className="row">
                                    <div className="info-column col-lg-4">
                                        <div className="icon-box">
                                            <div className="icon"><span className="flaticon-email-6"></span></div>
                                            <h3>Email Address</h3>
                                            <ul>
                                                <li><Link to={'mailto:info@webmail.com'}>info@clearfitllc.com</Link></li>
                                                {/* <li><Link to={'/mailto:info@webmail.com'}>jason.maynard@clearfitllc.com</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info-column col-lg-4">
                                        <div className="icon-box">
                                            <div className="icon"><span className="flaticon-call-1"></span></div>
                                            <h3>Phone Number</h3>
                                            <ul>
                                                <li><Link to={'/tel:+16144704134'}>+1 614-470-4134</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="info-column col-lg-4">
                                        <div className="icon-box">
                                            <div className="icon"><span className="flaticon-location"></span></div>
                                            <h3>Office Address</h3>
                                            <ul>
                                                <li>1060 Weybridge Rd <br/>Columbus, OH</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-area">
                            <div className="sec-title text-center">
                                <div className="sub-title">Write Here</div>
                                <h2>Get In Touch</h2>
                            </div>
                            {/* <!-- Contact Form--> */}
                            <div className="contact-form">
                                <form method="post" action="http://azim.commonsupport.com/Finandox/sendemail.php" id="contact-form">
                                    <div className="row clearfix">                                    
                                        <div className="col-md-6 form-group">
                                            <label for="name">Enter your name</label>
                                            <input type="text" name="username" id="name" placeholder="Enter name here......" required=""/>
                                            <i className="fas fa-user"></i>
                                        </div>
                                        
                                        <div className="col-md-6 form-group">
                                            <label for="email">Enter your email</label>
                                            <input type="email" name="email" id="email" placeholder="Enter email here......" required=""/>
                                            <i className="fas fa-envelope"></i>
                                        </div>
                
                                        <div className="col-md-12 form-group">
                                            <label for="message">Enter your message</label>
                                            <textarea name="message" id="message" placeholder="Enter message here......"></textarea>
                                            <i className="fas fa-edit"></i>
                                        </div>
                
                                        <div className="col-md-12 form-group">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Get In Touch</span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>






                <Footer />
            </>
        )
    }
}
export default Contact;