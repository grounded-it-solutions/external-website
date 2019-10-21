/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const blogPostDirectories = './src/markdown/blogPosts';
const fs = require('fs');
const path = require('path')
const markdownHtmlConverter = require('showdown')
const jsxHtmlConverter = require('html-react-parser')
const converter = new markdownHtmlConverter.Converter()


exports.createPages = ({ actions }) => {
  return new Promise((resolve, reject) => {
    return fs.readdir(blogPostDirectories, (err, theBlogPostDirectories) => {
      if(err) {
        reject(err)
      } else {
        try {
          theBlogPostDirectories.forEach(aBlogPostDirectory => {
            const blogPostMetadata = require(`${__dirname}/src/markdown/blogPosts/${aBlogPostDirectory}/meta.js`)
            const blogPostContent = require(`${__dirname}/src/markdown/blogPosts/${aBlogPostDirectory}/content.js`)
            console.log(JSON.stringify(blogPostContent, null, 2))
            // markdownHtmlConverter.makeMarkdown().
            // jsxHtmlConverter().
      
            // readfile, get json metadata
            // readfile, get markdown file, generate html, generate jsx components
            // pass json metadata and jsx components to create page
            // const blogPostInHtml = converter.makeHtml(text);
            // let aBlogPostPath = path.join(__dirname, aBlogPostDirectory)
      
              const {createPage} = actions
              console.log(blogPostMetadata.title)
              createPage({
                path: `${blogPostMetadata.title}`,
                component: path.resolve('./src/templates/blogposts.js'),
                // The context is passed as props to the component as well
                // as into the component's GraphQL query.
                context: {
                  meta: blogPostMetadata,
                  content: blogPostContent
                },
              })
          });
          resolve(true)
        } catch(err) {
          reject(err)
        }
      }
    });
  })
}