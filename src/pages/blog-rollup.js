import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogRollupPage = () => (
  <Layout>
    <SEO title="Blog Rollup" />
    <h1>Hi from the blog rollup page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogRollupPage
