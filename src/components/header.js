import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './header.sass'

const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className='header-group'>
      <Link to='/'>
        <img src={require('../images/logo-full.svg')} width='150' alt={siteTitle} />
      </Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About</Link>
      <Link to='/linkedin'>LinkedIn</Link>
      <Link to='/schedule'>
        <button>Schedule</button>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle : PropTypes.string
}

Header.defaultProps = {
  siteTitle : ``
}

export default Header
