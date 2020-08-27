import React,{useEffect} from 'react'
import Nav from "./Nav"
import laura from "../../img/laura.jpeg"
import rico from "../../img/rico.jpg"
import sr from '../scrollReveal'
import "../css/AboutUs.scss"
import badge1 from "../../img/badge1.png"
import badge2 from "../../img/badge2.png"
import badge3 from "../../img/badge3.png"
import badge4 from "../../img/badge4.png"
import badge5 from "../../img/badge5.png"
import badge6 from "../../img/badge6.png"
import creative from "../../img/creative.png"
const AboutUs=()=>{
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
        <div className="aboutUs">
             <Nav/>
            <div className="bandTitle">
                <h2 className="revealMe">a dedicated team of pros.</h2>
            </div>
             <div className="presentation">
                 <div className="cardPerso">
                     <img className="revealMe" src={rico} alt="roatan wedding ceo"/>
                     <h2 className="revealMe">Rico Raspaldo</h2>
                     <p className="revealMe">Rico Raspaldo is the founder and principal event Cordinator of LovinRoatan specializing in the beach front exclusive boutique weddings, the hotelier an tourism market, as well as consulting to the special events industry. <br/> Rico Raspaldo and his team execute one-of-a-kind celebrations and multi-day events while meeting and exceeding client expectations. <br/> He believes that an event must represent the guest(s) or company’s brand and should be a direct reflection of the clients’ vision and their expectations for the successful outcome of their event.</p>
                 </div>
                 <div className="cardPerso">
                     <img className="revealMe" src={laura} alt="roatan wedding planner"/>
                     <h2 className="revealMe">Laura Fernandez</h2>
                     <p className="revealMe">Wedding Planner, coordination, comprehensive advice on weddings and events. With a passionate, entrepreneurial, and responsible spirit, I devote myself to the organization of Weddings and Events. <br/> Being meticulous, orderly, charismatic, and committed to clients are some of the attributes of my personality that I reflect in LOVINROATAN WEDDINGS; additionally, we are a company comprised of an extraordinary team of professionals to achieve the best result in the wedding or event.
                        My task is to propose a design of the wedding or event according to the desires of the “bride & groom” and clients, optimizing their investment and effectively managing the preparations while taking care of fundamental and emotional details.
                    </p>
                 </div>
             </div>
             <div className="bandTitle">
                <h2 className="revealMe">respect of our planet.</h2>
            </div>
            <div className="badgeAndPlanet">
                <div className="paragraphBadge">
                    <h3 className="revealMe">respecting our islands with you.</h3>
                    <p className="revealMe">Roatan wedding planner LR is a highly qualified & affortable wedding and event planner with more than a decade of experience designing, planning, and managing exclusive weddings and events in Carribean Bay Islands. LovinRoatan's services will assists you in thoughtfully planning, crafting, and producing your dream wedding anywhere your heart desires. We do this by interpreting your vision, assessing the possibilities, creating the budgets and translating them into well-planned events.</p>
                </div>
                <div className="frameBadge">
                    <img className="revealMe" src={badge1} alt="roatan respect planet"/>
                    <img className="revealMe" src={badge2} alt="lovin roatan engagment"/>
                    <img className="revealMe" src={badge3} alt="lovin roatan green"/>
                    <img className="revealMe" src={badge4} alt="climat roatan wedding"/>
                    <img className="revealMe" src={badge5} alt="wedding in paradise green"/>
                    <img className="revealMe" src={badge6} alt="carribean respect environnement"/>
                </div>
            </div>
            <div className="bandTitle">
                <h2 className="revealMe">Creativity and professionalism.</h2>
            </div>
            <div className="finalTouch">
                <div className="paragraphRoatanPro">
                    <h3  className="revealMe">
                        Innovative Concepts &
                        Unforgetable Experiences
                    </h3>
                    <p className="revealMe" >
                    Creative ideas, out-of-the-box thinking, and attention to detail are what we are known for.LovinRoatan brings the innovative concepts, hands-on approach, and attention to detail that has earned us reputation for creating beautiful and unforgetable beach front weddings. We bring your stories to life by providing you with unparalleled customer service, creative ideas, customized event design, as well as access to our strategic partners and our resources.
                    </p>
                </div>
                <div className="photoRoatanPro">
                    < img className="revealMe" src={creative} alt="creative wedding planner"/>
                </div>
            </div>
        </div>
    )
}
export default AboutUs
