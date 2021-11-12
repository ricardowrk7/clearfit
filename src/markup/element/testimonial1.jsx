import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bgimg7 = require('./../../assets/images/background/image-7.jpg');

const Testimonial1_content = [
    {
        thumb: require('./../../assets/images/resource/thumb-1.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            "Clear Fit Technologies was an excellent Software Development partner. The final mobile app was tested and all its functionalities performed very well. Their work methodology was top-notch and  ",

    },
    {
        thumb: require('./../../assets/images/resource/thumb-2.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Amazing Team',
        description:
            'thank you Clear Fit tech. for this amazing experience. I made a mobile application for my small business employees and management are so flexible to work with. I really appreciate your business. ',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-3.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Motivated',
        description:
            'The Clear Fit consultants we worked with to implement Salesforce as our CRM tool were excellent.  They are professional, knowledgeable and provided excellent guidance during implementation so',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-4.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Up to Code',
        description:
            'Our firm has been working with Clear Fit for 10+ years and they have been a great partner!!!  Their response time and availability are great!  Our profession requires a lot of after-hours work ',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-5.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

    },
    {
        thumb: require('./../../assets/images/resource/thumb-6.jpg'),
        author: 'Alexer Valvin',
        designation: 'Founder, Coxer IT',
        title: 'Design Quality',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',

    },
]


class Testimonial1 extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <section class="testimonial-section" style={{ backgroundImage: "url(" + bgimg7 + ")" }}>
                    <div class="auto-container">
                        <div class="sec-title">
                            <div class="sub-title">Testimonials</div>
                            <h2>Clients Feedback</h2>
                        </div>
                        <div class="row">
                            <div className="col-xl-12">
                                <Slider {...settings} className="theme_carousel">
                                    {Testimonial1_content.map((item, id) => (
                                        <div class="slide-item" key={id}>
                                            {/* <!-- Testimonial-block --> */}
                                            <div class="testimonial-block">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="fal fa-star"></span></div>
                                                    <div class="quote"><span class="fal fa-quote-left"></span></div>
                                                    <h4>{item.title}</h4>
                                                    <div class="text">{item.description} </div>
                                                </div>
                                                <div class="author-info">
                                                    <div class="thumb"><img src={item.thumb} alt="" /></div>
                                                    <h4>{item.author}</h4>
                                                    <div class="designation">{item.designation}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
export default Testimonial1;