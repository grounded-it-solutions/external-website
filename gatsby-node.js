/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const blogPostDirectories = './src/markdown/blogPosts';
const fs = require('fs');
const path = require('path')
const markdownHtmlConverter = require('showdown')
const jsxHtmlConverter = require('html-react-parser')
const converter = new markdownHtmlConverter.Converter()


exports.createPages = ({ actions }) => {
  return new Promise((resolve, reject) => {
    fs.readdir(blogPostDirectories, (err, theBlogPostDirectories) => {
      if(err) {
        reject(err)
      } else {
        try {
          let blogsParsed = 0;
          while (theBlogPostDirectories.length > blogsParsed) {
            console.log(`Parsing ${theBlogPostDirectories[blogsParsed]}`)
            theBlogPostDirectories.forEach(aBlogPostDirectory => {
              if(aBlogPostDirectory == 'meta.js') {
                // do nothing
              } else {
                const blogPostMetadata = require(`${__dirname}/src/markdown/blogPosts/${aBlogPostDirectory}/meta.js`)
                const blogPostContent = require(`${__dirname}/src/markdown/blogPosts/${aBlogPostDirectory}/content.js`)
                const blogPostContentHtml = converter.makeHtml(blogPostContent)
                const {createPage} = actions
                createPage({
                  // path: `blog/${blogPostMetadata.title}`,
                  path: `blog/${aBlogPostDirectory}`, // directory should be the title of the post
                  component: path.resolve('./src/templates/blogposts.js'),
                  context: {
                    meta: blogPostMetadata,
                    content: blogPostContentHtml
                  },
                })
              }
            });
            blogsParsed++
          }
          console.log('All blogs parsed')
          resolve(true)
        } catch(err) {
          reject(err)
        }
      }
    });
  })
}