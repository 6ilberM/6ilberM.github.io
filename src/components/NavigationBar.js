import React from 'react'
import { Link } from 'gatsby'
import '../scss/NavigationBar.module.scss'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar bg='dark' variant='dark' sticky="top">
      <Container>
        <Navbar.Toggle aria-controls={'navbarResponsive'} />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link className={'nav-link'} activeClassName='active' to='/'>
              Home
            </Link>
            <Link className={'nav-link'} activeClassName='active' to='/blog'>
              Blog!
            </Link>
            <Link className={'nav-link'} activeClassName='active'to='/portfolio'>
              Portfolio
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
