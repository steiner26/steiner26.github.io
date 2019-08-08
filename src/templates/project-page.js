import React from "react"
import { graphql } from "gatsby"

class ProjectPage extends React.Component {
  render() {
    console.log(this.props)
    const html = this.props.data.markdownRemark.html
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    )
  }
}

export default ProjectPage

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
    }
  }
`
