import React from 'react'
import '../css/TextDiv2.scss'


const TextDiv2=(props)=>{


    return(
        <div className="globalTextDiv2">
            <div className="upNav">
                <h2>{props.title}</h2>
            </div>
            <div className="containerContent">
                <div className="triptic">
                    <div className="imgContainer">
                      <img src={props.img1} alt={props.altagImg} />
                    </div>
                    <div className="imgContainer">
                      <img src={props.img2} alt={props.altagImg} />
                    </div>
                    <div className="imgContainer">
                     <img src={props.img3} alt={props.altagImg} />
                    </div>
                </div>
                <div className="text">
                    <p>{props.paragraph1}</p>
                    <p> {props.paragraph2} </p>
                </div>
            </div>
        </div>
    )
}

export default TextDiv2