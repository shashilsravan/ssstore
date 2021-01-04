import React from 'react'
import { Helmet } from 'react-helmet'


export default function ComingSoon() {
    return (
        <>
        <Helmet>
            <title>Coming soon</title>
        </Helmet>
        <div className="my-5 py-5">
            <img
            className="img-fluid mx-auto d-block"
            src="https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162?k=6&m=1144514162&s=612x612&w=0&h=np7sPl0hycuFTiDgfKCZFy3SF7XCjbRTcyF-sSKfMO8="
            alt="Coming soon" />
        </div>
        </>
    )
}
