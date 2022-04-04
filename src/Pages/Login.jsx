import React from 'react'
import Input from '../Components/Input/Input';

function Login() {
  return (
    <div id='loginpage' className='container'>
       <form>
         <label htmlFor='txtEmail'>Email ID:</label>
         <Input id='txtEmail' type='text' placeholder='Enter Email Address'/>
         <label htmlFor='txtPassword'>Password:</label>
         <Input id='txtPassword' type='password' placeholder='Enter Password'/>
         <br/>
         <Input type='submit' id='btnSubmit'/>
         </form> 
    </div>
  )
}

export default Login