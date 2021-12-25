import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="sidebar-widget about-me">
            <div className="sidebar-title"><h3>About Me</h3></div>
            <div className="widget-content">
                <div className="image"><img src={require('../../assets/images/resource/author-2.jpg')} alt=""/></div>
                <h4>Rosalina D. Willaimson</h4>
                <div className="text">Never really sure how to describe myself in just a few sentences. I went into web design from a business backgroung and I can bring a unique perspective your project.</div>
                <ul className="social-links">
                    <li><Link to={'/#'}><span className="fab fa-facebook-f"></span></Link></li>
                    <li><Link to={'/#'}><span className="fab fa-twitter"></span></Link></li>
                    <li><Link to={'/#'}><span className="fab fa-behance"></span></Link></li>
                    <li><Link to={'/#'}><span className="fab fa-linkedin-in"></span></Link></li>
                    <li><Link to={'/#'}><span className="fab fa-youtube"></span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default About