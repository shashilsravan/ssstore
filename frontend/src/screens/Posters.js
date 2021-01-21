import React from 'react'
import CardImage from '../minicomponents/CardImage'
import {Link} from 'react-router-dom'
import HeroTitle from '../minicomponents/HeroTitle'
import Meta from '../minicomponents/Meta'


export default function Posters() {
    return (
        <div className="SubCategories SubPosters my-4">
            <Meta title="Chaotic | Posters" />
            <Link to='/' className="btn btn-dark text-right mb-2">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <HeroTitle text="Shop in Posters" />
            <div className="row">
                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/animie'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427380/anime_mkou9v.jpg"
                            centered={true} title="Printed Posters - Anime" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/webseries'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427389/tv_shows_azg6jm.jpg"
                            centered={true} title="Printed Posters - Webseries" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/movies'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427389/movies_b7qihd.jpg"
                            centered={true} title="Printed Posters - Movies" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/wwe'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427375/wwe_tsqzr5.jpg"
                            centered={true} title="Printed Posters - WWE" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/graffiti'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427392/graffiti_agxcr9.jpg"
                            centered={true} title="Printed Posters - Graffiti" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/cartoons'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/cartoon_nuawdz.jpg"
                            centered={true} title="Printed Posters - Cartoons" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/memes'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427368/meme_lzhpgz.jpg"
                            centered={true} title="Printed Posters - Memes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/quotes'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427364/qu_d5sqlb.jpg"
                            centered={true} title="Printed Posters - Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/sports'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427398/sports_zbrdbn.jpg"
                            centered={true} title="Printed Posters - Sports" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/music'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427386/music_opxjqj.jpg"
                            centered={true} title="Printed Posters - Music" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/hiphop'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427386/hip_hop_c7uvi3.jpg"
                            centered={true} title="Printed Posters - HipHop" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/spiritual'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427406/spritual_vhulig.jpg"
                            centered={true} title="Printed Posters - Spiritual" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/games'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427392/games_vjucmc.jpg"
                            centered={true} title="Printed Posters - Games" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/collection'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1605966215/alchemy/mainlogo_ocs3sl.png"
                            centered={true} title="Alchemy Collection" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/literature'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/litrature_qbrafs.jpg"
                            centered={true} title="Printed Posters - Literature" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/photography'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427391/photography_glyxiu.jpg"
                            centered={true} title="Printed Posters - Photography" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/superheroes'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/superhero_twffhv.jpg"
                            centered={true} title="Printed Posters - Superheroes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/regional'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427367/regional_luimrb.jpg"
                            centered={true} title="Printed Posters - Regional" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/wanderers'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427400/wandrer_xkg3gy.jpg"
                            centered={true} title="Printed Posters - Wanderers" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/posters/brand/motivational'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427370/motivation_jsghyf.jpg"
                            centered={true} title="Printed Posters - Motivational" />
                    </Link>
                </div>

                <div className="col">
                    <Link to='/api/products/category/posters'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1611198105/alchemy/Slideshow/po_jb5hte.jpg"
                            centered={true} title="All Posters" />
                    </Link>
                </div>

            </div>
        </div>
    )
}
