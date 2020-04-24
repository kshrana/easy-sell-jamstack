const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const product = path.resolve(`./src/templates/product.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___order], order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const products = result.data.allMarkdownRemark.edges

  products.forEach((post, index) => {
    const previous = index === products.length - 1 ? null : products[index + 1].node
    const next = index === 0 ? null : products[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: product,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
