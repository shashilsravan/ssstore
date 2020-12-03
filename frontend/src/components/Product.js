import React from 'react'
import {Link} from 'react-router-dom'
import Rating from '../minicomponents/Rating'
import './Product.css'

export default function Product({ product }) {
    return (
        <div className="custom-product">
            <div className="card my-3 p-3 rounded">
                <Link to={`/product/${product._id}`}>
                    <div className="zoom-effect-container">
                        <div className="image-card">
                            <img src={product.image} className="card-img-top"/>
                        </div>
                    </div>
                </Link>

                <div className="card-body">
                    <Link to={`/product/${product._id}`} className="product-name">
                        <div className="card-title">
                            {product.name}
                        </div>
                    </Link>
                    {/* {product.category} */}
                    <div className="card-text">
                        <div className="my-2">
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </div>
                    </div>

                    <h4 className="card-text">
                        ₹{product.price} 
                        <span className="actualPrice">₹{product.actualPrice}</span>
                        <span className="discount">({(100 - (product.price / product.actualPrice)*100).toFixed(0)}% OFF)</span>
                    </h4>
                </div>
            </div>
        </div>
    )
}
