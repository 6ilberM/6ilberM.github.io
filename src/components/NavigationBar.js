import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../scss/NavigationBar.module.scss'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar bg='dark' expand='sm'>
      <Container>
        <Navbar.Toggle
          aria-controls={
            // 'basic-navbar-nav',
            'navbarResponsive'
          }
        />
        <Navbar.Collapse id='navbarResponsive'>
          <Nav className='ml-auto' as={'ul'}>
            <Link className={'nav-link'} activeClassName='active' to='/'>
              Home
            </Link>
            <Link className={'nav-link'} activeClassName='active' to='/blog'>
              Blog!
            </Link>
            <Link
              className={'nav-link'}
              activeClassName='active'
              to='/portfolio'
            >
              Portfolio
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
