import React from 'react'
import Nav from './Nav'
import Header from './Header'
import headerImg from '../../img/headerImg.jpg'
import TextDiv1 from './TextDiv1'
import Postcard from './Postcard'
import Comments from "./Comments"
import TripleDisplay from "./TripleDisplay"
import postcardBlueImg from '../../img/postcardBlueImg.jpg'
import postcardWhiteImg from '../../img/postcardWhiteImg.jpg'
import sr from '../scrollReveal'
import { useEffect } from 'react'


const postcardBlueTitle='Roatan is a little island perfect for your destination wedding...'
const postcardBlueLow='A trusted destination for tourism but, also for amazing tropical weddings...'
const postcardBlueParagraph='Roatan island is easy to access, discover its uniqueness culture and its amazing vues. Thousands of tourist come everyday but we know the perfect unknown spots to make that big moment intimate and unique.'

const postcardWhiteTitle='A paradise on earth. The best place for the best moment.'
const postcardWhiteLow='Jus an exemple of the numerous spots to create a unique wedding in Roatan.'
const postcardWhiteParagraph='Forget the unpersonal spaces and spend a close moment with your loved ones. Looks like a postcard from any angle. '

const Homepage =()=>{
    const altTag="Roatan beach"
    const headerTitle="we organize your dream wedding in Roatan, a Caribbean island full of charm."
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
          sr.reveal(document.querySelectorAll('.photoBooth img'), config)
          sr.reveal(document.querySelectorAll('.photoPostcard img'), config)
          sr.reveal(document.querySelectorAll('.revealMe'), config)
          sr.reveal(document.querySelectorAll('.imgContainer img'), config)


    },
     [])

    return(
        <div className="Homepage">
            <Nav/>
            <Header headerImg={headerImg} altTag={altTag} headerTitle={headerTitle} /> 
            <TextDiv1/>
            <Postcard idSend="blueboi" color={"rgba(48, 62, 113, 1)"} 
            img={postcardBlueImg} 
            title={postcardBlueTitle} lowTitle={postcardBlueLow} paragraph={postcardBlueParagraph} />

            <Postcard idSend="whiteboi" color={"rgba(255, 255, 255, 1)"} 
            img={postcardWhiteImg} 
            title={postcardWhiteTitle} lowTitle={postcardWhiteLow} paragraph={postcardWhiteParagraph} />
            <Comments />
            <TripleDisplay/>

            
        </div>
    )
}
export default Homepage