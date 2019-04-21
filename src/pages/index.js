import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="hero">
      <div className='hero-group'>
      <h1>Hi people</h1>
      <p>Welcome to my Portfolio.</p>
      <Link to="/page-2/">Go To Projects</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
