import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

const ProductTemplate = ({ data, pageContext, location }) => {
  const product = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={product.frontmatter.title}
        description={product.frontmatter.description || product.excerpt}
      />
      <div className="product">
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {product.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            post.frontmatter.date
          </p>
          <p>
            <PreviewCompatibleImage
              imageInfo={{
                image: product.frontmatter.featuredimage,
                alt: `featured image thumbnail for product ${product.frontmatter.title}`,
              }}
            />
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: product.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </div>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default ProductTemplate

export const pageQuery = graphql`
  query ProductBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        featuredimage
      }
    }
  }
`
