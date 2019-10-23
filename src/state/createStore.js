import { createStore } from 'redux';

const initialState = {
  blogs: []
}

function reducer(state = initialState, action) {
  if (action.type === `GET_BLOGS`) {
    return Object.assign({}, state, {
      blogs: [
        {
          title: 'blah',
          published: '2019-10-21T14:39:58+0000', // ISO-8601 UTC timestamp
          description: 'test description'
        },
        {
          title: 'blah 2',
          published: '2019-10-21T14:39:58+0000', // ISO-8601 UTC timestamp
          description: 'test description'
        },
        {
          title: 'blah 3',
          published: '2019-10-21T14:39:58+0000', // ISO-8601 UTC timestamp
          description: 'test description'
        }
      ],
    })
  }
  return state
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState);
};