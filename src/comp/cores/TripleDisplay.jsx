import React from 'react'
import '../css/TripleDisplay.scss'
import imgDisplay1 from '../../img/imgDisplay1.jpg'
import imgDisplay2 from '../../img/imgDisplay2.jpg'
import bigDisplayImg from '../../img/bigDisplayImg.jpg'
const TripleDisplay=()=>{
    return(
        <div>
            <div className="display rose">
                <div className="textDisplay">
                    <h3 className="revealMe">Trust Roatan's magical feeling.</h3>
                    <p className="revealMe">In a marriage, it is important to leave with memories. Trust us... Beautiful landscapes and professional photographers are waiting for you to immortalize this magical moment.</p>
                    <div className="lineBlack"></div>
                </div>
                <div className="photoDisplay">
                    <img src={imgDisplay1} alt="cruise ship carribean wedding" />
                </div>
            </div>
            <div className="displayBig">
                <img src={bigDisplayImg} alt="wedding romantic destination" />
            <h2 className="revealMe">Customize everything from the decoration to your location</h2>
            <p className="revealMe">we got the experience and the partners to give ou a wide range of choice. Your wedding will look like you made it. We give birth to your own customized wedding.</p>
            </div>
            <div className="display blue">
            <div className="photoDisplay">
                <img src={imgDisplay2} alt="carribean sand beach wedding" />
            </div>
            <div className="textDisplay">
                <h3 className="revealMe">Trust our 13 people team of pros</h3>
                <p className="revealMe">With a professional team of hard workers, you can forget about the stress and the anxiety. Just let positive emotions flow through you.</p>
                <div className="lineWhite"></div>
            </div>
            </div>
        </div>
    )
}
export default TripleDisplay