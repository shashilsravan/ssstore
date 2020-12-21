import React from 'react'
import CardImage from '../minicomponents/CardImage'
import {Link} from 'react-router-dom'
import HeroTitle from '../minicomponents/HeroTitle'

export default function Hoodies() {
    return (
        <div className="SubCategories SubHoodies my-4">
            <Link to='/' className="btn btn-dark text-right mb-2">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <HeroTitle text="Shop in Hoodies" />
            <div className="row">
                <div className="col-6 col-md-4">
                    <Link to='/'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427390/plain_watugh.jpg"
                            centered={true} title="Plain Hoodies" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427380/anime_mkou9v.jpg"
                            centered={true} title="Printed Hoodies - Anime" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427389/tv_shows_azg6jm.jpg"
                            centered={true} title="Printed Hoodies - Webseries" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/cartoon_nuawdz.jpg"
                            centered={true} title="Printed Hoodies - Cartoons" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427368/meme_lzhpgz.jpg"
                            centered={true} title="Printed Hoodies - Memes and Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/superhero_twffhv.jpg"
                            centered={true} title="Printed Tshirts - Superheroes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427392/games_vjucmc.jpg"
                            centered={true} title="Printed Tshirts - Games" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427386/music_opxjqj.jpg"
                            centered={true} title="Printed Tshirts - Music" />
                    </Link>
                </div>

                <div className="col col-md-4">
                    <Link to='/'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1605966215/alchemy/mainlogo_ocs3sl.png"
                            centered={true} title="Alchemy Collection" />
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
