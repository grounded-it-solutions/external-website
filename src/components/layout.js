/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SiteMap from "./sitemap"
import "./layout.css"
import "./grit.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="gritLogoBackground">
        <div
          style={{
            margin: `0 auto`,
            maxWidth: '100%',
            paddingTop: 0
          }}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <main className="topNavBuffer">
            {children}
          </main>
          <footer>
            <section>
              <SiteMap />
            </section>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
