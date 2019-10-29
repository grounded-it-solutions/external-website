import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ConnectedBlogRollup from "../components/blogrollup"

const BlogRollupPage = () => (
  <Layout>
    <SEO title="Blog Rollup" />
    <section className="textCalloutSection">
      <h2>Blog</h2>
      <h5>Thoughts for IT Managers and Developers listed with the latest first.</h5>
      <hr />
    </section>
    <ConnectedBlogRollup />
  </Layout>
)

export default BlogRollupPage
