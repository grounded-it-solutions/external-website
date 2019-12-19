import React from "react"
import { OutboundLink } from 'gatsby-plugin-gtag'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <section className="textCalloutSection">
      <h2>Services</h2>
      <h5>Grounded IT's services are designed to provide the boost of effort you need to overcome business hurdles that arise.</h5>
      <hr />
    </section>
    <section className="infoSection center">
      <h3>Freelance Effort</h3>
      <p>Grounded IT Solutions looks to help resolve unique client problems ASAP. Via Upwork, Grounded IT Solutions can provide the quick burst of effort you need to resolve a pressing business problem.</p>
      <div className="center">
        <OutboundLink href='https://www.upwork.com/o/profiles/users/_~01965c424fd6393a7d/' target="_blank" rel="noopener noreferrer">
          <button className="attnButton">Reach out via Upwork!*</button>
        </OutboundLink>
        <p className="footnote">*Will open a new page on a new site.</p>
      </div>
    </section>
  </Layout>
)

export default ServicesPage
