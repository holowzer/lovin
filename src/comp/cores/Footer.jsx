import React from 'react'
import youtube from "../../img/youtube.png"
import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"
import tripAdvisor from "../../img/trip-advisor.png"
import roatanlogo from "../../img/logoLovin.jpg"
import "../css/Footer.scss"
const Footer=()=>{
    return(
        <footer>
            <div className="columnFooter">
                <div className="roatanLogo">
                    <img src={roatanlogo} alt="roatan logo"/>
                </div>
                <div className="moto">
                    Carribean's front beach <br/>    wedding specialists.
                </div>
            </div>
            <div className="columnFooter">
                <div className="secondMoto">
                Say “I do” in the beautiful island of Roatan and allow us to create your own fairy tale of love.
                </div>
                <div className="logosSocial">
                    <a href="https://www.facebook.com/lovinroatan/"><img src={facebook} alt="lovin roatan logo"/></a>
                    <a href="https://www.tripadvisor.com/Profile/lovinroatan"><img src={tripAdvisor} alt="lovin roatan tripadvisor"/></a>
                    <a href="https://www.instagram.com/lovinroatan/"><img src={instagram} alt="lovinroatan instagram"/></a>
                    <a href="https://www.youtube.com/channel/UCkWo5kFcay8Ei-ZFLDKgZPQ"><img src={youtube} alt="lovinroatan youtube"/></a>
                </div>
            </div>
            <div className="columnFooter">
                
                <div><h3>more links</h3></div>
                <div><a href="https://roatantourismbureau.com/">Roatan tourism bureau</a></div>
                <div><a href="https://www.facebook.com/LovinRoatan-Travels-2423320961284586/">LovinRoatan Travels</a></div>
                <div><a href="https://docs.google.com/forms/d/1sbm_sAwTNQt5CYt85NWqvcbl2Av9c6cxWpCstPW2t18/edit">Plan your wedding</a></div>
            </div>
        </footer>
    )
}

export default Footer