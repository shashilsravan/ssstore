import React, {useEffect} from 'react'
import HeroTitle from '../minicomponents/HeroTitle'
import { Helmet } from 'react-helmet'
import Typed from 'react-typed';

export default function About() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
        <Helmet>
            <title>About developer</title>
            <meta name='About us' content=' We are three socially awkward yet brilliant minded' />
        </Helmet>
        <div className="my-5 about-section">
            <HeroTitle text="About Developer" />

            <div className="mt-5">
                <h4 className="fst-italic"><Typed
                    strings={['About SS Store']}
                    loop
                    typeSpeed={40}
                    backSpeed={50}
                    /><strong>
                    </strong></h4>
                    <h5 className="fw-normal fst-italic text-justi">
                        SS Stores is an ecommerce website made with MERN Stack i.e., ReactJS, NodeJS, ExpressJS, MongoDB, Redux for state management and redux thunk for middleware. It is responsive and UI friendly as well.
                    <br />
                        It includes complete user schema - Register as an user / Login / Logout / Forgot password functionality. It also includes admin functionality to perform CRUD operations on products / users and also can keep track of the orders.
                    <br />
                        You can add products to your cart or to your wishlist, you can checkout and place an order via COD or online payment support that i integrated. It also includes selecting quanitity and sizes while placing an order
                    <br />
                        And also few things like pagination, searching through the products, add a review to the products you bought, different sorting options on the products and also you can shop products by age group. You also cannot place orders that are out of stock.
                    <br />
                        You can add/remove and increase/decrease products from cart page and wishlist page. You can also see the products that are in exclusive deals. 
                </h5>
            </div>

            <div className="mt-5">
                <h4 className="fst-italic"><Typed
                    strings={['About the Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                /><strong>
                    
                    </strong></h4>
                <h5 className="fw-normal fst-italic text-justi">
                    I am sravan, working as ruby on rails developer at promptcloud. I am good at developing full stack projects with frontend - ReactJS and Backend - Node / Ruby on rails. I love to explore web development and also good at python programming language.
                    This is an ecommerce website made with MERN Stack
                </h5>
            </div>

            <div className="mt-5">
                <h4 className="fst-italic"><Typed
                    strings={['About Products']}
                    loop
                    typeSpeed={40}
                    backSpeed={50}
                /><strong>
                    
                    </strong></h4>
                <h5 className="fw-normal fst-italic text-justi">
                    The products in this website are placed for just project purpose, just play around / explore the website but dont either pay for 
                    any products or dont spam by placing multiple orders. And even the image content is taken from the internet
                    <br />
                    <br />
                    <strong>
                        <Typed
                    strings={['Have a nice shopping experience.', 'Thank you for Exploring.']}
                    loop
                    typeSpeed={40}
                    backSpeed={50} />
                    </strong>
                </h5>
            </div>

        </div>
        </>
    )
}
