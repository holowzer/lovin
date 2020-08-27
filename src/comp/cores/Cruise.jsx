import React from 'react'
import '../css/BeachFront.scss'
import Header from './Header'
import Nav from './Nav'
import headerImg from '../../img/headerImg3.jpg'
import sr from '../scrollReveal'
import { useEffect } from 'react'
import TextDiv2 from "./TextDiv2"
import cruise1 from "../../img/Cruisetrip1.jpg"
import cruise2 from "../../img/Cruisetrip2.jpg"
import cruise3 from "../../img/Cruisetrip3.jpg"
import BigTitleBand from "./BigTitleBand"
import WindowPackage from './WindowPackages'
import cruisewindow1 from '../../img/cruiseWindow1.jpg'
import cruisewindow2 from '../../img/cruiseWindow2.jpeg'

    
const BeachFront =()=>{

    const altTag="Roatan cruise ship wedding"
    const headerTitle="CRUISE SHIP WEDDING, a magic MOMENT WITH YOUR LOVED ONES"
    useEffect(() => {
        const config = {
            origin: 'bottom',
            duration: 1400,
            delay: 850,
            distance: '100px',
            scale: 1.2,
            interval:300,
            easing:  'cubic-bezier(0.5, 0, 0, 1)',
          }
          sr.reveal(document.querySelectorAll('.photoBooth'), config)
          sr.reveal(document.querySelectorAll('.photoPostcard'), config)
          sr.reveal(document.querySelectorAll('.imgContainer img'), config)
          sr.reveal(document.querySelectorAll('.revealMe'), config)


    },
     [])

    return(
        <div className="cruise">
            <Nav/>
            <Header headerImg={headerImg} altTag={altTag} headerTitle={headerTitle} /> 
            <TextDiv2 title="ORGANISATION, TIMING AND SPECIAL WEDDING? THAT’S OUR JOB. GET YOUR CRUISE SHIP IN ROATAN." 
            img1={cruise1} 
            img2={cruise2} 
            img3={cruise3}
            alttagImg="cruiseShipWedding"
            paragraph1="if your cruise goes through Roatan, you just have to contact us to set up your tailor-made wedding. These types of events are managed by our teams very easily to let you enjoy without worrying about the time."
            paragraph2="We have been dealing with this type of ceremony for more than 10 years and it leaves an intense memory for our clients. The photo will be beautiful, your guests will be bewitched."   />
            <BigTitleBand title="TWO MAIN POSITIVE POINTS" />
            <WindowPackage  img={cruisewindow1} title="make your wedding easy" paragraph="We respect customized timelines for your wedding. After making contact, we will establish your ceremony for you by adapting to the time of your arrival and your desires. You'll have a detailed minute-by-minute report of the activities and all the details of your wedding. "
            link="https://www.littlefrenchkey.com/weddings" />
            <WindowPackage  img={cruisewindow2} title="an unforgettable view" paragraph="the view is magnificent, you will be in the heart of the most beautiful postcard. No place seems more adapted to get married... We are in contact with partners as soon as you leave your boat to control every detail. Just contact us to start planning your wedding."
            link="https://www.littlefrenchkey.com/weddings" />
        </div>
    )
}

export default BeachFront