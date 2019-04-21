import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="hero">
      <div className='hero-group'>
      <h1>EAK ZANG</h1>
      <p>
        Full-Stack developer
        <br />
        Welcome to my portfolio!
      </p>
      <Link to="/page-2/">Show me more</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
