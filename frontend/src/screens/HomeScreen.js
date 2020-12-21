import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productAction'
import HeroTitle from '../minicomponents/HeroTitle'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'
import ProductsLoaded from './ProductsLoaded'

export default function HomeScreen({location, history}) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="mt-5">
            <HeroTitle text="All Products" />
            { loading ?  
                <Loader />
                : error 
                ? <AlertError />
                : <ProductsLoaded data={products} />
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