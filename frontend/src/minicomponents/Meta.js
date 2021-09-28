import React from 'react'
import { Helmet } from 'react-helmet'


export default function Meta({ title, description, keywords}) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords}/>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to SS Stores',
    description: 'We sell best products for reasonable price',
    keywords: "ss store, best tshirts, printed tshirts"
}
