import React from 'react'
import jobs from '../../data/jobs'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchSection from '../../Components/Search/SearchSection'
import Card from '../../Components/Card/Card';
import '../../Pages/Jobs/Jobs.css'
function createCard(job){
  return <div className='col-6'>
   <Card cardID='jobCard' city={job.city} state={job.state} header={job.designation} text={job.description} buttonText="APPLY"/>
   <br/>
  </div>
}


function Jobs() {  
  return (
    <div className='container' >
       <SearchSection />
       <br/>
      <div className='row'>
         {jobs.map(createCard)}
        </div>     
    </div>
  )
}

export default Jobs;