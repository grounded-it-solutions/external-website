import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TrainingsPage = () => (
  <Layout>
    <SEO title="Trainings" />
    <section className="textCalloutSection">
      <h2>Trainings</h2>
      <h5>Providing comprehensive, pragmatic systems training to interested enthusiasts and IT professionals. The primary course content goal is accessible content for all skill levels that garners results in the workplace. Competencies include AWS offerings, DevOps tooling, and information technology best practices.</h5>
    </section>
    <section className="gridWrapper">
      <div className="gridBox libraryBackground">
        <h1>AWS DevOps for Front-end Developers!</h1>
      </div>
      <div className="gridBox coffeeBackground">
        <h1>...and more coming soon!</h1>
      </div>
    </section>
    <button>Contact Grounded IT Solutions about what trainings to produce next!</button>
    <p>Trainings delivered through Udemy</p>
  </Layout>
)

export default TrainingsPage
