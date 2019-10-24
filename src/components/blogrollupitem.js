import React from 'react'
import { Link } from "gatsby"

const BlogRollupItem = (props) => {
  const { title, description, published } = props
  return (
    <div className="blogRollupItem">
      <React.Fragment>
        <section>
          <h2><Link to={`/blog/${title}`}>{title}</Link></h2>
          <p>{description}</p>
          <p>{published}</p>
        </section>
      </React.Fragment>
    </div>
  )
}

export default BlogRollupItem