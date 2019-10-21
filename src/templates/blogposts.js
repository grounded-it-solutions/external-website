import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ( pageContext ) => (
  <Layout>
    <SEO title="Blog post" />
    <h1>Hi from the BLOG POST</h1>
    <p>Welcome to the BLOG POST</p>
    <pre>{JSON.stringify(pageContext)}</pre>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPost
