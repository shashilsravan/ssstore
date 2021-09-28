import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
import { gettingSlides } from '../actions/slideActions';
import Loader from '../minicomponents/Loader'
import Slider from 'react-slick'


export default function TopCarousel() {
    const dispatch = useDispatch()

    const getSlides = useSelector(state => state.getSlides)
    const { loading, slides } = getSlides
    
    useEffect(() => {
        dispatch(gettingSlides())
    }, [dispatch])

    const settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="my-1 mb-5">
            { loading ? <Loader /> :
                <Slider {...settings}>
                { slides && slides.length !== 0 && (
                    slides.map((slide) => (
                        <Link key={slide._id} to={slide.link}>
                            <img className="img-fluid mx-auto d-block" 
                                style={{width: '90%', height: '500px'}}
                                src={slide.image} alt={slide.text} />
                        </Link>
                    ))
                )}
            </Slider> }
        </div>
    )
}
