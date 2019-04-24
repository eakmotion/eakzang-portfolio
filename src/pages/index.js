import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card';

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
          <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' width='60px' alt='React' />
          <img src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' width='60px' alt='Redux' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' width='60px' alt='Node' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' width='60px' alt='Python' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/9/92/Official_Elixir_logo.png' width='60px' alt='Elixir' />
        </div>
        <svg
          width='100%'
          height='172'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path fill='white'>
            <animate
              repeatCount='indefinite'
              fill='freeze'
              attributeName='d'
              dur='10s'
              values='M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 
              -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 
              2560 25.9088V171.91L0 171.91V25.9086Z;
              M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 
              34.966 1538 71.251C1814 117.251 2156 189.252 2560 
              87.1597V233.161L0 233.161V87.1596Z;
              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 
              115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 
              199.66V53.6584Z;
              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 
              -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 
              2560 25.9088V171.91L0 171.91V25.9086Z'
            />
          </path>
        </svg>
      </div>
    </div>
    <div className='cards'>
      <h2>Open-source projects</h2>
      <div className='card-group'>
        <Card 
          title='Would You Rather'
          text='React, Redux, ES6'
          image={require('../images/project-1.png')} />
        <Card 
          title='UdaciCards mobile'
          text='React Native, Redux'
          image={require('../images/project-1.png')} />
        <Card 
          title='Safety Alert'
          text='Ruby on Rails, RSpec, Data scraping'
          image={require('../images/project-1.png')} />
        <Card 
          title='Marketplace'
          text='Ruby on Rails, Stripe API'
          image={require('../images/project-1.png')} />
          <Card 
          title='Apartment Finder'
          text='Ruby on Rails, Data scraping'
          image={require('../images/project-1.png')} />
        <Card 
          title='A Book Tracking App'
          text='React, Library Books API'
          image={require('../images/project-1.png')} />
      </div>
    </div>
  </Layout>
);

export default IndexPage
