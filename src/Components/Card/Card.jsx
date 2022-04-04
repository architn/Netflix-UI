/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Card/Card.css'
function Card(props) {
  return (
      <div class="card" id={props.cardID}>
        <div class="card-header" >
        {props.header}
            </div>
    <div class="card-body">
        <h5 class="card-title">{props.title} 
        <span className='location'>{props.city}</span>,&nbsp;
        <span className='location'>{props.state} </span>
        </h5>
        
        <br/>
        <p class="card-text">{props.text}</p>
        <br/>
        <a href="#" class="btn btn-danger">{props.buttonText}</a>
        
    </div>
    </div>
  )
}

export default Card;