import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './header.sass'

class Header extends Component {
  state = {
    hasScrolled : false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    const { siteTitle } = this.props
    const { hasScrolled } = this.state

    return (
      <header className={hasScrolled ? 'header header-scrolled' : 'header'}>
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
  }
}

Header.propTypes = {
  siteTitle : PropTypes.string
}

Header.defaultProps = {
  siteTitle : ``
}

export default Header
