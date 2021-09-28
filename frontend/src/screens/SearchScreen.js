import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productAction'
import HeroTitle from '../minicomponents/HeroTitle'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import Meta from '../minicomponents/Meta'


export default function SearchScreen({ match }) {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {loading, error, products, page, pages} = productList

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])


    return (
        <div className="mt-5">
            <HeroTitle text="Search results..." />
            { loading ?  
                <Loader />
                : error 
                ? <AlertError />
                : <div className="row">
                    {
                    products.length === 0 ?
                    (<AlertError 
                        className="mb-5"
                        error={`No search results found for "${keyword}". Please try searching by product name`} />)
                    : products.map(product => {
                        return(
                            <div key={product._id} className="col-6 col-md-3 fine">
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
                    keyword={keyword ? keyword : ''} />
            </div>
        </div>
    )
}
