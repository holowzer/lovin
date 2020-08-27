import React from 'react'
import '../css/Header.scss'

const Header=(props)=>{
 





    return(
        <div  className="headerContainer">
            <img className="revealMe" src={props.headerImg} alt={props.altTag}/>
              <span className="bigSentence revealMe">{props.headerTitle}</span>
            </div>
    )
}
export default Header