import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';





class FaqAccordion extends Component {


    render() {
        return (
            <>
                

                {/* <!-- Faq Section --> */}
                <section class="faq-section">
                    <div class="auto-container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="content mb-5 mr-lg-5">
                                    <div class="sec-title">
                                        <div class="sub-title">FREQUENTLY ASKED QUESTION</div>
                                        <h2>Got Any Questions?</h2>
                                        <div class="text">Veniam quis nostrud exercitation ullamco laboris nist  aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur excepteur sint occaecat aboris nisi ut aliquip ex ea consequat uis aute.</div>
                                    </div>
                                    <div class="link-btn">
                                        <Link to={'/#'} class="theme-btn btn-style-one"><span class="btn-title">Get More Help</span></Link>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-7">
                                <Accordion preExpanded={[0]} allowZeroExpanded >
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                When was ClearFit founded?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                            In 2018, I was working as a freelance developer and business was starting to take off. I reached out to a few friends who were developers and next thing I knew we had a company forming.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What is ClearFits vision and mission?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                Software that works is the highest priority, building a custom software for your company can be a big investment and to us, we feel bringing your idea to reality should be as seamless as possible.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                What does Clear Fit do?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                We are a software consulting firm! We work with clients that are looking to build a custom software for their company but may not have an in house development team. We provide the experience and expertise to move forward with the project.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How do I get started?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                To get started and get our developers working on your project as soon as possible you can call us at +1 614-470-4134 or click contact in the menu and fill out the contact form!
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                How is billing done with your clients?
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>
                                                We work with clients of many different sized budgets. Predicting the total cost of software development can be hard so we bill our clients by the hour. We work to plan around your monthly budget and get as many developers working to get your project done as fast as possible.
                                            </p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>



            </>
        )
    }
}
export default FaqAccordion;