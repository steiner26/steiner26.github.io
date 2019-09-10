/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/projects/${node.frontmatter.slug}`,
    })
  }
}

const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(post => {
        createPage({
          path: `/projects/${post.node.frontmatter.slug}/`,
          component: path.resolve(`./src/templates/projectPage.js`),
          context: {
            slug: post.node.frontmatter.slug,
          },
        })
      })

      resolve()
    })
  })
  return Promise.resolve(loadPages)
}
