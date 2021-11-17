import React from 'react'
import CardImage from '../minicomponents/CardImage'
import {Link} from 'react-router-dom'
import HeroTitle from '../minicomponents/HeroTitle'
import Meta from '../minicomponents/Meta'


export default function Tshirts() {
    return (
        <div className="SubCategories SubTshirts my-4">
            <Meta title="Tshirts" />
            <Link to='/' className="btn btn-dark text-right mb-2">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <HeroTitle text="Shop in T-Shirts" />
            <div className="row">
                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/plaintees'>
                        <CardImage src="https://m.media-amazon.com/images/I/81xCZY7DpLL._UL1500_.jpg"
                            centered={true} title="Plain Tshirts" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/animie'>
                        <CardImage src="https://www.casualfriday.in/wp-content/uploads/2020/12/anime-tshirts-merchandise-india.jpg"
                            centered={true} title="Anime" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/webseries'>
                        <CardImage src="https://m.media-amazon.com/images/I/41yWadfpltL.jpg"
                            centered={true} title="Webseries" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/movies'>
                        <CardImage src="https://images-eu.ssl-images-amazon.com/images/I/41G4bkBinRL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
                            centered={true} title="Movies" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/wwe'>
                        <CardImage src="https://prod-img.thesouledstore.com/public/theSoul/uploads/users/artists/20210921114053-cp-1.jpg?format=webp&w=1440&dpr=1.0"
                            centered={true} title="WWE" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/graffiti'>
                        <CardImage src="https://images-na.ssl-images-amazon.com/images/I/61Oy%2BxwFlyL._AC_UX385_.jpg"
                            centered={true} title="Graffiti" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/cartoons'>
                        <CardImage src="https://www.bypeople.com/wp-content/uploads/2018/10/tshirt-designs-vector-cartoon-dan-roach-bypeople-deals-39.png"
                            centered={true} title="Cartoons" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/memes'>
                        <CardImage src="https://wlos.com/resources/media/4ee55459-6d8d-4aec-a6a8-761d02e019da-medium16x9_berniepic3.jpg?1611524153024"
                            centered={true} title="Memes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/quotes'>
                        <CardImage src="https://img.freepik.com/free-vector/mom-t-shirt-designs-bundle-mother-s-day-quotes-typography-graphic-t-shirt-collection_85212-1081.jpg?size=626&ext=jpg"
                            centered={true} title="Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/sports'>
                        <CardImage src="https://t3.ftcdn.net/jpg/03/72/04/26/360_F_372042614_Gs9yRSENKB7aFv5QJmo6ojiMod4EkvOr.jpg"
                            centered={true} title="Sports" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/music'>
                        <CardImage src="https://blog.placeit.net/wp-content/uploads/2020/08/music_tshirt_design_mockups.png"
                            centered={true} title="Music" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts'>
                        <CardImage src="https://m.media-amazon.com/images/I/81xCZY7DpLL._UL1500_.jpg"
                            centered={true} title="All T-Shirts" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
