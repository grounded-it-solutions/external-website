import React from "react"
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <section className="textCalloutSection">
      <h2>Services</h2>
      <h5>Organizations find themselves with ever-growing legacy portfolios. Our on-demand, focused, fixed-fee offerings are designed to address the prevalent issues IT organizations are facing today.</h5>
      <hr />
    </section>
    <section className="infoSection center">
      <h3>Codify Your Infrastructure</h3>
      <p>Versioning infrastructure is a groundbreaking capability of the last decade. Companies can version control application architectures. Instead of relying on the memory and availability of your star performers, codifying your infrastructure acts as baseline documentation for your solution. Grounded IT can help you begin recording the configurations of your portfolio. It can feel like writing a library of content at times. Grounded IT Solutions can help.</p>
      <p>Every application is codified to <a href="https://12factor.net/" alt="Link to twelve-factor application website" target="_blank" rel="noopener noreferrer">twelve-factor application standards</a> with a base level of data center redundancy, resiliency, and scalability. Typical turnaround time per application is one month. No actual application code is necessary. It is expected your IT team on site will handle installing the application, validating business requirements and tweaking OS-level configurations as necessary. The technical deliverable with consist of a video showcasing the successful deployment and default configurations and an AWS CloudFormation template. Other infrastructure-as-code options will be available soon. Services are delivered through Upwork.</p>
      <div className="center">
        <OutboundLink href='https://www.upwork.com/o/profiles/users/_~01965c424fd6393a7d/' target="_blank" rel="noopener noreferrer">
          <button className="attnButton">Contact to Codify Your Infrastructure*</button>
        </OutboundLink>
        <p className="footnote">*Will open a new page on a new site.</p>
      </div>
    </section>
  </Layout>
)

export default ServicesPage
