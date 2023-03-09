import * as React from 'react'
import {Link} from 'gatsby'
import {Row, Col, Container} from "react-bootstrap";

// styles
const pageStyles = {color: 'white', padding: '96px', fontFamily: ' input mono,-apple-system, Roboto, sans-serif, serif'}

const headingStyles = {marginTop: 0, marginBottom: '.2vh'}

const paragraphStyles = {
    marginBottom: '48px',
}

const codeStyles = {color: '#8A6534', padding: 4, backgroundColor: '#FFF4DB', fontSize: '1.25rem', borderRadius: 4}

const mainBackgroundStyle = {backgroundColor: 'rgba(112,112,112,0.91)', borderRadius: '30px'}

const NotFoundPage = () => {
    return (<main style={pageStyles}>

        <Container style={mainBackgroundStyle} fluid>
            <title>Not found</title>
            <h1 style={headingStyles}>Page is missing in Action</h1>
            <Container fluid>
                <p style={paragraphStyles}>Sorry<span role='img' aria-label='Pensive emoji'>😔</span>
                    <br/>
                    You sure that page exists?
                    <br/>
                    {process.env.NODE_ENV === 'development' ? (<><br/>Try creating a page in <code
                        style={codeStyles}>src/pages/</code>.<br/></>) : null} <br/>
                    <Link style={pageStyles} to='/'>Go home</Link>.
                </p>
            </Container>
        </Container>
    </main>)
}

export default NotFoundPage
