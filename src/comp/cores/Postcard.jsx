import React from 'react'
import '../css/Postcard.scss'

const Postcard=(props)=>{
    

    return(
        <div>
            <div id={props.idSend} className="postcardContainer">
                <div className="topPostcard">
                    <h2> {props.title} </h2>
                    <p>{props.paragraph}</p>
                </div>
                <div className="line"></div>
                <div className="photoPostcard">
                    <img src={props.img} alt="successful wedding roatan" />
                </div>
                <div className="descriptionImg">
                    <span className="littleText"> {props.lowTitle} </span>
                </div>
            </div>
        </div>
    )
  }
 

export default Postcard
