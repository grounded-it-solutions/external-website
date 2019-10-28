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
        <Link to="#offerings"><button>Offerings</button></Link>
      </div>
    </section>
    <section className="textCalloutSection sectionTitle">
      <h2>Latest Articles</h2>
      <hr />
    </section>
    <div>
      <ConnectedBlogRollup limit={3} />
    </div>
    <section id="offerings" className="textCalloutSection sectionTitle">
      <h2>Offerings</h2>
      <hr />
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

  </Layout>
)

export default IndexPage
