import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ConnectedBlogRollup from "../components/blogrollup"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="gridWrapper">
      <div className="gridBox">
        <Image src={require(`../images/logo.png`)}/>
      </div>
      <div className="gridBox">
        <Image src={require(`../images/logo.png`)}/>
      </div>
    </section>
    <div>
      <ConnectedBlogRollup limit={5} />
    </div>
  </Layout>
)

export default IndexPage
