import React from 'react'
import Input from '../Input/Input'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Search/Search.css'

function SearchSection() {
  return (
    <form>
      <br/>
  <div class="form-group">
    <label for="exampleInputEmail1"><h4>Search Open Positions:</h4></label>
    <br/><br/>  
    <Input id='searchPosition' className='form-control' placeholder='Enter Job Title.....' />
    {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> */}
  </div>
    <br/>
  <button type="submit" class="btn btn-danger">FIND JOBS</button>
</form>
  )
}

export default SearchSection