import React from 'react'
import '../css/TextDiv1.scss'
import photoLovinPrez1 from '../../img/whatisLovinRoatan1.jpg'
import photoLovinPrez2 from '../../img/whatisLovinRoatan2.jpg'


const TextDiv1=()=>{
    return(
        <div className="textDiv1Container">
            <div className="upSpan">
                <span>What is</span>
            </div>
            <div className="contentContainer">
                <div className="textContent">
                    <h1>LovinRoatan</h1>
                    <p>Roatan wedding planner LR is a highly qualified & affordable wedding and event planner with more than a decade of experience in designing, planning, and managing exclusive weddings and events in Carribean Bay Islands. LovinRoatan's services will assists you in thoughtfully planning, crafting, and producing your dream wedding anywhere your heart desires.  <br/> <br/> We do this by interpreting your vision, assessing the possibilities, creating the budgets and translating them into well-planned events.</p>
                </div>
                <div className="photoContainer">
                    <div className="photoBooth">
                        <img src={photoLovinPrez1} alt="lovin roatan presentation" />
                        <span className="littleText">THE CLASSIC GAZEBO VENUE IS OUR CORE COMPETENCE.</span>
                    </div>
                    <div  className="photoBooth">
                        <img src={photoLovinPrez2} alt="lovin roatan team" />
                        <span className="littleText">CELEBRATE IN FRONT OF THE ASTONISHING LANDSCAPES WITH THE FRESH SEA AIR.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TextDiv1