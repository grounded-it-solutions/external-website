import React from 'react'
// import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { getBlogs } from '../state/actions'

const BlogRollup = ({blogs, getBlogs, initialBlogRollupLoad, toggleInitialBlogRollupLoad}) => {
  if(initialBlogRollupLoad) {
    console.log('initial load')
    getBlogs()
    toggleInitialBlogRollupLoad()
  }
  
  return (
    <div>
      <React.Fragment>
      {blogs.length > 0 ?
        blogs.map((blog, index) => {
          return (
            <a href={`/blog/${blog.title}`} key={index}>{blog.title}</a>
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