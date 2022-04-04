import React from 'react'
import ProfileCard from '../../Components/CardWithImage/CardWithImage'
import Profiles from '../../data/profile'
import '../Profile/Profile.css'
function createProfile(profile){
   return (
    <div className='col-2'>
      <ProfileCard id='profilecard' name={profile.name} img={profile.img} />
    </div>
   )
   
}


function Profile() {
  return (
    <div id='profile' className='container'>
        <br/><br/>
        <h1 id='heading'>Who's watching?</h1>
        <br/><br/>
            <div id='profile' className='row'>
            {Profiles.map(createProfile)}
            </div>
            <br/><br/>
        <button className='manageProfile'>MANAGE PROFILES</button>
    </div>
  )
}

export default Profile