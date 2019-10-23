import React from 'react'
import PropTypes from 'prop-types';
import { connect } from "react-redux"

const BlogRollup = ({blogs, getBlogs}) => {
  return (
    <div>
      blog rollup
      <br />
      <button onClick={getBlogs}>Get Blogs</button>
      <br />
      {blogs.length > 0 ?
        blogs.map((blog, index) => {
          return (
            <pre key={index}>{JSON.stringify(blog)}</pre>
          )
        })
        : "Blogs are loading..."
      }
    </div>
  )
}

// BlogRollup.propTypes = {
//   blogs: PropTypes.array,
//   getBlogs: PropTypes.func.isRequired,
// }

const mapStateToProps = ({ blogs }) => {
  return { blogs }
}

const mapDispatchToProps = dispatch => {
  return { getBlogs: () => dispatch({ type: `GET_BLOGS` }) }
}

const ConnectedBlogRollup = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogRollup)

export default ConnectedBlogRollup