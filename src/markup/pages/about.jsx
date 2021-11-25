import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header';
import Footer from '../layout/footer';
import styled from 'styled-components'
import Brand1 from '../element/brand1';
import Team from '../components/Team';

const aboutbg = require('./../../assets/images/background/image-11.jpg');

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Span = styled.span`
    display: flex;
    background: linear-gradient(90deg, rgba(209,100,26,1) 0%, rgba(192,40,42,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    font-size: 40px;
`;

class About extends Component {

    render() {
        return (
            <>
                <Header />
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


                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>About Us</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">About Us</li>
                        </ul>
                    </div>

                </section>


                {/* About Section Two */}
                <section class="about-section-two">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/team/FaceApp_1637717410033.jpg')} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="content-box">
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
                                        <div class="signature"><img src={require('../../assets/images/resource/signature.png')} alt="" /></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* History Section */}
                <section class="history-section">
                    <div class="auto-container">
                        <div class="sec-title text-center light">
                            <div class="sub-title">History</div>
                            <h2>Our Journey</h2>
                        </div>
                        <Tab.Container defaultActiveKey="first">
                            <Nav className="nav-tabs tab-btn-style-one">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">2021</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2020</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">2019</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">2018</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Growth</div>
                                                    <h2>Successful Projects<br /> Driving Growth.</h2>
                                                </div>
                                                <div class="text">After 4 years of business we have build quite the portfolio of succesful projects. Delivering high quality software, on time to our clients has proven to be a succesful business model.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Lockdown</div>
                                                    <h2>Work from home <br />Tech Boom.</h2>
                                                </div>
                                                <div class="text">Lockdowns changed the tech industry forever. Many companies and customers realized the benifits of investing in technology and the industry has never been the same.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">New Age</div>
                                                    <h2>Great employees <br />Make Great Projects.</h2>
                                                </div>
                                                <div class="text">Finding the right employees for your development projects is hard. We are constantly scouring the market to find the best in class developers and doing what we can to keep them.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Freelance</div>
                                                    <h2>From Developer <br />To Business Man.</h2>
                                                </div>
                                                <div class="text">I launched ClearFit in 2018. My career as a freelancer was taking off and I needed to bring on some employees to help me with the growth.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" className=" fadeInUp animated">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6">
                                            <div class="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="content pl-lg-4">
                                                <div class="sec-title light">
                                                    <div class="sub-title">Get Rewards</div>
                                                    <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                                </div>
                                                <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                                <div class="link-btn"><Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Learn More</span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </section>

                {/* Team Section */}
                <section class="team-section">
                    <Team />
                </section>

                {/* Services Section Four */}
                <section class="services-section-four services-section-about">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Services</div>
                            <h2>Core Services</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="icon-box">
                                <div class="icon" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Span className="fab fa-react"></Span></div>
                                    <h2>React</h2>
                                    <div class="text">React is perfect for web apps for both mobile and desktop. Our developers are trained to build your react website in the most efficient way possible. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                <div class="icon" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Span className="flaticon-world"></Span></div>
                                    <h2>UI/UX Design</h2>
                                    <div class="text">Our UX Designers can also quickly build a prototype that will simulate the real thing and bring it in front of your customers before you even start developing the actual product. Insights from user testing can help you prioritize features and target the direction you are developing your product. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                <div class="icon" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Span className="fab fa-node"></Span></div>
                                    <h2>Node.js</h2>
                                    <div class="text">Node.js provides an efficient alternative to create a web application. Your project may significantly shrink the turnaround time while levelling up the output as well. It empowers developers as well the users to utilize the web application in its full capacity and yield desirable results. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                <div class="icon" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Span className="fab fa-aws"></Span></div>
                                    <h2>AWS</h2>
                                    <div class="text">AWS allows you avoid heavy up front investment in infrastructure to run your application. Instead you only pay for what you actually use, and have the tools available to do more with less to avoid wasting money. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                <div class="icon" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Span className="fab fa-battle-net"></Span></div>
                                    <h2>.Net</h2>
                                    <div class="text">Without writing a single line of code, .NET provides you with a scalable and powerful framework to code upon. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                <div class="icon" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Span className="fab fa-app-store-ios"></Span></div>
                                    <h2>React Native</h2>
                                    <div class="text"> develop applications for Android, iOS, Web and UWP (Windows) providing native UI controls and full access to the native platform. Working with React Native requires an understanding of JavaScript fundamentals. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sponsors Section */}


                <Brand1 />






                <Footer />
            </>
        )
    }
}
export default About;