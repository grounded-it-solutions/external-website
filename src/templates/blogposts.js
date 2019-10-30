import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import parse from 'html-react-parser'

const BlogPostContent = ({content = '<div>This blog post has no content</div>'}) => (
    <div>
      <React.Fragment>
        {parse(content)}
      </React.Fragment>
    </div>
)

const BlogPost = ( pageContext ) => {
  return (
    <Layout>
      <SEO title="Blog post" />
      <BlogPostContent content={pageContext.content} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BlogPost
