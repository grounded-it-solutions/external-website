import React from "react"
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from "../components/layout"
import SEO from "../components/seo"

const TrainingsPage = () => (
  <Layout>
    <SEO title="Trainings" />
    <section className="textCalloutSection">
      <h2>Trainings</h2>
      <h5>Grounded IT Solutions provides comprehensive, pragmatic systems training to interested enthusiasts and IT professionals. The primary course content goal is accessible content for all skill levels that garners results in the workplace. Competencies include AWS offerings, DevOps tooling, and information technology best practices.</h5>
      <hr />
    </section>
    <section className="infoSection center">
      <h3>AWS DevOps for Front-end Developers!</h3>
      <p>A hyper-accessible, pragmatic DevOps course. It's designed for Junior IT Professionals that want clarity around "DevOps" with practical tooling and skills for their workplace. Front-end Web Developers will learn the DevOps tooling AWS provides to support their front-end codebase deployment workflows. This training is delivered through Udemy.</p>
      <div className="center">
        <OutboundLink href="https://www.udemy.com/course/aws-devops-for-front-end-developers/" alt="Link to Udemy course, AWS DevOps for Front-end Developers" target="_blank" rel="noopener noreferrer">
          <button className="attnButton">Learn more about this course!*</button>
        </OutboundLink>
        <p className="footnote">*Will open a new page on a new site.</p>
      </div>
    </section>
    <button className="hide">Contact Grounded IT Solutions about what trainings to produce next!</button>
  </Layout>
)

export default TrainingsPage
