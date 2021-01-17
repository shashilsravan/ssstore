import React from 'react'
import './ProductSlider.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectFlip } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.css'

export default function ProductSlider(props) {
    const {firstImage, secondImage, thirdImage, fourthImage} = props;
    SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFlip]);
    return (
        <div className="productSlider">
            <Swiper
                effect = "flip"
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
                <SwiperSlide>
                    <img src={firstImage} alt=""/>
                </SwiperSlide>
                { secondImage && <SwiperSlide>
                    <img src={secondImage} alt=""/>
                </SwiperSlide>}
                {thirdImage && <SwiperSlide>
                    <img src={thirdImage} alt=""/>
                </SwiperSlide>}
                {fourthImage && <SwiperSlide>
                    <img src={fourthImage} alt=""/>
                </SwiperSlide>}
                </Swiper>
        </div>
    )
}