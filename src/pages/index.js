import React from "react"
import { Link } from "gatsby"
import path from 'path'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Image src={require(`../images/logo.png`)}/>
    </div>
  </Layout>
)

export default IndexPage
