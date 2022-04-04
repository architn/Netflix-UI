import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../../Pages/Home/Home.jsx'
import About from '../../Pages/About/About.jsx'
import Jobs from '../../Pages/Jobs/Jobs.jsx'
import Contact from '../../Pages/Contact/Contact.jsx'
import Error from '../../Pages/Error'
import Login from '../../Pages/Login'
import '../Navbar/Navbar.css'
import Profile from '../../Pages/Profile/Profile.jsx';

function Navbar() {
  return (
    <div>
<Router>
      <nav id='navbar' className='navbar navbar-expand-lg'>
        <ul id='list' className='navbar-nav"'>
        <li className='nav-item active'><Link to='' className='link'><img className='logo' src='images/netflix.jpeg' alt='netflixlogo' /></Link>{"   "}</li>
          <span id='menuOptions'>
          <li className='nav-item active'><Link to='/profiles' className='link'>PROFILE</Link>{"   "}</li>
          <li className='nav-item active'><Link to='/about' className='link'>ABOUT</Link>{"   "}</li>
          <li className='nav-item active'><Link to='/jobs' className='link'>JOBS</Link>{"   "}</li>
          <li className='nav-item active'><Link to='/contact' className='link'>CONTACT US</Link>{"   "}</li>
          {/* <li className='nav-item active'><Link to='/login' className='link'>LOGIN</Link>{"   "}</li> */}
          </span>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/profiles' element={<Profile/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Navbar;