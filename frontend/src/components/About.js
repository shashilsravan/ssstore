import React, {useEffect} from 'react'
import HeroTitle from '../minicomponents/HeroTitle'
import { Helmet } from 'react-helmet'
import Typed from 'react-typed';

export default function About() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
        <Helmet>
            <title>About Chaotic</title>
            <meta name='About us' content=' We are three socially awkward yet brilliant minded' />
        </Helmet>
        <div className="my-5 about-section">
            <HeroTitle text="About Chaotic" />

            <div className="mt-5">
                <h4 className="fst-italic"><Typed
                    strings={['About the Team']}
                    typeSpeed={40}
                    backSpeed={50}
                /><strong>
                    
                    </strong></h4>
                <h5 className="fw-normal fst-italic text-justi">
                    We are three socially awkward yet brilliant minded, dynamic individuals who thought that our clothes and accessories should depict our emotions. Hence, we decided to create a space where every person, be it from a fandom, book club, dancer, wanderer, anyone and everyone finds something that they deeply relate or resonate with. We want our customers to fall in love with the designs that are uniquely ours. You shall surely find Peace in this so-called Chaotic Universe.
                </h5>
            </div>

            <div className="mt-5">
                <h4 className="fst-italic"><Typed
                    strings={['Why Chaotic']}
                    loop
                    typeSpeed={40}
                    backSpeed={50}
                /><strong>
                    
                    </strong></h4>
                <h5 className="fw-normal fst-italic text-justi">
                    While deciding the name for our company we looked at a lot of sophisticated names and were confused about what would click. Then, one fine day amidst our bantering session we acknowledged that just like some oddly-timed yet funny episodes of sitcoms, this was Chaotic. 
                    <br />
                    We make our own designs and we just can’t stress it enough. A genre might be popular but wait till you see our interpretation of it. All our products are high-quality items with unique graphics or designs. It is something we would have bought in a heartbeat while browsing the net, even though it was month end and our student allowance was about to end. 
                </h5>
            </div>

            <div className="mt-5">
                <h4 className="fst-italic"><Typed
                    strings={['About our Products']}
                    loop
                    typeSpeed={40}
                    backSpeed={50}
                /><strong>
                    
                    </strong></h4>
                <h5 className="fw-normal fst-italic text-justi">
                    Our T-Shirts are 100% cotton and very durable. Apart from stunning visuals it would also provide you with much needed comfort. We stand by our motto, “Wear Your Emotions” and want your personality to come through without compromising the comfort factor.
                    <br />
                    Our Bags are made from durable materials which is Reusable and 100% Biodegradable. Just a small effort to give back to the planet and make it a better place. Trendy yet Eco-friendly is what we call Sustainable Fashion.
                    <br />
                    Our Posters come in a cool bamboo packaging which could be further used for anything. Use them as the cookie boxes that contain yarn and needle. These posters are easy to put and will elevate the aura of your house, cramped hostel room, or a boring study area.
                    <br />
                    All our other products like Stickers, Masks, Diaries are also a little piece of our precious personalities. 
                    <br />
                    <br />
                    <strong>
                        <Typed
                    strings={['Have a nice shopping experience.', 'Thank you for choosing us.']}
                    loop
                    typeSpeed={40}
                    backSpeed={50} />
                    </strong>
                </h5>
            </div>

        </div>
        </>
    )
}
