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
            src="https://media.istockphoto.com/vectors/coming-soon-lettering-coming-soon-for-promotion-advertisement-sale-vector-id1221240925?k=20&m=1221240925&s=612x612&w=0&h=HX77CIwJ34u7qUMpI_W5z4dDnEbHGv66mGXVTpIccv8="
            alt="Coming soon" />
        </div>
        </>
    )
}
