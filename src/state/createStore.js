import { createStore } from 'redux';
import {GET_BLOGS, TOGGLE_INITIAL_BLOG_ROLLUP_LOAD} from './actions'

const initialState = {
  blogs: [],
  initialBlogRollupLoad: true
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_BLOGS:
      return Object.assign({}, state, {
        blogs: action.blogs,
      })
    case TOGGLE_INITIAL_BLOG_ROLLUP_LOAD:
      return Object.assign({}, state, {
        initialBlogRollupLoad: !state.initialBlogRollupLoad,
      })
    default:
      return state
  }
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};