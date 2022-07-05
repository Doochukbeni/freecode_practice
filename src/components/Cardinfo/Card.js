import React from 'react'

function Card(props) {
  let badgeText 
  if (props.openSpots === 0) {
  badgeText = 'SOLD OUT'    
  } else if (props.location === 'online') {
    badgeText = 'online'
  } 
    
  return (
    <div className='card'>
       <div className='card-badge'>{badgeText}</div>
      <img src={props.img} className='hero-image' />
      <div className='stats'>
        <img src='../IMG-20180115-WA0013.jpg' className='stat-photo' />
        <span>{props.ratings}</span>
        <span className='gray'>({props.reviewCount}).</span>
        <span className='gray'>{props.location}</span>
      </div>
      <div>
        <p className='card-title'>{props.title} </p>
        <p><strong> from: ${props.price} </strong>/ person</p>
        
      </div>
          
    </div>
  );
}

export default Card

