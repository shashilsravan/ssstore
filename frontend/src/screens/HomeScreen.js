import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../components/Product'
import { listProducts } from '../actions/productAction'
import HeroTitle from '../minicomponents/HeroTitle'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'

export default function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [])
    return (
        <div>
            <HeroTitle text="All Products" />
            { loading ?  
                <Loader />
                : error 
                ? <AlertError />
                : <div className="row">
                    {products.map(product => {
                        return(
                            <div key={product._id} className="col-sm-6 col-md-6 col-lg-4">
                                <Product product={product} />
                            </div>
                        )
                    })}
                </div>
            }
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