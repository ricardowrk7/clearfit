import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Twitter from '../components/Twitter';
import About from '../components/aboutMe';
import Social from '../components/sidebar/social';

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const quotebg = require('./../../assets/images/background/image-17.jpg');
const blogsbg = require('./../../assets/images/background/image-16.jpg');
const addbg = require('./../../assets/images/background/image-15.jpg');


class BlogStandard extends Component {


    render() {
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
                        <h1>Blog Standard</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Blog</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}


                {/* <!-- Sidebar Page Container --> */}
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-8">
                                {/* <!-- News Block Two --> */}
                                <div className="news-block-two">
                                    <div className="inner-box">
                                        <div className="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-4.jpg')} alt=""/></Link></div>
                                        <div className="lower-content">
                                            <div className="category">Business</div>
                                            <ul className="post-meta">
                                                <li><Link to={'/#'}><i className="far fa-eye"></i>332 Views</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-comments"></i>35 Comments</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            </ul>
                                            <h2><Link to={'/blog-details'}>Product vs Project Mindset for Software Development.</Link></h2>
                                            <div className="text">Software development and project management have now been here for a while; long enough to have dedicated roles of a project manager whose only job is to keep things moving between developers.</div>
                                            <div className="wrapper">
                                                <div className="author-box">
                                                    <div className="thumb"><img src={require('../../assets/images/resource/thumb-5.jpg')} alt=""/></div>
                                                    <h5>by Steve Anderson</h5>
                                                </div>
                                                <div className="read-more"><Link to={'/blog-details'}><i className="fal fa-arrow-right"></i>Read More</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block Two --> */}
                                <div className="news-block-two">
                                    <div className="inner-box">
                                        <div className="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-5.jpg')} alt=""/></Link></div>
                                        <div className="lower-content">
                                            <div className="category">Business</div>
                                            <ul className="post-meta">
                                                <li><Link to={'/#'}><i className="far fa-eye"></i>332 Views</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-comments"></i>35 Comments</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            </ul>
                                            <h2><Link to={'/blog-details-1'}>What is Agile and why is it Important?</Link></h2>
                                            <div className="text">The definition of Agile is muddled over the years. Today, it mostly refers to developing software faster following some best practices and project management templates like Scrum {'&'} Kanban; also it’s many derivatives.</div>
                                            <div className="wrapper">
                                                <div className="author-box">
                                                    <div className="thumb"><img src={require('../../assets/images/resource/thumb-5.jpg')} alt=""/></div>
                                                    <h5>by Steve Anderson</h5>
                                                </div>
                                                <div className="read-more"><Link to={'/blog-details-1'}><i className="fal fa-arrow-right"></i>Read More</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block Two --> */}
                                <div className="news-block-two">
                                    <div className="inner-box">
                                        <div className="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-6.jpg')} alt=""/></Link></div>
                                        <div className="lower-content">
                                            <div className="category">Business</div>
                                            <ul className="post-meta">
                                                <li><Link to={'/#'}><i className="far fa-eye"></i>332 Views</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-comments"></i>35 Comments</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            </ul>
                                            <h2><Link to={'/blog-details-2'}>Five golden rules of software development.</Link></h2>
                                            <div className="text">As software developers, we love to see the world in terms of complicated problems we have learned in our college courses. There might be some algorithm you learned in your college degree that resonates with the requirements placed</div>
                                            <div className="wrapper">
                                                <div className="author-box">
                                                    <div className="thumb"><img src={require('../../assets/images/resource/thumb-5.jpg')} alt=""/></div>
                                                    <h5>by Steve Anderson</h5>
                                                </div>
                                                <div className="read-more"><Link to={'/blog-details-2'}><i className="fal fa-arrow-right"></i>Read More</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block Three --> */}
                                <div className="news-block-three">
                                    <div className="inner-box" style={{ backgroundImage: "url(" + quotebg + ")" }}>
                                        <div className="lower-content">
                                            <div className="quote"><span className="fa fa-quote-left"></span></div>
                                            <h2><Link to={'/blog-details'}>“Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</Link></h2>
                                            <ul className="post-meta">
                                                <li><Link to={'/#'}><i className="far fa-eye"></i>332 Views</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-comments"></i>35 Comments</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-calendar-alt"></i>26th March 2021</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- News Block Four --> */}
                                <div className="news-block-four">
                                    <div className="inner-box" style={{ backgroundImage: "url(" + blogsbg + ")" }}>
                                        <div className="lower-content">
                                            <div className="category">Business</div>
                                            <h2><Link to={'/blog-details'}>“ In order to be irreplaceable, one must always be different”</Link></h2>
                                            <ul className="post-meta">
                                                <li><Link to={'/#'}><i className="far fa-eye"></i>332 Views</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-comments"></i>35 Comments</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-pagination">
                                    <ul className="clearfix">
                                        <li><Link to={'/#'}><span className="fas fa-angle-double-left"></span></Link></li>
                                        <li><Link to={'/#'}>1</Link></li>
                                        <li className="active"><Link to={'/#'}>2</Link></li>
                                        <li><Link to={'/#'}>3</Link></li>
                                        <li><Link to={'/#'}>...</Link></li>
                                        <li><Link to={'/#'}>10</Link></li>
                                        <li><Link to={'/#'}><span className="fas fa-angle-double-right"></span></Link></li>
                                    </ul> 
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="sidebar">

                                    {/* <!-- About Widget --> */}
                                    <About />
                                    
                                    {/* <!-- Search --> */}
                                    <div className="sidebar-widget search-box">
                                        <div className="sidebar-title"><h3>Search Objects</h3></div>
                                        <form method="post" action="http://azim.commonsupport.com/Finandox/contact.html">
                                            <div className="form-group">
                                                <input type="search" name="search-field" value="" placeholder="Search your keyword..." required=""/>
                                                <button type="submit"><span className="icon far fa-search"></span></button>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <!-- Post Widget --> */}
                                    {/* <div className="sidebar-widget popular-posts">
                                        <div className="sidebar-title"><h3>Popular Feeds</h3></div>
                                        <div className="widget-content">
                                            
                                            
                                            <div className="news-post">
                                                <div className="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-8.jpg')} data-src="" alt=""/></Link></div>
                                                <div className="date"><span className="fa fa-calendar-alt"></span> Feb 25, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/>cing elit, sed do. </Link></h4>
                                            </div>
                                            
                                            <div className="news-post">
                                                <div className="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-9.jpg')} alt=""/></Link></div>
                                                <div className="date"><span className="fa fa-calendar-alt"></span> Feb 20, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/>cing elit, sed do.</Link></h4>
                                            </div>
                                            
                                            <div className="news-post">
                                                <div className="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-10.jpg')} alt=""/></Link></div>
                                                <div className="date"><span className="fa fa-calendar-alt"></span> Feb 14, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/> cing elit, sed do.</Link></h4>
                                            </div>
                                            
                                            <div className="news-post">
                                                <div className="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-11.jpg')}  alt=""/></Link></div>
                                                <div className="date"><span className="fa fa-calendar-alt"></span> Feb 14, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/> cing elit, sed do.</Link></h4>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* <!-- Category Widget --> */}
                                    <div className="sidebar-widget categories">
                                        <div className="sidebar-title"><h3>Categories</h3></div>
                                        <div className="widget-content">
                                            <ul>
                                                <li className="current"><Link to={'/blog-details'}>Business</Link> <span className="total-post">26</span></li>
                                                <li><Link to={'/blog-details'}>Consultant</Link> <span className="total-post">30</span></li>
                                                <li><Link to={'/blog-details'}>Creative</Link> <span className="total-post">71</span></li>
                                                <li><Link to={'/blog-details'}>UI/UX</Link> <span className="total-post">68</span></li>
                                                <li><Link to={'/blog-details'}>Technology</Link><span className="total-post">70</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- Social Icon --> */}
                                    <Social />


                                    {/* <!-- Twitter Widget --> */}
                                    <Twitter />

                                    {/* <!-- Gallery Widget --> */}
                                    <div className="sidebar-widget instagram-widget">
                                        <div className="sidebar-title"><h3>Instagram Feeds</h3></div>
                                        <div className="inner-box">
                                            <div className="wrapper-box">
                                                <div className="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-1.jpg')} alt=""/>
                                                    <div className="overlay-link"><Link to={'/assets/images/gallery/instagram-1.jpg'} className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div className="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-2.jpg')} alt=""/>
                                                    <div className="overlay-link"><Link to={'/assets/images/gallery/instagram-2.jpg'} className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div className="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-3.jpg')} alt=""/>
                                                    <div className="overlay-link"><Link to={'/assets/images/gallery/instagram-3.jpg'} className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div className="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-4.jpg')} alt=""/>
                                                    <div className="overlay-link"><Link to={'/assets/images/gallery/instagram-4.jpg'} className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div className="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-5.jpg')} alt=""/>
                                                    <div className="overlay-link"><Link to={'/assets/images/gallery/instagram-5.jpg'} className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div className="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-6.jpg')} alt=""/>
                                                    <div className="overlay-link"><Link to={'/assets/images/gallery/instagram-6.jpg'} className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div className="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-7.jpg')} alt=""/>
                                                    <div className="overlay-link"><Link to={'/assets/images/gallery/instagram-7.jpg'} className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div className="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-8.jpg')} alt=""/>
                                                    <div className="overlay-link"><Link to={'/assets/images/gallery/instagram-8.jpg'} className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div className="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-9.jpg')} alt=""/>
                                                    <div className="overlay-link"><Link to={'/assets/images/gallery/instagram-9.jpg'} className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus"></span></Link></div>
                                                </div>
                                            </div>
                                            {/* <!-- /.gallery-wrapper --> */}
                                        </div>
                                    </div>

                                    {/* <!-- Tags Widget --> */}
                                    {/* <div className="sidebar-widget popular-tags">
                                        <div className="sidebar-title"><h3>Popular Tags</h3></div>
                                        <div className="widget-content">
                                            <ul className="clearfix">
                                                <li><Link to={'/blog-details'}><span>Popular</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>desgin</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>ux</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>usability</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>develop</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>icon</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>business</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>consult</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>kit</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>keyboard</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>mouse</span></Link></li>
                                                <li><Link to={'/blog-details'}><span>tech</span></Link></li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    {/* <!-- Add Banner Widget --> */}
                                    <div className="sidebar-widget">
                                        <div className="add-banner-widget" style={{ backgroundImage: "url(" + addbg + ")" }}>
                                            <div className="content">
                                                <h5>starting at</h5>
                                                <h3>$80/hour</h3>
                                            </div>
                                        </div>
                                    </div>              
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
}
export default BlogStandard;