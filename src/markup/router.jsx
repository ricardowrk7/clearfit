import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from "../utils/scrollToTop";
import Index2 from './pages/index-2';
import Index3 from './pages/index-3';
import Index4 from './pages/index-4';
import Onepage from './pages/onepage';
import RtlHome from './pages/rtl-home';
import Error404 from './pages/404';
import About from './pages/about'
import BlogDestails from './pages/blog-details'
import BlogDestailsOne from './pages/blog-details-1'
import BlogDestailsTwo from './pages/blog-details-2'
import BlogGrid from './pages/blog-grid'
import BlogStandard from './pages/blog-standard'
import Careers from './pages/careers'
import Checkout from './pages/checkout'
import Contact from './pages/contact'
import Faq from './pages/faq'
import Portfolio1 from './pages/portfolio-1'
import Portfolio2 from './pages/portfolio-2'
import PortfolioDetails from './pages/portfolio-details'
import ProductDetails from './pages/product-details'
import Services1 from './pages/services-1'
import Services2 from './pages/services-2'
import ServicesDetails from './pages/services-details'
import Shop from './pages/shop'
import ShoppingCart from './pages/shopping-cart'
import TeamDetails from './pages/team-details'
import Team from './pages/team';
import Testimonial1 from './element/testimonial1'
import BackToTop from './layout/backToTop'

const details = [
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'DiverciTea',
        date: 'August 22, 2021',
        author: 'Jason Maynard',
        keyword: 'eCommerce',
        prev: 'Cooley',
        next: 'Angels Eyewear'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'Angels Eyewear',
        date: 'April 18, 2021',
        author: 'Jason Maynard',
        keyword: 'eCommerce',
        prev: 'DiverciTea',
        next: 'Cbus Social'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'Cbus Social',
        date: 'January 29, 2021',
        author: 'Jason Maynard',
        keyword: 'SEO, Services',
        prev: 'Angels Eyewear',
        next: 'Vohnt'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'Vohnt',
        date: 'September 12, 2021',
        author: 'Jason Maynard',
        keyword: 'eCommerce, Car Care',
        prev: 'Cbus Social',
        next: 'Pierre Jean-Louis'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'Pierre Jean-Louis',
        date: 'July 17, 2021',
        author: 'Jason Maynard',
        keyword: 'eCommerce, Lifestyle',
        prev: 'Vohnt',
        next: 'Jess Garage Doors'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'Jess Garage Doors',
        date: 'July 22, 2021',
        author: 'Jason Maynard',
        keyword: 'Services',
        prev: 'Pierre Jean-Louis',
        next: 'Thomas George'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'Thomas George',
        date: 'January 02, 2020',
        author: 'Jason Maynard',
        keyword: 'eCommerce, Real Estate',
        prev: 'Jess Garage Doors',
        next: 'The Furniture Store'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'The Furniture Store',
        date: 'August 22, 2021',
        author: 'Jason Maynard',
        keyword: 'eCommerce',
        prev: 'Thomas George',
        next: 'OneOf'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'OneOf',
        date: 'February 09, 2021',
        author: 'Jason Maynard',
        keyword: 'eCommerce, NFT',
        prev: 'The Furniture Store',
        next: 'SimpliLearn'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'SimpliLearn',
        date: 'January 05, 2022',
        author: 'Jason Maynard',
        keyword: 'lifestyle, Education',
        prev: 'OneOf',
        next: 'Virtual Employee'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'Virtual Employee',
        date: 'December 11, 2019',
        author: 'Jason Maynard',
        keyword: 'lifestyle, staffing',
        prev: 'SimpliLearn',
        next: 'Cooley'
    },
    {
        image: require('../assets/images/resource/image-15.jpg'),
        name: 'Cooley',
        date: 'March 22, 2022',
        author: 'Jason Maynard',
        keyword: 'Law, Services',
        prev: 'Virtual Employee',
        next: 'DiverciTea'
    }
]

class Router extends Component {
    render() {
        return (
            <BrowserRouter basename={''}>
            {/* <BrowserRouter> */}
                <ScrollToTop>
                    <div class="page-wrapper">
                    
                        <Switch>
                            <Route path='/' exact component={Index2} />
                            <Route path='/index-2' component={Index2} />
                            <Route path='/index-3' component={Index3} />
                            <Route path='/index-4' component={Index4} />
                            <Route path='/onepage' component={Onepage} />
                            <Route path='/rtl-home' component={RtlHome} />
                            <Route path='/404' component={Error404} />
                            <Route path='/about' component={About} />
                            <Route path='/blog-details' component={BlogDestails} />
                            <Route path='/blog-details-1' component={BlogDestailsOne} />
                            <Route path='/blog-details-2' component={BlogDestailsTwo} />
                            <Route path='/blog-grid' component={BlogGrid} />
                            <Route path='/blog-standard' component={BlogStandard} />
                            <Route path='/careers' component={Careers} />
                            <Route path='/checkout' component={Checkout} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/faq' component={Faq} />
                            <Route path='/portfolio-1' component={Portfolio1} />
                            <Route path='/portfolio-2' component={Portfolio2} />
                            {details.map(detail => {
                                return (
                                    <Route path={`/${detail.name.toLowerCase().replace(/\s+/g, '')}`} component={() => <PortfolioDetails details={detail}/>}/>
                                )
                            })}
                            <Route path='/product-details' component={ProductDetails} />
                            <Route path='/services-1' component={Services1} />
                            <Route path='/services-2' component={Services2} />
                            <Route path='/services-details' component={ServicesDetails} />
                            <Route path='/shop' component={Shop} />
                            <Route path='/shopping-cart' component={ShoppingCart} />
                            <Route path='/team-details' component={TeamDetails} />
                            <Route path='/team' component={Team} />
                            <Route path='/test' component={Testimonial1} />

                        </Switch>

                        <BackToTop />

                    </div>
                </ScrollToTop>
            </BrowserRouter>

        )
    }
}

export default Router;