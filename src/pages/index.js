import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ConnectedBlogRollup from "../components/blogrollup"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="gridBanner deskBackground banner">
      <div className="bannerContent">
        <h1>Grounded IT</h1>
        <h3>Pragmatic IT freelancing services and online trainings to help you get ahead</h3>
        <button>Offerings</button>
      </div>
    </section>
    <section className="textCalloutSection">
      <h2>IT, Pragmatically.</h2>
      <h5>Grounded IT Solutions meets you where you’re at, wherever you’re at, with no bias towards one solution or another. Blah blah blah</h5>
    </section>
    <section className="gridWrapper">
      <Link to="/services">
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
    <div>
      <ConnectedBlogRollup limit={3} />
    </div>
  </Layout>
)

export default IndexPage
