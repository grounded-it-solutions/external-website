import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/trainings">Trainings</Link>
    <br />
    <Link to="/solutions">Solutions</Link>
    <br />
    <Link to="/blog">Blog</Link>
    <div>
      <Image src={require(`../images/logo.png`)}/>
    </div>
  </Layout>
)

export default IndexPage
