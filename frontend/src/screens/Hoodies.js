import React from 'react'
import CardImage from '../minicomponents/CardImage'
import {Link} from 'react-router-dom'
import HeroTitle from '../minicomponents/HeroTitle'
import Meta from '../minicomponents/Meta'


export default function Hoodies() {
    return (
        <div className="SubCategories SubHoodies my-4">
            <Meta title="Hoodies" />
            <Link to='/' className="btn btn-dark text-right mb-2">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <HeroTitle text="Shop in Hoodies" />
            <div className="row">
                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/plainhoodies'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Plain Hoodies" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/animie'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Anime" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/webseries'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Webseries" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/cartoons'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Cartoons" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/memesandquotes'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Memes and Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/superheroes'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Superheroes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/games'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Games" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/music'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="Music" />
                    </Link>
                </div>

                <div className="col col-md-4">
                    <Link to='/api/products/category/hoodies/brand/collection'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="My Collection" />
                    </Link>
                </div>

                <div className="col col-md-4">
                    <Link to='/api/products/category/hoodies'>
                        <CardImage src="http://via.placeholder.com/640x360"
                            centered={true} title="All Hoodies" />
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
