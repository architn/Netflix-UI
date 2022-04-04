/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './CardWithImage.css'


function ProfileCard(props) {
  return (
    <div id={props.id}>
        <div className="card" id={props.cardID}>
            <img id={props.imgSizer} className="card-img-top" src={props.img} alt="Card"  />
        </div>
        <br/>
        <span className='card-title'>{props.name}</span>
    </div>
  )
}

export default ProfileCard