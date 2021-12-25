import React from 'react'
import { Link } from 'react-router-dom';

const Social = () => {
    return (
        <div className="sidebar-widget social-links-widget">
            <div className="sidebar-title"><h3>Never Miss News</h3></div>
            <div className="widget-content">
                <ul className="social-links">
                    <li><Link to={'/#'}><span className="fab fa-facebook-f"></span></Link></li>
                    <li><Link to={'/#'}><span className="fab fa-twitter"></span></Link></li>
                    <li><Link to={'/#'}><span className="fab fa-behance"></span></Link></li>
                    <li><Link to={'/#'}><span className="fab fa-linkedin-in"></span></Link></li>
                    <li><Link to={'/#'}><span className="fab fa-pinterest-p"></span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Social