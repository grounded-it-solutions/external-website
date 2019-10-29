import React from 'react'
import { Link } from "gatsby"
import Image from "../components/image"

const Nav = () => {
  return (
    <nav className="topNav">
      <div className="navItem"><Link to="/"><div className='navImage'><Image className='navImage' src={require('../images/grit-logo/udemy_default_course_logo-old.png')} /></div></Link></div>
      <div className="navItem"><Link to="/">Home</Link></div>
      <div className="navItem"><Link to="#offerings">Offerings</Link></div>
      <div className="navItem"><Link to="/blog">Blog</Link></div>
      <div className="navItem"><Link to="/about">About</Link></div>
      <div className="navItem"><Link to="/#">Contact</Link></div>
    </nav>
  )
}

export default Nav