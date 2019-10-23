import React from 'react'
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <div className="topNav">
        <Link to="/">Home</Link>
        <Link to="/blog/blah">Blah blog post</Link>
      </div>
    </nav>
  )
}

export default Nav