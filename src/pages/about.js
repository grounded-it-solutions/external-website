import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-gtag"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="infoSection center">
      <h3>About Grounded IT Solutions</h3>
      <p>After a decade of experience, Grounded IT Solutions LLC was founded in 2019 by <a href="https://terrycreamer.codes" target="_blank" alt="A link to Terry Creamer's website.">Terry Creamer</a>, a passionate IT professional based in Washington D.C. .  Before starting Grounded IT Solutions Terry was a Technical Lead for a contractor at the Department of State overseeing several practitioners and a portfolio of web applications in a web technologies  innovation office. Prior to that he cut his teeth in the professional world working with a large IT Contractor on projects across four Federal agencies in various roles for several years. Terry is an AWS Certified Solutions Architect Professional.</p>
      <div className="center">
        <OutboundLink href="mailto:contact@groundedit.solutions" alt="Mail link to email contact@groundedit.solutions">
          <button className="attnButton">Contact Grounded IT Solutions*</button>
        </OutboundLink>
        <p className="footnote">*Will open your default email client.</p>
      </div>
    </section>
  </Layout>
)

export default AboutPage
