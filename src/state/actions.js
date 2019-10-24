import blogMeta from '../../src/markdown/blogPosts/meta.js'

export const GET_BLOGS = 'GET_BLOGS'
export const TOGGLE_INITIAL_BLOG_ROLLUP_LOAD = 'TOGGLE_INITIAL_BLOG_ROLLUP_LOAD'

export const getBlogs = () => {
  return {
    type: GET_BLOGS,
    blogs: blogMeta
  }
}

export const toggleInitialBlogRollupLoad = () => {
  return {
    type: TOGGLE_INITIAL_BLOG_ROLLUP_LOAD
  }
}