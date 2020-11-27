import React from 'react'
import Product from '../components/Product'
import products from '../Products'

export default function HomeScreen() {
    return (
        <div>
            <h5 className="mt-1">All Products</h5>
            <div className="row">
                {products.map(product => {
                    return(
                        <div key={product._id} className="col-sm-6 col-md-6 col-lg-4">
                            <Product product={product} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


{/* <div className="row">
    {products.map(product => {
        return(
            product.category === 'Custom'?
            <div className="col col-sm-12 col-md-6 col-lg-4">
                <p>{product.name}</p>
            </div> : null)
    })}
</div> */}