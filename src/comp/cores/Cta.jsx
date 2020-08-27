import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import ShipPhoto from "../../img/shipPhoto.jpg"
import beachfront from "../../img/beachfront.jpg"
import contact from "../../img/contact.jpg"


import "../css/Cta.scss"

const Cta=()=>{
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apps.elfsight.com/p/platform.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])
    return(
        <div className="Cta">
            <div className="upNav">
                <h2>Start to check your options.</h2>
                <div className="lineBlack"></div>
            </div>
            <div className="containerChoice">
                <Link to="/CruiseShip">
                    <img src={ShipPhoto} alt="best cruise ship wedding planner 2020"/>
                    <h3>Cruise Ship Wedding</h3>
                </Link>
                <Link to="/BeachFront">
                    <img src={beachfront} alt="carribean front beach wedding"/>
                    <h3>Beach Front <br/> Wedding </h3>
                </Link>
                <a href="https://docs.google.com/forms/d/1sbm_sAwTNQt5CYt85NWqvcbl2Av9c6cxWpCstPW2t18/edit">
                    <img src={contact} alt="lovin roatan contact"/>
                    <h3>Contact <br/>Us </h3>
                </a>
            </div>
            <div className="elfsight-app-7d1758cd-cb65-45df-a082-f9784cd6a751"></div>
        </div>
    )
}
export default Cta