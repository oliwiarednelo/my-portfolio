import React from 'react'
import './Card.css';



function Card({ title, image, body }) {
    return (
        
       <div className='card-container' >

         <div className='thumbnail-container'>
            <img src={image} alt=''/>
         </div>
<div className='card-content'>
         <div className='card-title'>
            <h1>{title}</h1>
         </div>
         <div className='card-body'>
            <p>{body}</p>
         </div>
         <div className='btn-project'>
<button>Go to project</button>
         </div>
         </div>
       </div>
        


    )
}

export default Card;

