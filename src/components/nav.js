import React from 'react'
import { Link } from "gatsby"
import Image from "../components/image"

const Nav = () => {
  return (
    <nav>
      <div className="topNav">
        <div className="navItem"><Link to="/"><div className='navImage'><Image className='navImage' src={require('../images/udemy_default_course_logo-old.png')} /></div></Link></div>
        <div className="navItem"><Link to="/">Home</Link></div>
        <div className="navItem"><Link to="/solutions">Solutions</Link></div>
        <div className="navItem"><Link to="/trainings">Trainings</Link></div>
        <div className="navItem"><Link to="/blog">Blog</Link></div>
      </div>
    </nav>
  )
}

export default Nav