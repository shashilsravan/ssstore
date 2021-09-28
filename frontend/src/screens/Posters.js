import React from 'react'
import CardImage from '../minicomponents/CardImage'
import {Link} from 'react-router-dom'
import HeroTitle from '../minicomponents/HeroTitle'
import Meta from '../minicomponents/Meta'


export default function Posters() {
    return (
        <div className="SubCategories SubPosters my-4">
            <Meta title="Posters" />
            <Link to='/' className="btn btn-dark text-right mb-2">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <HeroTitle text="Shop in Posters" />
            <div className="row">
                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/animie'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Anime" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/webseries'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Webseries" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/movies'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Movies" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/wwe'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="WWE" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/graffiti'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Graffiti" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/cartoons'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Cartoons" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/memes'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Memes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/quotes'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/sports'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Sports" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/music'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Music" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/hiphop'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="HipHop" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/spiritual'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Spiritual" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/games'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Games" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/collection'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="My Collection" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/literature'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Literature" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/photography'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Photography" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/superheroes'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Superheroes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/regional'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Regional" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/wanderers'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Wanderers" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/motivational'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Motivational" />
                    </Link>
                </div>

                <div className="col">
                    <Link to='/api/products/category/posters'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="All Posters" />
                    </Link>
                </div>

            </div>
        </div>
    )
}
