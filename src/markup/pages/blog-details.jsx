import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const addbg = require('./../../assets/images/background/image-15.jpg');


class BlogDestails extends Component {


    render() {
        return (
            <>
                <Header />



                {/* Search Popup */}
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
                {/* Page Banner Section */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>Blog Details</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Blog</li>
                        </ul>
                    </div>

                </section>

                {/* Sidebar Page Container */}
                <div class="sidebar-page-container">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-8">
                            {/* News Block Two */}
                                <div class="news-block-two blog-single-post">
                                    <div class="inner-box">                            
                                        <div class="lower-content">
                                            <div class="category">Business</div>
                                            <ul class="post-meta">
                                                <li><Link to={'/#'}><i class="far fa-eye"></i>332 Views</Link></li>
                                                <li><Link to={'/#'}><i class="far fa-comments"></i>35 Comments</Link></li>
                                                <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                            </ul>
                                            <h2>Product vs Project Mindset for Software Development.</h2>
                                            <div class="text">
                                            <br/>
                                            <h3>What is a Project Mindset?</h3>
                                            <br/>
                                            <p>
                                                Software development and project management have now been here for a while; long <br/> enough to have dedicated roles of a project manager whose only job is to keep things <br/> moving between developers. The environment we’ve made focuses a lot on getting things<br/>done. It can be something like how many tickets have we resolved this week, how many <br/> user stories have we been able to complete in the last month etc. We have traditionally <br/>chosen to track things this way because the underlying metric is much easier to track.<br/> Developers get to say “We completed X no of tasks” and call it a day.<br/><br/>


                                                The focus is truly on <span style={{fontWeight: 'bold'}}>getting things done</span> in the estimated time. Somehow we have come <br/>to spend a lot of time and energy in estimating the effort we’re going to require to get <br/> something rolling without fully knowing the details of the implementation. More often<br/> than not, even though we literally call it an “Estimate”, we attach very real deadlines to <br/>those estimates. And when the deadlines are not met, the scenario turns ugly.<br/><br/>


                                                A project mindset is mainly found in freelancers who don’t have any long-term<br/> commitment to the product vision. They are onboarded to simply deliver one specific<br/> thing like a design or a logo and after their delivery, they are completely off the hook for <br/>any future consequences. In a nutshell, the project mindset tracks the output of an<br/> assignment.
                                            </p></div>
                                            <div class="image"><Link to={'/#'}><img src={require('../../assets/images/custom/blog-1.png')} alt=""/></Link></div>
                                            <div class="text-block-wrapper">
                                                <div class="text-block">
                                                    <h3>What is a Product Mindset?</h3>
                                                    <div class="text">
                                                        A product mindset is a fundamental shift in the project management paradigm and one <br/>that the stakeholders 
                                                        have to learn to get comfortable with. It changes the whole idea of <br/>delivering a project to delivering an outcome. We start by defining the 
                                                        outcome of what<br/> we want to achieve at a business level. That could be an abstract goal like getting more <br/>customers to buy our products, reducing our onboarding dropoff, increasing paying <br/>customers, etc. <br/><br/>
                                                        With this outcome in mind, we start to propose a solution. Since the solution is yet <br/> unknown and whether the solution will work or not is unknown, 
                                                        there can be no fixed <br/>timeline associated with it. We can make a POC and check whether it works, deploy a <br/>version of our idea using an A/B test and check its results or run several other <br/>experiments with it. 
                                                        Only when we have a clear idea of what a solution might look like and <br/>its technical feasibility do we commit to a timeline.<br/><br/>
                                                    </div>
                                                </div>
                                                <div class="text-block">
                                                    <h3>Benefits of the Product Mindset</h3>
                                                    <div class="text">
                                                    The advantage is that we get to try a couple of solutions without the restriction of <br/>timelines and see which one fits. In the real world, nothing goes as planned and there are <br/>always revisions. What is the point of making estimates and living by them if we’re unclear<br/> if they work? This new environment gives developers the freedom to try out things<br/> without a strict deadline and check which solutions fit the best. With the project mindset,<br/>the developer would simply implement the easiest solution and mark the ticket resolved.<br/> The actual deliverable can adapt multiple times till the original outcome we desired is not <br/>being met.<br/><br/>
                                                    </div>
                                                </div>
                                                <div class="text-block">
                                                    <h3>The Management Shift</h3>
                                                    <div class="text">
                                                        Going with a product mindset is more a shift in how the management thinks than a choice <br/>developers make. This idea of letting go of estimates might not be for everyone and <br/>involves a great deal of human trust in your team. It also means as a business you’re taking<br/> a step back and valuing your product quality over other things. There is a chance<br/> you’ll be late to the market but you’ll likely have a much better product at hand.<br/>
                                                    </div>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h5>by Hetmayar</h5>
                                                <div class="text">If what you’re building for is a new problem statement or requires some level of research and testing, or maybe an abstract goal like “Increase conversion”, you’re better off with the Product Mindset.</div>
                                                <div class="quote-icon"><span class="fa fa-quote-left"></span></div>
                                            </blockquote>
                                            <div class="text">
                                                <h4>What to choose?</h4>
                                                <div className="text">
                                                    <br/>If your goal is well-defined and repeatable, traditional project management works well, <br/>and we don’t need to change that. If what you’re building for is a new problem statement<br/> or requires some level of research and testing, or maybe an abstract goal like “Increase<br/>conversion”, you’re better off with the Product Mindset.<br/>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-8.jpg')}  alt=""/></Link></div>
                                                </div>
                                                <div class="col-md-7">
                                                    <div class="text">
                                                        If we’ve decided to adopt the product mindset, how do we apply it to our teams in reality?
                                                        First off, teams need to be given a lot more freedom and broader problem statements to track and validate. Estimates should be given by the team only when a solution is identified to a high degree of confidence. Adequate time should be given to the teams to perform their research on the problem statement. Agile project management (something we’ve covered in another post) should be followed. This way, you only plan for the next 2 sprints or so leaving good room for change
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="text">
                                            in scope {'&'} journey if required. Finally, we intend to create good products that offer real value to the end-users. But exactly where the value comes from is hard to pinpoint and harder to estimate years or months into the future.<br/><br/>
                                            <h4>The role of DevOps</h4>
                                            <br/> DevOps and a CI/CD Pipeline naturally fit into the product mindset and agile methodologies. Having teams spend less time managing infrastructure and more time developing new features is an important factor in moving fast. Also to complete the loop feedback from the customers has to be incorporated into the decision process as quickly as possible. Using real user feedback to drive product decisions is a crucial centerpiece to the Product mindset. Bug reports and suggestions can be taken in into an automated tool like Jira and routed to their intended departments automatically. Issues can be escalated if they’re recurring and prioritized over the delivery of new features.<br/><br/>
                                            The product mindset requires a shift throughout the organization, a genuine will to fix underlying problems and make great products, a holistic focus on the end outcomes, and not the process of getting there. It requires us to change the core metrics of tracking success to more real-world feedback-related aspects that are harder to track and harder to achieve, but at the end of the day, those are the things that make great products.
                                            </div>
                                            <div class="post-share">
                                                <div class="left-column">
                                                    <h4>Releted Tags</h4>
                                                    <ul class="tag-list clearfix">
                                                        <li><Link to={'/blog-details'}><span>Popular</span></Link></li>
                                                        <li><Link to={'/blog-details'}><span>desgin</span></Link></li>
                                                        <li><Link to={'/blog-details'}><span>ux</span></Link></li>
                                                    </ul>
                                                </div>
                                                <div class="right-column">
                                                    <h4>Social Share</h4>
                                                    <ul class="social-links">
                                                        <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                        <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                        <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                                        <li><Link to={'/#'}><span class="fab fa-linkedin-in"></span></Link></li>
                                                        <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="blog-post-pagination">
                                                <div class="wrapper-box">
                                                    
                                                    <div class="prev-post">
                                                        <h5> Previous Post</h5>
                                                        <h4>What is Agile?</h4>
                                                    </div>

                                                    <div class="page-view"><span class="fa fa-th"></span></div>
                                                    
                                                    <div class="next-post">
                                                        <h5>Next Topic </h5>
                                                        <h4>Software golden rules.</h4>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div class="related-post">
                                                <div class="group-title">
                                                    <h3>Related Post</h3>
                                                </div>
                                                <div class="row">
                                                    <div class="news-block-five col-md-6">
                                                        <div class="inner-box">
                                                            <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-10.jpg')} alt=""/></Link></div>
                                                            <div class="lower-content">
                                                                <ul class="post-meta">
                                                                    <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                                                </ul>
                                                                <h3><Link to={'/blog-details'}>What is Agile and why is it Important?</Link></h3>
                                                                <div class="text">The definition of Agile is muddled over the years.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="news-block-five col-md-6">
                                                        <div class="inner-box">
                                                            <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-11.jpg')} alt=""/></Link></div>
                                                            <div class="lower-content">
                                                                <ul class="post-meta">
                                                                    <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                                                </ul>
                                                                <h3><Link to={'/blog-details'}>Five golden rules of software development.</Link></h3>
                                                                <div class="text">As software developers, we love to see the world in terms of complicated</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                        
                                            </div>
                                            <div class="author-box-two">
                                                <div class="wrapper-area">
                                                    <div class="img-box">
                                                        <img src={require('../../assets/images/resource/author-3.jpg')} alt="Awesome "/>
                                                    </div>
                                                    <div class="content">
                                                        <h5>Written by</h5>
                                                        <h3>Steve Anderson</h3>
                                                        <div class="text">Articles in Forbes, Entrepreneur and Business Insider. I have been a content writer with ClearFit for 2 years now and work will work closely with you to get quality content on your website.</div>
                                                    </div>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <aside class="sidebar">

                                    {/* <!-- About Widget --> */}
                                    <div class="sidebar-widget about-me">
                                        <div class="sidebar-title"><h3>About Me</h3></div>
                                        <div class="widget-content">
                                            <div class="image"><img src={require('../../assets/images/resource/author-2.jpg')} alt=""/></div>
                                            <h4>Rosalina D. Willaimson</h4>
                                            <div class="text">Never really sure how to describe myself in just a few sentences. I went into web design from a business backgroung and I can bring a unique perspective your project.</div>
                                            <ul class="social-links">
                                                <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-linkedin-in"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    {/* <!-- Search --> */}
                                    <div class="sidebar-widget search-box">
                                        <div class="sidebar-title"><h3>Search Objects</h3></div>
                                        <form method="post" action="http://azim.commonsupport.com/Finandox/contact.html">
                                            <div class="form-group">
                                                <input type="search" name="search-field" value="" placeholder="Search your keyword..." required=""/>
                                                <button type="submit"><span class="icon far fa-search"></span></button>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <!-- Post Widget --> */}
                                    <div class="sidebar-widget popular-posts">
                                        <div class="sidebar-title"><h3>Popular Feeds</h3></div>
                                        <div class="widget-content">
                                            
                                            {/* <!--News Post--> */}
                                            <div class="news-post">
                                                <div class="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-8.jpg')} data-src="" alt=""/></Link></div>
                                                <div class="date"><span class="fa fa-calendar-alt"></span> Feb 25, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/>cing elit, sed do. </Link></h4>
                                            </div>
                                            {/* <!--News Post--> */}
                                            <div class="news-post">
                                                <div class="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-9.jpg')} alt=""/></Link></div>
                                                <div class="date"><span class="fa fa-calendar-alt"></span> Feb 20, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/>cing elit, sed do.</Link></h4>
                                            </div>
                                            {/* <!--News Post--> */}
                                            <div class="news-post">
                                                <div class="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-10.jpg')} alt=""/></Link></div>
                                                <div class="date"><span class="fa fa-calendar-alt"></span> Feb 14, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/> cing elit, sed do.</Link></h4>
                                            </div>
                                            {/* <!--News Post--> */}
                                            <div class="news-post">
                                                <div class="post-thumb"><Link to={'/blog-details'}><img src={require('../../assets/images/resource/thumb-11.jpg')}  alt=""/></Link></div>
                                                <div class="date"><span class="fa fa-calendar-alt"></span> Feb 14, 2020</div>
                                                <h4><Link to={'/blog-details'}>Lorem ipsum dolor sit <br/> cing elit, sed do.</Link></h4>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Category Widget --> */}
                                    <div class="sidebar-widget categories">
                                        <div class="sidebar-title"><h3>Categories</h3></div>
                                        <div class="widget-content">
                                            <ul>
                                                <li class="current"><Link to={'/blog-details'}>Business</Link> <span class="total-post">26</span></li>
                                                <li><Link to={'/blog-details'}>Consultant</Link> <span class="total-post">30</span></li>
                                                <li><Link to={'/blog-details'}>Creative</Link> <span class="total-post">71</span></li>
                                                <li><Link to={'/blog-details'}>UI/UX</Link> <span class="total-post">68</span></li>
                                                <li><Link to={'/blog-details'}>Technology</Link><span class="total-post">70</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- Social Icon --> */}
                                    <div class="sidebar-widget social-links-widget">
                                        <div class="sidebar-title"><h3>Never Miss News</h3></div>
                                        <div class="widget-content">
                                            <ul class="social-links">
                                                <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-linkedin-in"></span></Link></li>
                                                <li><Link to={'/#'}><span class="fab fa-pinterest-p"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* <!-- Twitter Widget --> */}
                                    <div class="sidebar-widget twitter-widget">
                                        <div class="sidebar-title"><h3>Twitter Feeds</h3></div>
                                        <div class="widget-content">
                                            <div class="post">
                                                <div class="icon"><span class="fab fa-twitter"></span></div>
                                                <div class="text">Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1</div>
                                                <div class="date">Jan 25, 2020</div>
                                            </div>
                                            <div class="post">
                                                <div class="icon"><span class="fab fa-twitter"></span></div>
                                                <div class="text">Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1</div>
                                                <div class="date">Jan 25, 2020</div>
                                            </div>
                                            <div class="post">
                                                <div class="icon"><span class="fab fa-twitter"></span></div>
                                                <div class="text">Rescue - #Gutenberg ready @ wordpress Theme for Creative Bloggers available on @ ThemeForest https://t.co/2r1POjOjgV C… https://t.co/rDAnPyClu1</div>
                                                <div class="date">Jan 25, 2020</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Gallery Widget --> */}
                                    <div class="sidebar-widget instagram-widget">
                                        <div class="sidebar-title"><h3>Instagram Feeds</h3></div>
                                        <div class="inner-box">
                                            <div class="wrapper-box">
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-1.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-1.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-2.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-2.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-3.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-3.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-4.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-4.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-5.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-5.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-6.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-6.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-7.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-7.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-8.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-8.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                                <div class="image">
                                                    <img  src={require('../../assets/images/gallery/instagram-9.jpg')} alt=""/>
                                                    <div class="overlay-link"><Link to={'/assets/images/gallery/instagram-9.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                                </div>
                                            </div>
                                            {/* <!-- /.gallery-wrapper --> */}
                                        </div>
                                    </div>

                                    {/* <!-- Tags Widget --> */}
                                    <div class="sidebar-widget popular-tags">
                                        <div class="sidebar-title"><h3>Popular Tags</h3></div>
                                        <div class="widget-content">
                                            <ul class="clearfix">
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
                                    <div class="sidebar-widget">
                                        <div class="add-banner-widget" style={{ backgroundImage: "url(" + addbg + ")" }}>
                                            <div class="content">
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
export default BlogDestails;