import React from 'react'
import '../css/BeachFront.scss'
import Header from './Header'
import Nav from './Nav'
import headerImg from '../../img/headerImg2.jpg'
import sr from '../scrollReveal'
import { useEffect } from 'react'
import TextDiv2 from "./TextDiv2"
import triptic1 from "../../img/triptic1.jpg"
import triptic2 from "../../img/triptic2.jpg"
import triptic3 from "../../img/triptic3.jpg"
import BigTitleBand from "./BigTitleBand"
import WindowPackage from './WindowPackages'
import littleFrenchKey from '../../img/littleFrenchKey.jpg'
import henrymorgan from '../../img/henrymorgan.jpg'
import grandroatan from '../../img/grand roatan wedding.jpg'
import fantasy from '../../img/fantasy island wedding.jpg'
import medialuna from '../../img/media luna wedding.jpg'
    
const BeachFront =()=>{

    const altTag="Roatan cruise ship wedding"
    const headerTitle="BEACH FRONT WEDDING, PERFECT SUNSET, PERFECT WEDDING."
    useEffect(() => {
        const config = {
            origin: 'bottom',
            duration: 1200,
            delay: 550,
            distance: '100px',
            scale: 1.2,
            interval:100,
            easing:  'cubic-bezier(0.5, 0, 0, 1)',
          }
          sr.reveal(document.querySelectorAll('.photoBooth'), config)
          sr.reveal(document.querySelectorAll('.photoPostcard'), config)
          sr.reveal(document.querySelectorAll('.imgContainer img'), config)
          sr.reveal(document.querySelectorAll('.revealMe'), config)


    },
     [])

    return(
        <div className="beachFront">
            <Nav/>
            <Header headerImg={headerImg} altTag={altTag} headerTitle={headerTitle} /> 
            <TextDiv2 title="PERFECT WHITE SAND BEACH ARE WAITING FOR YOU. WE ORGANISE with our partner venues, YOU ENJOY." 
            img1={triptic1} 
            img2={triptic2} 
            img3={triptic3}
            alttagImg="cruiseShipWedding"
            paragraph1="For many couples a beach is the perfect place to exchange their wedding vows with soft warm sand underfoot and a gorgeous view of the ocean. That's why we made this events our speciality. We know the power of a well made tropical beach fonrt wedding."
            paragraph2="It makes trully unique memories. Getting married like in Hollywood movies is not out of reach. You just have to organize it as it should be and let yourself be lulled by the sound of the waves."   />
            <BigTitleBand title="SIMPLY CHOOSE BETWEEN 5 SURREAL BEACH SPOTS" />
            <WindowPackage  img={littleFrenchKey} title="Little French Key" paragraph="Enjoy an amazing beach front wedding at Roatans most beautiful private island. Little French Key has evolved over the years to become Roatan's premier destination. Encapsulating the culture, history, and flavors of what makes Roatan Unique. "
            link="https://www.littlefrenchkey.com/weddings" />
            <WindowPackage  img={henrymorgan} title="Henry Morgan Resort Roatan" paragraph="Offering perfect relaxation, a private experience, a trully carribean gettaway. Get married in its soft white sand and aqua blue waters of this Caribbean Treasure we call Roatan. You’ll fall in love again in this beautiful venue. With unparalleled views"
            link="http://henrymorgan.hmresorts.com/promos" />
            <WindowPackage  img={grandroatan} title="Grand Roatan Resort" paragraph="On the southernmost tip of Roatán Island, overlooking West Bay Beach, get married on its sandy beach. Grand Roatán Caribbean Resort is a rare tropical gem that merges authenticity with unmatched luxury and elegance. Stylish and sophisticated, nestled between a pristine forest sanctuary and the crystal-clear waters of the Caribbean. "
            link="https://www.grandroatanresort.com/weddings" />
            <WindowPackage  img={fantasy} title="Fantasy Island" paragraph="Mainly designed to immerse you in the beauty of Roatán, Fantasy Island delivers every imaginable comfort. Accommodations with unmatched exclusivity, panoramic oceanfront views and vibrant Caribbean flair. Get married in between its lush palms and tropical gardens teeming with exotic indigenous wildlife."
            link="http://www.fantasyislandresort.com/gallery-en.html" />
            <WindowPackage  img={medialuna} title="Media Luna" paragraph="The Pearl of the Caribbean… refined, precious, endowed with an innate elegance without the confines of time.Are you searching for a refuge in the pure nature?Do you want an eco-Lodge that respects the natural harmony of the elements?Are you seeking absolute relaxation with personal treatment … You found it."
            link="https://medialuna.hmresorts.com/gallery" />

            <div className="descriptionDeep">
                <div className="descriptionContainer">
                    <div>
                    <h3 className="revealMe">There is no limits to your dream.</h3>
                    <p className="revealMe">You can choose everything. from those 5 amazing spots to the whole decoration. 
                    <br/>
                    We give you <strong> a wide range of choices </strong> of the bouquets of flowers, the furniture, the type of evening, the atmosphere or the activities etc..
                    <br/>
                    But, as a wedding planner, we only need to know your expectations to advise you accurately. <strong> Guiding you is our job.</strong> <br/> <br/>
                    We speak English, French and Spanish fluently. The contact will go smoothly and we will have no trouble understanding your wishes.

                    </p>
                    </div>
                </div>
                <div className="descriptionContainer bgBoi">
                    <div className="bgOpacity">
                    <span className="revealMe decorationSpan">
                        Your beach Front Wedding
                        for 10 guests starting at
                    </span >
                    <span className='revealMe lineSpan'>-</span>
                    <span className="revealMe price">1250$</span>
                    </div>
                    <div className="bgOpacity">
                    <span className="revealMe decorationSpan">
                        We already planned 
                    </span >
                    <span className='revealMe lineSpan'>-</span>
                    <span className="revealMe price">128 happy weddings on the white sand</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeachFront