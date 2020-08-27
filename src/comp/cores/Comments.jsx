import React from 'react'
import '../css/Comments.scss'
import imgComment1 from '../../img/imgComment1.jpg'
import imgComment2 from '../../img/imgComment2.jpg'
import imgComment3 from '../../img/imgComment3.jpg'

const Comments=()=>{
    return(
        <div className="commentsContainer">
            <div className="upComments">
                <h2>
                ALL OUR CLIENTS WANT TO DO A SECOND WEDDING AFTER THEY EXPERIENCED LOVIN ROATAN 
                </h2>
            </div>
            <div className="incommentSection">
            <div className="commentsPic">
                <div className="imgContainer">
                    <img src={imgComment1} alt="facebook good feedbacks" />
                    <img src={imgComment2} alt="facebook wedding planner " />
                    <img src={imgComment3} alt="bet rated roatan wedding planner" />
                </div>
            </div>
            <div className="commentsInfo">
                <p>Customer satisfaction is a key indicator when looking for a <strong> wedding planner.</strong> We do not hide our successes. Our customers thank us for our services, especially through our social networks!
You can embark without risk for the adventure of your life thanks to a <strong> dedicated and irreproachable team.</strong></p>
                <a href="https://www.instagram.com/lovinroatan/">Check our instagram   <span role="img" aria-describedby> ✨ ↘</span> </a>
            </div>
            </div>
        </div>
    )
}
export default Comments