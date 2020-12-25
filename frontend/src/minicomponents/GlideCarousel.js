import React, {useState, useEffect} from 'react'
import Product from '../components/Product'
import Loader from './Loader'
import Slider from 'react-slick'

export default function GlideCarousel({products}) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
    }, [])
    const settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 360,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 2,
            slidesPerRow: 1
          }
        }
      ]
    };
    return (
        <div className="my-3">
            {loading ? <Loader /> : (
                <Slider {...settings}>
                    {products.map(product => (
                        <Product
                        key={product._id} product={product} />
                    ))}
                </Slider>
            )}
            
        </div>
    )
}
