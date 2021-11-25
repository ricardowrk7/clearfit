import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <div class="auto-container">
        <div class="sec-title text-center">
            <div class="sub-title">Our Team</div>
            <h2>Leadership Team</h2>
        </div>
        <div class="row">
            {/* <!-- Team Block One --> */}
            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="inner-box">
                    <div class="image"><img src={require('../../assets/images/resource/team-2.jpg')} alt="" /></div>
                    <div class="content">
                        <div class="designation">Sales</div>
                        <h3>Velavos H. DesuJa</h3>
                        <ul class="social-links">
                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                            <li><Link to={'/#'}><span class="fab fa-linkedin"></span></Link></li>
                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Team Block One --> */}
            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="inner-box">
                    <div class="image" style={{overflow: 'hidden', maxHeight: '400px'}}><img src={require('../../assets/images/team/FaceApp_1637718068928.jpg')} alt="" style={{position: 'relative', top: '-90px'}}/></div>
                    <div class="content">
                        <div class="designation">Founder</div>
                        <h3>Jason C. Maynard</h3>
                        <ul class="social-links">
                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                            <li><Link to={'/#'}><span class="fab fa-linkedin"></span></Link></li>
                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Team Block One --> */}
            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="inner-box">
                    <div class="image"><img src={require('../../assets/images/team/Tej.jpg')} alt="" /></div>
                    <div class="content">
                        <div class="designation">CTO</div>
                        <h3>Tej Shikawoti</h3>
                        <ul class="social-links">
                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                            <li><Link to={'/#'}><span class="fab fa-linkedin"></span></Link></li>
                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Team;