import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

const ShopIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const products = data.allMarkdownRemark.edges

  console.log("data", data.file)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {products.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              {node.frontmatter.featuredimage ? (
                <div className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: node.frontmatter.featuredimage,
                      alt: `featured image thumbnail for product ${node.frontmatter.title}`,
                    }}
                  />
                </div>
              ) : null}
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description_short || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default ShopIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description_short
            featuredimage
          }
        }
      }
    }
  }
`
