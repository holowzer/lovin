import React, { useEffect,useState } from 'react'
import "../css/Menu.scss"
import {Link} from "react-router-dom"
import islands from '../../img/islands.jpg'
import iconM from '../../img/Menu.png'
import iconD from '../../img/Delete.png'

const Menu =()=>{
    let [icon,setIcon]=useState(iconM)
    const iconToggler=()=>{
        if(icon===iconM){
            setIcon(iconD)
            icon=iconD
        }
        else if(icon===iconD){
            setIcon(iconM)
            icon=iconM
        }
    }
    useEffect(() => {
        const buttonMenu=document.querySelector('.activateButton')
        const menu=document.querySelector('.globalBoi')
        const links=document.querySelectorAll('.activateMeMenu a')
        links.forEach((e)=>{
            e.addEventListener('click',()=>{
                menu.classList.remove('inside')
                setIcon(iconM)
                icon=iconM

            })
        })
   
    buttonMenu.addEventListener('click',()=>{
       
        iconToggler()
        
       menu.classList.toggle('inside') 
         
    })
    setInterval(() => {
        console.log('yess')
      if(window.scrollY>30){
          document.querySelector('.activateButton').classList.add('activateButtonOn')
         


          }
          else{
            document.querySelector('.activateButton').classList.remove('activateButtonOn')
          }
    }, 500);
}, [])


    return(
    <div>
        <div className="globalBoi">
        <div className="activateMeMenu">
            <div className="lineWhite"></div>
            <div className="menuTitle"><Link to="/">HOME</Link></div>
            <div className="lineWhite"></div>
            <div className="menuTitle"><Link to="/CruiseShip">Cruise Ship Wedding</Link></div>
            <div className="lineWhite"></div>
            <div className="menuTitle"><Link to="/BeachFront">Beach Front Wedding</Link></div>
            <div className="lineWhite"></div>
            <div className="menuTitle"><Link to="/AboutUs">The Team</Link></div>
            <div className="lineWhite"></div>
            <div className="menuTitle"><Link to="">Contact</Link></div>
            <div className="lineWhite"></div>
        </div> 
        <img id="bgMenu" src={islands} alt="menu background"/>

        </div>
            <div className="activateButton">
                <img src={icon}  alt="close button"/>
            </div> 
    </div>
    )
}

export default Menu