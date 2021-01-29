import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import { gettingSlides } from '../actions/slideActions';

import './PreHeader.css'

export default function PreHeader() {
    const dispatch = useDispatch()
    
    const getSlides = useSelector(state => state.getSlides)
    const { loading, slides } = getSlides

    useEffect(() => {
        dispatch(gettingSlides())
    }, [dispatch])


    return (
        <div className="preheader">
            <div className="swiper-container swiper-container-first">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Link to='/' className="text-decoration-none text-dark">CHAOTIC</Link>
                    </div>
                    {!loading && slides && (
                        slides.map(slide => (
                            <div className="swiper-slide" key={slide._id}>
                                {slide.text}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}


// justify - in about section
// remove printed tshirts, printed hoodies
// alchemy - chaotic (in Tshirts, Hoodies, posters)
