import React from 'react'
import { Link } from "gatsby"
import moment from 'moment'

const BlogRollupItem = (props) => {
  const { title, description, published } = props
  return (
    <div className="blogRollupItem">
      <React.Fragment>
        <div>
          <h3><Link to={`/blog/${title}`}>{title.replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
          }</Link></h3>
          <h6>{description}</h6>
          <p className="date">Published {moment(published).format('dddd, MMMM Do, YYYY')}</p>
        </div>
      </React.Fragment>
    </div>
  )
}

export default BlogRollupItem