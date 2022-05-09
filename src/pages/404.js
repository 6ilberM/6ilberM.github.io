import * as React from 'react'
import { Link } from 'gatsby'

// styles
const pageStyles = {
  color: 'white',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
}

const paragraphStyles = {
  marginBottom: 48
}
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4
}

const mainBackgroundStyle = {
  backgroundColor: '#1b1b1bb7'
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <div style={mainBackgroundStyle}>
        <title>Not found</title>
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry{' '}
          <span role='img' aria-label='Pensive emoji'>
            😔
          </span>{' '}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link style={pageStyles}  to='/'>Go home</Link>.
        </p>
      </div>
    </main>
  )
}

export default NotFoundPage
