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
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427390/plain_watugh.jpg"
                            centered={true} title="Plain Tshirts" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/animie'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427380/anime_mkou9v.jpg"
                            centered={true} title="Anime" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/webseries'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427389/tv_shows_azg6jm.jpg"
                            centered={true} title="Webseries" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/movies'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427389/movies_b7qihd.jpg"
                            centered={true} title="Movies" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/wwe'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427375/wwe_tsqzr5.jpg"
                            centered={true} title="WWE" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/graffiti'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427392/graffiti_agxcr9.jpg"
                            centered={true} title="Graffiti" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/cartoons'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/cartoon_nuawdz.jpg"
                            centered={true} title="Cartoons" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/memes'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427368/meme_lzhpgz.jpg"
                            centered={true} title="Memes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/quotes'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427364/qu_d5sqlb.jpg"
                            centered={true} title="Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/sports'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427398/sports_zbrdbn.jpg"
                            centered={true} title="Sports" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/music'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427386/music_opxjqj.jpg"
                            centered={true} title="Music" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/hiphop'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427386/hip_hop_c7uvi3.jpg"
                            centered={true} title="HipHop" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/spiritual'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427406/spritual_vhulig.jpg"
                            centered={true} title="Spiritual" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/games'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427392/games_vjucmc.jpg"
                            centered={true} title="Games" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/collection'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1611065433/alchemy/a_sample_1_qsj6cf.png"
                            centered={true} title="Chaotic Collection" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/literature'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/litrature_qbrafs.jpg"
                            centered={true} title="Literature" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/photography'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427391/photography_glyxiu.jpg"
                            centered={true} title="Photography" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/superheroes'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/superhero_twffhv.jpg"
                            centered={true} title="Superheroes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/regional'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427367/regional_luimrb.jpg"
                            centered={true} title="Regional" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/wanderers'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427400/wandrer_xkg3gy.jpg"
                            centered={true} title="Wanderers" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/hightees'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606297338/alchemy/tshirts_gkbdud.jpg"
                            centered={true} title="High Tees" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/tshirts/brand/combo'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1608905683/alchemy/Slideshow/tees_c_nvdxc4_vlqs9a.jpg"
                            centered={true} title="Combo T-Shirts" />
                    </Link>
                </div>

                <div className="col">
                    <Link to='/api/products/category/tshirts'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1611197982/alchemy/Slideshow/all_t_fqek3p.jpg"
                            centered={true} title="All T-Shirts" />
                    </Link>
                </div>


            </div>
        </div>
    )
}
