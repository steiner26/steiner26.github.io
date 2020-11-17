import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/templates/project-page.module.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectPage extends React.Component {
  render() {
    console.log(this.props)
    const html = this.props.data.markdownRemark.html
    const featuredImgFluid = this.props.data.markdownRemark.frontmatter
      .featuredImage.childImageSharp.fluid
    const title = this.props.data.markdownRemark.frontmatter.title
    return (
      <Layout>
        <SEO title={title} />
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <Img fluid={featuredImgFluid} />
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProjectPage

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
