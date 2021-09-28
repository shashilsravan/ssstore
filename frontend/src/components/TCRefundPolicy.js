import React, {useEffect} from 'react'
import HeroTitle from '../minicomponents/HeroTitle'
import { Helmet } from 'react-helmet'

export default function TCRefundPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="my-5">
            <Helmet>
                <title>Terms and Conditions</title>
            </Helmet>
            <HeroTitle text="Terms and Conditions" />
            <br />
            <br />
        </div>
    )
}
