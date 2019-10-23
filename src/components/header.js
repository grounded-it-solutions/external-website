import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `red`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
