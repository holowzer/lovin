import React from 'react'
import "../css/WindowPackages.scss"

const WindowPackage=(props)=>{
    return(
       <div className="windowPackage">
           <div className="imgContainer">
               <img src={props.img} alt="lovin roatan partners"/>
           </div>
           <div className="text">
               <h3> {props.title} </h3>
               <p> {props.paragraph} </p>
               <a href={props.link}>Check their website ↘ </a>
           </div>
       </div> 
    )
}
export default WindowPackage