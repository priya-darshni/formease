import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css';
const Card = ({source,alttext,titl,desc,btn,link,exam_desc, eligibility, imp_details}) => {
  return (
    <div className='image-card'>
        <img src={source} alt={alttext} className='img-c'></img>
        <h1 className='title-card'>{titl}</h1>
        <p className='card-desc'>{desc}</p>
        <NavLink to={link} className='button'>{btn}</NavLink>
    </div>
  )
}

export default Card;