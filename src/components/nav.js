import React from 'react'
import { Link } from "gatsby"
import Image from "../components/image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
  return (
    <nav className="topNav">
      <div className="navItem"><Link to="/"><div className='navImage'><Image className='navImage' src={require('../images/grit-logo/udemy_default_course_logo.svg')} alt={"Grounded IT Solutions logo"} /></div></Link></div>
      <div className="navItem"><Link to="/">Home</Link></div>
      <div className="navItem"><Link to="/services">Services</Link></div>
      <div className="navItem"><Link to="/trainings">Trainings</Link></div>
      <div className="navItem" style={{display: 'none'}}><Link to="/blog">Blog</Link></div>
      <div className="navItem"><Link to="/about">About</Link></div>
      <div className="socials">
        <OutboundLink className="navItem" href="https://twitter.com/grounded_it" target="_blank" rel="noopener noreferrer" alt="Link to Grounded IT Solutions Twitter account" aria-label="Link to Grounded IT Solutions Twitter account"><FontAwesomeIcon icon={['fab', 'twitter']} /></OutboundLink>
        <OutboundLink className="navItem" href="https://www.linkedin.com/company/grounded-it-solutions/" target="_blank" rel="noopener noreferrer" alt="Link to Grounded IT Solutions LinkedIn account" aria-label="Link to Grounded IT Solutions Twitter account"><FontAwesomeIcon icon={['fab', 'linkedin']} /></OutboundLink>
        <OutboundLink className="navItem" href="#" style={{display: 'none'}}><FontAwesomeIcon icon={['fab', 'youtube']} /></OutboundLink>
      </div>
    </nav>
  )
}

export default Nav