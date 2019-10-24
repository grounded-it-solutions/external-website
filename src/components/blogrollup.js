import React from 'react'
// import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { getBlogs } from '../state/actions'
import BlogRollupItem from './blogrollupitem'
import _ from 'lodash'

const BlogRollup = ({blogs, getBlogs, initialBlogRollupLoad, toggleInitialBlogRollupLoad, limit = 0}) => {
  if(initialBlogRollupLoad) {
    getBlogs()
    toggleInitialBlogRollupLoad()
  }
  
  blogs = _.sortBy(blogs, 'published').reverse()
  // blogs = blogs.reverse()

  if(limit)
    blogs = blogs.slice(0,limit)

  return (
    <div>
      <React.Fragment>
      {blogs.length > 0 ?
        blogs.map(blog => {
          return (
            <BlogRollupItem key={blog.title} {...blog}/>
          )
        })
        : "No blog posts yet."
      }
      </React.Fragment>
    </div>
  )
}

// BlogRollup.propTypes = {
//   blogs: PropTypes.array,
//   getBlogs: PropTypes.func.isRequired,
// }

const mapStateToProps = ({ blogs, initialBlogRollupLoad }) => {
  return { 
    blogs,
    initialBlogRollupLoad 
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    // getBlogs: () => dispatch({ type: `GET_BLOGS`, }),
    getBlogs: () => dispatch(getBlogs()),
    toggleInitialBlogRollupLoad: () => dispatch({ type: `TOGGLE_INITIAL_BLOG_ROLLUP_LOAD`, })
  }
}

const ConnectedBlogRollup = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogRollup)

export default ConnectedBlogRollup