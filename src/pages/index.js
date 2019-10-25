import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ConnectedBlogRollup from "../components/blogrollup"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="gridWrapper">
      <Link to="/solutions">
        <div className="gridBox libraryBackground">
          <h1>Codify Your Infrastructure</h1>
        </div>
      </Link>
      <Link to="/trainings">
        <div className="gridBox coffeeBackground">
          <h1>Take an Online Training</h1>
        </div>
      </Link>
    </section>
    <section>
      Maybe insert something here describing GrIT.
    </section>
    <div>
      <ConnectedBlogRollup limit={3} />
    </div>
  </Layout>
)

export default IndexPage
