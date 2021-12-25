import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Twitter from '../components/Twitter';
import About from '../components/aboutMe';
import Social from '../components/sidebar/social';

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const addbg = require('./../../assets/images/background/image-15.jpg');


class BlogDestailsTwo extends Component {


    render() {
        return (
            <>
                <Header />



                {/* Search Popup */}
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
                {/* Page Banner Section */}
                <section className="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div className="bottom-rotten-curve alternate"></div>

                    <div className="auto-container">
                        <h1>Blog Details</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li className="active">Blog</li>
                        </ul>
                    </div>

                </section>

                {/* Sidebar Page Container */}
                <div className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-8">
                            {/* News Block Two */}
                                <div className="news-block-two blog-single-post">
                                    <div className="inner-box">                            
                                        <div className="lower-content">
                                            <div className="category">Business</div>
                                            <ul className="post-meta">
                                                <li><Link to={'/#'}><i className="far fa-eye"></i>332 Views</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-comments"></i>35 Comments</Link></li>
                                                <li><Link to={'/#'}><i className="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            </ul>
                                            <h2>Five golden rules of software development</h2>
                                            <div className="text">
                                            <br/>
                                            <p>
                                                <ul className="list">
                                                    <li><i className="fas fa-check"></i>Choose simplicity over complexity</li>
                                                    <li><i className="fas fa-check"></i>Don’t forget who are you building for</li>
                                                    <li><i className="fas fa-check"></i>Don’t re-invent the wheel</li>
                                                    <li><i className="fas fa-check"></i>Don’t forget about maintenance</li>
                                                    <li><i className="fas fa-check"></i>Documentation is not optional</li>
                                                </ul>
                                            </p></div>
                                            <div className="image"><Link to={'/#'}><img src={require('../../assets/images/custom/blog-4.png')} alt=""/></Link></div>
                                            <div className="text-block-wrapper">
                                                <div className="text-block">
                                                    <h3>Choose simplicity over complexity</h3>
                                                    <div className="text">
                                                        As software developers, we love to see the world in terms of complicated problems we have learned in our college courses. There might be some algorithm you learned in your college degree that resonates with the requirements placed in front of you. Obviously, this instinct and knowledge have real value, but always take a break and ask yourself, is this adding any real value to the solution, or is it simply a problem I would like to solve as a classical software problem. There is no black and white distinction between what’s right and what’s wrong, these decisions are highly contextual and subjective. But over the years, you’ll notice that the simple solutions stick.
                                                    </div>
                                                </div>
                                                <div className="text-block">
                                                    <h3>Don’t forget who are you building for</h3>
                                                    <div className="text">
                                                        We as developers fall into the trap of thinking that all users have the same understanding of the product as ourselves. After all, it’s fully developed and right there in your hands now, what more could there be? The thing we forget is, we have probably spent months engineering something and it could have layers upon layers of complexity associated with it. And all of this is introduced to your users in a matter of minutes, if not seconds. Users are not going to understand and appreciate the depth of your product unless they start digging through it. This does not mean we make shallow products, but we keep the target demographic in mind while designing the onboarding experience. Professional users need more raw data, but average users are happy just with the derived insights.
                                                    </div>
                                                </div>
                                                <div className="text-block">
                                                    <h3>Don’t re-invent the wheel</h3>
                                                    <div className="text">
                                                        We always build software upon already existing layers of abstraction. Like if you’re developing an ERP software, you’re worried about the application logic and not how exactly does the database store your data in binary format. You choose a DB engine and move on with development. If your estimate for some common problem is taking too much time, you could most likely use some open-source package or some SAAS service to solve that problem for you.
                                                    </div>
                                                    <div className="text">
                                                    There is an exception to this, people who are developing core technologies like database engines or very niche development tools or such SAAS offerings have to look in such nitty-gritty because that’s their unique value proposition.
                                                    <br/>
                                                    A general rule of thumb is to ask yourself, “Am I a problem company?” 
                                                    If the answer to that is no, you’re better off using some third-party solution.
                                                    <br/><br/>
                                                    If for example, Netflix needed to scale its services to meet the demands of a growing customer base, it would ask “Am I a cloud infrastructure company ?”
                                                    The answer to this question was a No, they’re a media streaming company, so they focus their energy on providing a good media experience. Their solution was to use exiting cloud providers like AWS, although they’re more expensive in the long run than owning servers.
                                                    With this, they could focus their resources on solving for their USP, which is proving the best streaming services. In this example, Netflix can probably let go of owning servers and infrastructure management, but they cannot outsource R{'&'}D in streaming protocols which are quintessential to their offering.
                                                    <br/><br/>
                                                    This is an age-old problem of build vs buy. The gist is you’re better off buying it if that’s not your USP.
                                                    <br/><br/>
                                                    Common examples are as follows,
                                                    Are we an Email Company? If not, use sendgrid, mailchimp, AWS SES, the list goes on.
                                                    Are we a Queuing Company? If not, use rabbitMQ, Kafka or AWS SQS, or something similar.
                                                    </div>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h5>by Hetmayar</h5>
                                                <div className="text">This is an age-old problem of build vs buy. The gist is you’re better off buying it if that’s not your USP.</div>
                                                <div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                                            </blockquote>
                                            <div className="text">
                                                <h4>Don’t forget about maintenance</h4>
                                                <div className="text">
                                                    <br/>Let’s face it, we’re developers, we love building new things, and we hate maintenance. Also, let’s face it, the world cannot run like this. We will always have legacy software as long as there is software. The general tendency of a corporate system would be to re-use existing investments than to make new ones if they partially solve the problem. This could be because of existing licenses, long-term contracts, special billing rates, volume licenses, and several other reasons.<br/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-8.jpg')}  alt=""/></Link></div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="text">
                                                        If you’ve built something piecing together a bunch of things you don’t fully understand like a Frankenstein, it’s going to come back to haunt you sooner or later. When we’re making design choices, there is value in choosing stable options. Popular softwares and operating systems have a stable or sometimes an LTS release along with a more recent nightly build which is more cutting edge and feature-packed.While we love to live on the cutting edge of software, while building tools that are intended to be handed over eventually, better to make design choices that age gracefully.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text">
                                            This does not only apply to the building blocks you choose but also to your application code. If code is not documented or does not follow a standard coding standard, you’ll have a hard time maintaining it down the road. <br/><br/>
                                            <h4>Documentation is not optional</h4>
                                            <br/>We hate it when we’re asked to document something. It feels like wasting time doing this while we could be out there building something new. But after some experience, you’ll hate it much more when you’re asked to take something up without the proper documentation. It’s a really bad experience when you have to read code to understand what a project is truly doing. It can save someone hours if not days to read a paragraph in clean English that tells you how to go about the code. The recommendation is to go one step ahead and not only write the documentation of what the code does but also write the design philosophy of why did you choose to solve the problem like this. Maybe you factored in additional constraints, maybe it was purely a cost-saving decision, whatever the reality is. We’re confident in the product we’re currently building but if we have to look at something we built even one year ago, this piece of documentation does help. Popular tools like Jira and Confluence make the process a bit better, but they have a cost associated with them. At the very least, have a good readme.md file at the root of your project or any major subfolder that describes how to use its contents. Good code comments also go a long way, just don’t make them redundant.
                                            <br/><br/>Hope you had a good read, we wish you the best of luck in your next development project.
                                            </div>
                                            <div className="post-share">
                                                <div className="left-column">
                                                    <h4>Releted Tags</h4>
                                                    <ul className="tag-list clearfix">
                                                        <li><Link to={'/blog-details'}><span>Popular</span></Link></li>
                                                        <li><Link to={'/blog-details'}><span>desgin</span></Link></li>
                                                        <li><Link to={'/blog-details'}><span>ux</span></Link></li>
                                                    </ul>
                                                </div>
                                                <div className="right-column">
                                                    <h4>Social Share</h4>
                                                    <ul className="social-links">
                                                        <li><Link to={'/#'}><span className="fab fa-facebook-f"></span></Link></li>
                                                        <li><Link to={'/#'}><span className="fab fa-twitter"></span></Link></li>
                                                        <li><Link to={'/#'}><span className="fab fa-behance"></span></Link></li>
                                                        <li><Link to={'/#'}><span className="fab fa-linkedin-in"></span></Link></li>
                                                        <li><Link to={'/#'}><span className="fab fa-youtube"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="blog-post-pagination">
                                                <div className="wrapper-box">
                                                    
                                                    <div className="prev-post">
                                                        <h5> Previous Post</h5>
                                                        <h4>What is Agile?</h4>
                                                    </div>

                                                    <div className="page-view"><span className="fa fa-th"></span></div>
                                                    
                                                    <div className="next-post">
                                                        <h5>Next Topic </h5>
                                                        <h4>Product vs Project</h4>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="related-post">
                                                <div className="group-title">
                                                    <h3>Related Post</h3>
                                                </div>
                                                <div className="row">
                                                    <div className="news-block-five col-md-6">
                                                        <div className="inner-box">
                                                            <div className="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-10.jpg')} alt=""/></Link></div>
                                                            <div className="lower-content">
                                                                <ul className="post-meta">
                                                                    <li><Link to={'/#'}><i className="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                                                </ul>
                                                                <h3><Link to={'/blog-details'}>What is Agile and why is it Important?</Link></h3>
                                                                <div className="text">The definition of Agile is muddled over the years.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="news-block-five col-md-6">
                                                        <div className="inner-box">
                                                            <div className="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-11.jpg')} alt=""/></Link></div>
                                                            <div className="lower-content">
                                                                <ul className="post-meta">
                                                                    <li><Link to={'/#'}><i className="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                                                </ul>
                                                                <h3><Link to={'/blog-details'}>Product vs Project Mindset for Software Development.</Link></h3>
                                                                <div className="text">As software developers, we love to see the world in terms of complicated</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                        
                                            </div>
                                            <div className="author-box-two">
                                                <div className="wrapper-area">
                                                    <div className="img-box">
                                                        <img src={require('../../assets/images/resource/author-3.jpg')} alt="Awesome "/>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Written by</h5>
                                                        <h3>Steve Anderson</h3>
                                                        <div className="text">Articles in Forbes, Entrepreneur and Business Insider. I have been a content writer with ClearFit for 2 years now and work will work closely with you to get quality content on your website.</div>
                                                    </div>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <div className="sidebar-widget popular-posts">
                                        <div className="sidebar-title"><h3>Popular Feeds</h3></div>
                                        <div className="widget-content">
                                            
                                            {/* <!--News Post--> */}
                                            <div className="news-post">
                                                <div className="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-8.jpg')} data-src="" alt=""/></Link></div>
                                                <div className="date"><span className="fa fa-calendar-alt"></span> Feb 25, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/>cing elit, sed do. </Link></h4>
                                            </div>
                                            {/* <!--News Post--> */}
                                            <div className="news-post">
                                                <div className="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-9.jpg')} alt=""/></Link></div>
                                                <div className="date"><span className="fa fa-calendar-alt"></span> Feb 20, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/>cing elit, sed do.</Link></h4>
                                            </div>
                                            {/* <!--News Post--> */}
                                            <div className="news-post">
                                                <div className="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-10.jpg')} alt=""/></Link></div>
                                                <div className="date"><span className="fa fa-calendar-alt"></span> Feb 14, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/> cing elit, sed do.</Link></h4>
                                            </div>
                                            {/* <!--News Post--> */}
                                            <div className="news-post">
                                                <div className="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-11.jpg')}  alt=""/></Link></div>
                                                <div className="date"><span className="fa fa-calendar-alt"></span> Feb 14, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/> cing elit, sed do.</Link></h4>
                                            </div>
                                        </div>
                                    </div>

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
                                    <div className="sidebar-widget popular-tags">
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
                                    </div>

                                    {/* <!-- Add Banner Widget --> */}
                                    <div className="sidebar-widget">
                                        <div className="add-banner-widget" style={{ backgroundImage: "url(" + addbg + ")" }}>
                                            <div className="content">
                                                <h5>350x600</h5>
                                                <h3>Add Banner</h3>
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
export default BlogDestailsTwo;