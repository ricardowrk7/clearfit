import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    externalLink(link) {
        window.location.href = link;
    }
    render() {
        return (
            <>
                <footer class="main-footer">
                    <div class="auto-container">

                        <div class="widgets-section">
                            <div class="row clearfix">


                                <div class="column col-lg-4">
                                    <div class="footer-widget logo-widget">
                                        <div class="widget-content">
                                            <div class="footer-logo">
                                                <Link to="index.html"><img class="" src={require('../../assets/images/footer-logo.png')} alt="" /></Link>
                                            </div>
                                            <div class="text">Clear Fit software consulting can help your business over the finish line. Any software project or cloud architecture we can handle it with ease.</div>
                                            <ul class="social-links clearfix">
                                                <li><Link onClick={() => this.externalLink('https://www.facebook.com/Alien4Hire')} to={''}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link onClick={() => this.externalLink('https://twitter.com/ClearFitLLC')} to={''}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link onClick={() => this.externalLink('https://www.linkedin.com/in/jason-maynard-54b538ba/')} to={''}><span class="fab fa-linkedin"></span></Link></li>
                                                <li><Link onClick={() => this.externalLink('https://www.instagram.com/alien4hire12/')} to={''}><span class="fab fa-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div class="column col-lg-4">
                                    <div class="footer-widget links-widget">
                                        <div class="widget-content">
                                            <h3>Links</h3>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/'}>Home</Link></li>
                                                        <li><Link to={'/about'}>About</Link></li>
                                                        <li><Link to={'/services-1'}>Services</Link></li>
                                                        <li><Link to={'/portfolio-1'}>Portfolio</Link></li>
                                                        <li><Link to={'/contact'}>Pricing</Link></li>
                                                        <li><Link to={'/contact'}>Contact</Link></li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <ul>
                                                        <li><Link to={'/blog-standard'}>News</Link></li>
                                                        <li><Link to={'/about'}>Technologies</Link></li>
                                                        <li><Link to={'/services-1'}>Case Study</Link></li>
                                                        <li><Link to={'/faq'}>Terms</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="column col-lg-4">
                                    <div class="footer-widget instagram-widget">
                                        <h3>Photo Showcase</h3>
                                        <div class="inner-box">
                                            <div class="wrapper-box">
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-1.jpg')} alt="" />
                                                    
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-1.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-2.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-2.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-3.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-3.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-4.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-4.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-5.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-5.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-6.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-6.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-7.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-7.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-8.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-8.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-9.jpg')} alt="" />
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-9.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="auto-container">
                        <div class="footer-bottom">
                            <div class="copyright">Copyright By<Link to={'/#'}> ClearFit</Link> - 2021</div>
                        </div>
                    </div>
                </footer>


            </>
        );
    }
}

export default Footer;