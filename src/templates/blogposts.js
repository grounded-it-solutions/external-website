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

const BlogPost = ( pageContext ) => (
  <Layout>
    <SEO title="Blog post" />
    <BlogPostContent content={pageContext.pageResources.json.pageContext.content} />
    {/*<pre>{JSON.stringify(pageContext.pageResources.json.pageContext.content, null, 2)}</pre>
  
      Temporarily left in for dev and debugging purposes
    */} 
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPost
