import React from 'react'
import {Link} from 'react-router-dom'
import './HomeNavBar.css'


function HomeNavBar() {
  return (
    <nav className='homeNavBar'>
        <h1 className ='title'>FITARC</h1>
        <div className='mainPagesSection'>
            <p className='navBtn'><Link to='/'>Home</Link></p>
            <p className='navBtn'><Link to='/profile'>Profile</Link></p>
            <p className='navBtn'><Link to='/nutrition'>Nutrition</Link></p>
            <p className='navBtn'><Link to='/fitness'>Fitness</Link></p>
        </div>
        <div className='signUpLoginButtonContainer'>
            <h4 className='navBtn'><Link to='/login'>Log In</Link></h4>
            <h4 className='navBtn'><Link to='/signup'>Sign Up</Link></h4>
        </div>
    </nav>
  )
}

export default HomeNavBar