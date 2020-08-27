import React from 'react'
import '../css/BigTitleBand.scss'

const BigTitleBand=(props)=>{
    return(
        <div className="BigTitleBand">
            <h2> {props.title} </h2>
        </div>
    )
}

export default BigTitleBand