import React from 'react'
import Jumbotron from '../../Components/Jumbotron/Jumbotron';
import Philosophy from '../../data/philosophy.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../About/About.css'

function populateCulture(philosophy){
  return <Jumbotron title={philosophy.title} description={philosophy.description} img={philosophy.img} />
}

function About() {
  return (
    <div className='container'>
      <br/>
      <h1 className='heading'>Our Cultural Values:</h1>
     {Philosophy.map(populateCulture)}
    </div>
  )
}

export default About;