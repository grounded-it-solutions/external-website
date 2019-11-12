/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import { Provider } from "react-redux"
import createStore from "./src/state/createStore"
import { createBrowserHistory } from 'history';
import {pageList} from './pageList.json'

console.log(JSON.stringify(pageList))
const history = createBrowserHistory();

// const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
const path = 'money';
console.log(`attemping to go to ${path}`)
if (path.length > 0) { // implies index was not requested
  // path = path.startsWith('/') ? path : '/' + path
  // might have to lowercase and snake case strings as they come in
  switch (path) {
    case 'robots.txt': // exceptions first
      console.log('respond with robots.txt')
      break;
    default:
      let pathjs = path + '.js'
      if(pageList.includes(pathjs)) {
        console.log(`return ${path}`)
      } else {
        console.log('return 404')
      }
      break;
  }
  
  // window.location = `http://localhost:9000${path}`
  // history.replace(path);
  /*
    If path in any case exists as a page, load that page. 

    If the path does not exist, redirect to the 404 page.
  */
} else { // index was requested
  console.log('index should be returned by default without having to do anything')
  // history.push('/404')
}


/* ^ This bit is a quick hack to get website links to anything besides the homepage (i.e. index.html). The two solutions I saw that I like are either to prerender all the HTML of the website (which I like more but takes more effort per page) or to rewrite the requests to the S3 bucket to add "#!" with the requested resource name, then rewrite the url here without the "#!". This should also resolve serving robots.txt when the website is crawled by search engines. The redirection block of rules to include in the S3 bucket's website configuration is the following: 
<RoutingRules>
  <RoutingRule>
    <Condition>
      <HttpErrorCodeReturnedEquals>404</HttpErrorCodeReturnedEquals>
    </Condition>
    <Redirect>
      <HostName>myhostname.com</HostName>
      <ReplaceKeyPrefixWith>#!/</ReplaceKeyPrefixWith>
    </Redirect>
</RoutingRule>
<RoutingRule>
    <Condition>
      <HttpErrorCodeReturnedEquals>403</HttpErrorCodeReturnedEquals>
    </Condition>
    <Redirect>
      <HostName>myhostname.com</HostName>
      <ReplaceKeyPrefixWith>#!/</ReplaceKeyPrefixWith>
    </Redirect>
  </RoutingRule>
</RoutingRules>
*/

// eslint-disable-next-line react/display-name,react/prop-types
const wrapWithProvider = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return <Provider store={store}>{element}</Provider>
}

export const wrapRootElement = wrapWithProvider
