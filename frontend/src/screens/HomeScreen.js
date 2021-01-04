import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productAction'
import HeroTitle from '../minicomponents/HeroTitle'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'
import Product from '../components/Product'
import Meta from '../minicomponents/Meta'

import Paginate from '../components/Paginate'

export default function HomeScreen({location, history, match}) {
    const dispatch = useDispatch()

    const pageNumber = match.params.pageNumber || 1
    const productList = useSelector(state => state.productList)

    const {loading, error, products, page, pages} = productList

    
    useEffect(() => {
        dispatch(listProducts('', pageNumber))
    }, [dispatch, pageNumber])

    return (
        <div className="mt-5">
            <Meta title="Chaotci | All products" />
            <HeroTitle text="All Products" />
            { loading ?  
                <Loader />
                : error 
                ? <AlertError error={error} />
                : <div className="row">
                    {products.map(product => {
                        return(
                            <div key={product._id} className="col-6 col-md-4 fine">
                                <Product product={product} />
                            </div>
                        )
                    })}
                </div>
            }
            <div className="my-2">
                <Paginate 
                    pages={pages} 
                    page={page} 
                    keyword={''} />
            </div>
        </div>
    )
}
