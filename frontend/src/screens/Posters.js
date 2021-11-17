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
                        <CardImage src="https://www.1999.co.jp/itbig45/10455132.jpg"
                            centered={true} title="Anime" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/webseries'>
                        <CardImage src="https://preview.redd.it/5lqpcm3o73r21.jpg?width=2324&format=pjpg&auto=webp&s=5afa0d2321b511690baf84cdee281164ee96a09d"
                            centered={true} title="Webseries" />
                    </Link>
                </div>


                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/quotes'>
                        <CardImage src="https://media.istockphoto.com/vectors/sea-posters-set-with-cute-fishing-or-sailing-boats-and-motivational-vector-id1222609555"
                            centered={true} title="Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/sports'>
                        <CardImage src="http://cdn.shopify.com/s/files/1/0236/6725/files/vscocam-photo-1.jpg?11642190030128805781"
                            centered={true} title="Sports" />
                    </Link>
                </div>


                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/games'>
                        <CardImage src="https://i0.wp.com/overmental.com/wp-content/uploads/2015/03/pokemon_english_web.jpg?ssl=1"
                            centered={true} title="Games" />
                    </Link>
                </div>

                <div className="col">
                    <Link to='/api/products/category/posters'>
                        <CardImage src="https://i.redd.it/pvebjyi20v131.png"
                            centered={true} title="All Posters" />
                    </Link>
                </div>

            </div>
        </div>
    )
}
