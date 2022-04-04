/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Jumbotron/Jumbotron.css'
function Jumbotron(props) {
  return (
    <div className='container'>
        <br/>
        <div id='jumbotron' class="jumbotron jumbotron-fluid">
        <hr class="my-4" />
        <h4 class="display-5" id='headingOfAbout'>{props.title}</h4>
        <p class="lead">{props.description}</p>
        <p><img src={props.img} alt='img' className='image'/></p>
        <p>{props.description}</p>
        <p class="lead">
        <a class="btn btn-danger btn-lg" id='culture' role="button">READ MORE ABOUT OUR CULTURE &gt;</a>
  </p>
</div>
    </div>
  )
}

export default Jumbotron