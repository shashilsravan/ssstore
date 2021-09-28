import React from 'react'
import CardImage from '../minicomponents/CardImage'
import {Link} from 'react-router-dom'
import HeroTitle from '../minicomponents/HeroTitle'
import Meta from '../minicomponents/Meta'


export default function Tshirts() {
    return (
        <div className="SubCategories SubTshirts my-4">
            <Meta title="Chaotic | Tshirts" />
            <Link to='/' className="btn btn-dark text-right mb-2">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <HeroTitle text="Shop in T-Shirts" />
            <div className="row">
                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/plaintees'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Plain Tshirts" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/animie'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Anime" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/webseries'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Webseries" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/movies'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Movies" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/wwe'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="WWE" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/graffiti'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Graffiti" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/cartoons'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Cartoons" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/memes'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Memes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/quotes'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/sports'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Sports" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/music'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Music" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/hiphop'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="HipHop" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/spiritual'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Spiritual" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/games'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Games" />
                    </Link>
                </div>


                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/literature'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Literature" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/photography'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Photography" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/superheroes'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Superheroes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/regional'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Regional" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/wanderers'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Wanderers" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/hightees'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="High Tees" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/combo'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Combo T-Shirts" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="All T-Shirts" />
                    </Link>
                </div>


            </div>
        </div>
    )
}
