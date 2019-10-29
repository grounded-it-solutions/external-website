import React from "react"
import { Link } from "gatsby"

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
      <h3>AWS DevOps for Front-end Developers</h3>
      <p>A hyper-accessible, pragmatic DevOps course. It's designed for Junior IT Professionals that want clarity around "DevOps" as well as practical tooling and skills and Front-end Web Developers that want to learn the tooling AWS provides to support their front-end codebase deployment workflows. This training is delivered through Udemy.</p>
      <div className="center">
        <button className="attnButton">Learn more about this course!*</button>
        <p className="footnote">*Will open a new page on a new site.</p>
      </div>
    </section>
    <button className="hide">Contact Grounded IT Solutions about what trainings to produce next!</button>
  </Layout>
)

export default TrainingsPage
