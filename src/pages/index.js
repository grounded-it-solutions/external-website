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
      <h5><p>Grounded IT is an information technology consulting company looking to help IT professionals grow their skills and meet the goals of their IT portfolios. The rapid pace of IT innovation has organizations struggling to balance long-term investments with impact as soon as possible.</p></h5>
      <br />
      <h2>What we do</h2><hr />
      <h5><p>Grounded IT's targeted, tailored, fixed-fee offerings are designed to provide IT organizations a boost towards achieving common IT initiatives in the industry. While teams are being assembled, Grounded IT's offerings can provide a foundation for educating and accelerating groups towards IT objectives without the costs and delays associated with hiring and onboarding. With Grounded IT's expertise in cloud services, the results can be quickly transferred to IT staff onsite to contiue the progress.</p></h5>
      <br />
      <h2>Why we do it</h2><hr />
      <h5><p>The diverse array of problems IT Managers face on a daily basis are both context-specific and consuming. Being buried in the day-to-day grind, it can be difficult to experiment with forward-thinking practices that could alleviate some of that pressure. Grounded IT recognizes that need and seeks to fill it, allowing IT organizations an avenue to level up widespread, progressive, IT practices. Hopefully, the options Grounded IT provides enables clients to outpace their competitors and deliver for their customers.</p></h5>
    </section>
    <section className="textCalloutSection sectionTitle">
      <h2>Offerings</h2>
      <hr id="offerings" />
    </section>
    <section className="gridWrapper">
      <Link to="/services">
        <div className="gridBox gridboxCallout libraryBackground">
          <h1>Codify Your<br /> Infrastructure</h1>
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
    <section className="textCalloutSection sectionTitle">
      <h2>Latest Articles</h2>
      <hr />
    </section>
    <section>
      <ConnectedBlogRollup limit={3} />
    </section>

  </Layout>
)

export default IndexPage
