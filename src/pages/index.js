import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ConnectedBlogRollup from "../components/blogrollup"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="gridBanner deskBackground banner">
      <div className="bannerContent">
        <h1>Grounded IT</h1>
        <h4>Pragmatic IT freelancing services and online trainings to help you get ahead</h4>
        <Link to="#offerings"><button>Offerings</button></Link>
      </div>
    </section>
    <section className="textCalloutSection sectionTitle">
      <h2>Who we are</h2><hr />
      <h5><p>Grounded IT is an information technology consulting company looking to help IT professionals grow their skills and meet the goals of their IT portfolios.</p></h5>
      <br />
      <h2>What we do</h2><hr />
      <h5><p>Grounded IT's freelancing efforts are designed to provide IT organizations a boost towards achieving common IT initiatives in the industry. Grounded IT's trainings allows teams to maintain their IT expertise to support delivery. </p></h5>
      <br />
      <h2>Why we do it</h2><hr />
      <h5><p>The diverse array of problems IT Managers face on a daily basis are both context-specific and consuming. Being buried in the day-to-day grind with a relatively static amount of help, it can be difficult to handle the swells of business problems that ebb and flow. Grounded IT recognizes that need and seeks to fill it, allowing IT organizations an avenue to resolve their near-term issues while leveling up their widespread, progressive, IT acumen. Hopefully, the options Grounded IT provides enables clients to outpace their competitors and deliver for their customers.</p></h5>
    </section>
    <section className="textCalloutSection sectionTitle">
      <h2>Offerings</h2>
      <hr id="offerings" />
    </section>
    <section className="gridWrapper">
      <Link to="/services">
        <div className="gridBox gridboxCallout libraryBackground">
          <h1>Freelance Effort</h1>
          <span>A Grounded IT Service</span>
        </div>
      </Link>
      <Link to="/trainings">
        <div className="gridBox gridboxCallout coffeeBackground">
          <h1>Take AWS DevOps for<br /> Front-end Developers</h1>
          <span>A Grounded IT Training</span>
        </div>
      </Link>
    </section>
    <section className="textCalloutSection sectionTitle" style={{display: 'none'}}>
      <h2>Latest Articles</h2>
      <hr />
    </section>
    <section style={{display: 'none'}}>
      <ConnectedBlogRollup limit={0} />
    </section>

  </Layout>
)

export default IndexPage
