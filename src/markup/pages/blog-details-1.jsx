import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import Twitter from '../components/Twitter'
import About from '../components/aboutMe';
import Social from '../components/sidebar/social';

const aboutbg = require('./../../assets/images/background/image-11.jpg');
const addbg = require('./../../assets/images/background/image-15.jpg');


class BlogDestails extends Component {


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
                                            <h2>What is Agile and why is it Important?</h2>
                                            <div className="text">
                                            <br/>
                                            <h3>Origins of Agile</h3>
                                            <br/>
                                            <p>
                                            The definition of Agile is muddled over the years. Today, it mostly refers to developing software faster following some best practices and project management templates like Scrum {'&'} Kanban; also it’s many derivatives. But at the core, it’s a management system designed to put changing requirements in the center of the building process. Adapting to change and that too quickly is what the entire paradigm hinges over. The moment gained traction because in the last decade software development has found its way into many industries which are not as organized as the traditional software domain. Traditionally software catered to banking, accounting, and finance where not much has changed over the last 100 years. Today there are apps for food delivery, a much more dynamic landscape that required constant changes and iteration compared to a financial application. The new management paradigms introduced in agile help in changing course fast in this dynamic world. 
                                            </p>
                                            </div>
                                            <div className="image"><Link to={'/#'}><img src={require('../../assets/images/custom/blog-2.png')} alt=""/></Link></div>
                                            <div className="text-block-wrapper">
                                                <div className="text-block">
                                                    <h3>The Agile Manifesto</h3>
                                                    <div className="text">
                                                        <span style={{fontWeight: 'bold'}} >“Individuals and interactions</span> over processes and tools<br/>
                                                        <span style={{fontWeight: 'bold'}} >“Working software</span> over comprehensive documentation<br/>
                                                        <span style={{fontWeight: 'bold'}} >“Customer collaboration</span> over contract negotiation<br/>
                                                        <span style={{fontWeight: 'bold'}} >“Responding to change</span> over following a plan”<br/>
                                                        <br/>
                                                        The 12 Principles of the Agile Manifesto go into some more depth and detail about these topics.
                                                    </div>
                                                </div>
                                                <div className="text-block">
                                                    <h3>Goals of Agile</h3>
                                                    <div className="text">
                                                    <ul className="list">
                                                        <li>1.	Get a minimum working product or MVP to the users as fast as possible. Remove all the bells and whistles and only deliver a working product that satisfies the unique selling point or USP of your product.</li>
                                                        <li>2.	Get measurable feedback on how your users like the product and react accordingly. What you as a creator think the users want and what the users actually want might not be aligned. The user may not understand the features of your software or interpret them in some other way not intended by you. A/B testing </li>
                                                        <li>3.	Don’t be afraid to Pivot. Paypal was actually started by Elon Musk as an email company that offered to send money. Sending money was never their primary use case. User research and feedback helped them to understand what their users actually wanted and then eventually they pivoted to being a full payments company.</li>
                                                        <li>4.	Make Incremental progress continuously making sure that progress is done in the right direction. Prefer this way of rolling out instead of making one big release where the users now have to find their way around the new features and navigation.</li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                <div className="image"><Link to={'/#'}><img src={require('../../assets/images/custom/blog-3.png')} alt=""/></Link></div>
                                                <div className="text-block">
                                                    <div className="text">
                                                    The term scrum comes from the sport rugby where players huddle up before the game. It was chosen because it emphasizes teamwork with all the stakeholders involved, and that’s exactly what this model is. In this model, the entire team meets every 1 or 2 weeks and decides what they would do for the next week called a sprint. The important thing to distinguish is that the plan is only for the next two weeks including the release of that feature. This helps teams break bigger releases into smaller, more manageable ones. The idea is that a set of full user stories should be delivered end-to-end such that new features are usable. If only the frontend is developed without the backend to support it, then that work is essentially useless till the backend team is up to speed and we want to minimize these scenarios. The team also discusses at the end of every sprint what they could have done better and how the next sprint can be done more efficiently. The Scrum meeting and daily standup calls are the backbones of the scrum model. Newly released features are then tested and real user feedback is used to decide the next steps to take in the product journey.
                                                    </div>
                                                </div>
                                            </div>
                                            <blockquote>
                                                <h5>by Hetmayar</h5>
                                                <div className="text">The Scrum meeting and daily standup calls are the backbones of the scrum model.</div>
                                                <div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                                            </blockquote>
                                            <div className="text">
                                                <h4>Kanban</h4>
                                                <div className="text">
                                                    <br/>A common complaint with the scrum model is that too much time is wasted in the daily meetings. Kanban revolves around the idea of a continuous pipeline of work instead of even weekly sprints. This is modeled after the manufacturing industry with a continuous conveyor belt. A central idea to the kanban methodology is that the kanban board has many stages. The important thing to note is that each stage should have a limit of how many things can get piled up in that stage. Small work items should continuously flow from stages like <span style={{fontWeight: 'bold'}}>Todo → In Progress → Testing → Done</span>. The Kanban board can literally be a physical board made using sticky notes as a work item or it can be a digital one like Trello or Jira.
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-8.jpg')}  alt=""/></Link></div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="text">
                                                    <h4>Where not to use Agile?</h4>
                                                    <br/> As you see, the agile model only fits into a world where fast pace of change is paramount. No one says this often, but it’s not a cover-all solution to project management. If you’re planning some core system like a nuclear plant, agile is not the best way to go. If the Goals of agile don’t align with your user case, it’s best to steer clear of it. Some use cases and examples where agile should be avoided:
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text">
                                            1.	<span style={{fontWeight: 'bold'}}>Stability of the system is more important</span>
                                            <br style={{lineHeight: '5px'}}/><br/>⦁	Linux operating system releases are a classic example. Debian releases it’s new version with major chages once once every 2 years. This is because developers need a solid framework to build into. If the operating system itself is changing constantly, all the softwares running over it are inherently unstable.
                                            <br/><br/>

                                            2.	<span style={{fontWeight: 'bold'}}>Protocol and standards definitons</span>
                                            <br style={{lineHeight: '5px'}}/><br/>⦁	Imagine the http protocol evolved every 2 weeks because of a scrum release. The world would be choas, no one would be able to use the internet. All the chain of tools dependent on it like browsers, routers can’t possibly eveolve at the same pace. 
                                            <br/>⦁	HTML 4 was release in 1997, HTML 5 which is still used today was released in 2008. Although many people have their complaints about these outdated technologies but it makes sence that standards are defined after taking good time in evaluating and making a long lasting change.
                                            <br/><br/>	

                                            3.	<span style={{fontWeight: 'bold'}}>Building critical products that serve as tools for others</span>
                                            <br style={{lineHeight: '5px'}}/><br/>⦁	Use cases where you are making something concrete like say a database engine or you are designing an API to be used by many teams, both use cases require your system to be stable and have a very high quality of documentation.
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
                                                        <h4>Product vs Project</h4>
                                                    </div>

                                                    <div className="page-view"><span className="fa fa-th"></span></div>
                                                    
                                                    <div className="next-post">
                                                        <h5>Next Topic </h5>
                                                        <h4>Software golden rules.</h4>
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
                                                                <h3><Link to={'/blog-details'}>Product vs Project Mindset for Software Development.</Link></h3>
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
                                                                <h3><Link to={'/blog-details'}>Five golden rules of software development.</Link></h3>
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
export default BlogDestails;