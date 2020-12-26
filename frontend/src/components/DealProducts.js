import React, {useEffect} from 'react'
import GlideCarousel from '../minicomponents/GlideCarousel'
import { useSelector, useDispatch } from 'react-redux'
import { listDealProducts } from '../actions/productAction'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'

export default function DealProducts({ history }) {

    const dispatch = useDispatch()

    const productDealRated = useSelector((state) => state.productDealRated)
    const { loading, error, products } = productDealRated

    useEffect(() => {
        dispatch(listDealProducts())
    }, [dispatch])

    return (
        <div>
            <div className="pb-2">
            { loading ? <Loader />
            : error ? <AlertError error={error} />
            : <GlideCarousel
                products={products} />}
        </div>
        </div>
    )
}
