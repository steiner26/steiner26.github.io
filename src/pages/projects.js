import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi people</h1>
    <p>These are some projects I've worked on.</p>
    <p>Now go build something great.</p>
    <Link to="/">Go to page 1</Link>
  </Layout>
)

export default IndexPage
