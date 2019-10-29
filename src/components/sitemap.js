import React from 'react'
import {Link} from 'gatsby'
import Image from '../components/image'

const SiteMap = () => {
  return (
    <div className="sitemap">
      <hr />
      <div className="left">
        <div className="navItem"><Link to="/">Home</Link></div>
        <div className="navItem"><Link to="#offerings">Offerings</Link></div>
        <div className="navItem"><Link to="/blog">Blog</Link></div>
        <div className="navItem"><Link to="/about">About</Link></div>
        <div className="navItem"><Link to="#">Contact</Link></div>
        <br />
        Washington, D.C.
        <p>Grounded IT Solutions LLC © {new Date().getFullYear()}</p>
      </div>
      <div className="right"><Image className="logo" src={require('../images/grit-logo/logo_transparent.png')} /></div>
    </div>
  )
}

export default SiteMap