import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import Section from '../components/section'
import Wave from '../components/wave'
import staticData from '../../static-data.json'
import Cell from '../components/cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #94A4BA;
  text-transform: uppercase;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[ `gatsby`, `application`, `react` ]} />
    <div className='hero'>
      <div className='hero-group'>
        <h1>EAK ZANG</h1>
        <p>
          Full-Stack developer
          <br />
          Welcome to my portfolio!
        </p>
        <Link to='/page-2/'>Show me more</Link>
        <div className='logos'>
          <img src='https://rubyonrails.org/images/rails-logo.svg' width='60px' alt='Rails' />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
            width='60px'
            alt='React'
          />
          <img
            src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'
            width='60px'
            alt='Redux'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
            width='60px'
            alt='Node'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
            width='60px'
            alt='Python'
          />
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/9/92/Official_Elixir_logo.png'
            width='60px'
            alt='Elixir'
          />
        </div>
        <Wave />
      </div>
    </div>
    <div className='cards'>
      <h2>Open-source projects</h2>
      <div className='card-group'>
        <Card
          title='Would You Rather'
          text='React, Redux, ES6'
          image={require('../images/project-1.png')}
        />
        <Card
          title='UdaciCards mobile'
          text='React Native, Redux'
          image={require('../images/project-1.png')}
        />
        <Card
          title='Safety Alert'
          text='Ruby on Rails, RSpec, Data scraping'
          image={require('../images/project-1.png')}
        />
        <Card
          title='Marketplace'
          text='Ruby on Rails, Stripe API'
          image={require('../images/project-1.png')}
        />
        <Card
          title='Apartment Finder'
          text='Ruby on Rails, Data scraping'
          image={require('../images/project-1.png')}
        />
        <Card
          title='A Book Tracking App'
          text='React, Library Books API'
          image={require('../images/project-1.png')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-full.svg')}
      title='About Me'
      text='Talented software engineer with more than 9+ years of web 
        development experience including Ruby on Rails, React, React Native, 
        Python, and modern JavaScript. Creative thinker with a passion for 
        test driven development. '
    />

    <SectionCaption>
      9+ years experiences with great companies
    </SectionCaption>
    <SectionCellGroup>
      {staticData.experience.map(cell => (
        <Cell 
          title={cell.title} 
          image={cell.image}
          location={cell.location}
          duration={cell.duration}
          />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
