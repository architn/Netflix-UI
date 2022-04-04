import React from 'react'
import Carousel from '../../Components/Carousel/Carousel.jsx';
import ProfileCard from '../../Components/CardWithImage/CardWithImage.jsx';
import movies from '../../data/movies.js';
import tvshows from '../../data/tvshows.js'
function createMoviesOrTVShowsCard(movies){
  return (<div className='col-3'>
       <ProfileCard imgSizer='moviesImg' id='moviesCard' img={movies.imgURL}/>
  </div>
  )
}
function Home() {
  return (
    <div>
      <Carousel img1='images/adamprojecr.jpeg'  img2='images/irishman.jpg'  img3='images/red.jpeg'/>

      <br/>
      <div className='container'>
      <h1>Recommendations in Movies</h1>
      <br/>
      <div className='row'>
      {movies.map(createMoviesOrTVShowsCard)}
      </div>
      <br/>
      <h1>Recommendations in TV</h1>
      <div className='row'>
      {tvshows.map(createMoviesOrTVShowsCard)}
      </div>
      </div>
     
    </div>
  )
}

export default Home;
