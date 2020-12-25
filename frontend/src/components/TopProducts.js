import React, {useEffect} from 'react'
import GlideCarousel from '../minicomponents/GlideCarousel'
import { useSelector, useDispatch } from 'react-redux'
import { listTopProducts } from '../actions/productAction'
import Loader from '../minicomponents/Loader'
import AlertError from '../minicomponents/AlertError'

export default function TopProducts({ history }) {
    const dispatch = useDispatch()

    const productTopRated = useSelector((state) => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch, history])
    return (
        <div className="pb-2">
            { loading ? <Loader />
            : error ? <AlertError error={error} />
            : <GlideCarousel
                products={products} />}
        </div>
    )
}
