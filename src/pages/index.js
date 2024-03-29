import * as React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import * as style from '../scss/index.module.scss'
import NavigationBar from '../components/NavigationBar'
import _myPortraitImage from '../images/GM-Bunny.png'
import {graphql} from 'gatsby';
import GetBlogPosts from '../components/GetBlogPosts';

const textStyling = {color: 'white', fontSize: '20px', fontFamily: 'Lucida Sans'}


const IndexPage = (data) => {
    return (<main>
        <NavigationBar/>
        <Container fluid style={{position: 'relative', top: '60px'}}>
            <Row>
                <Col fluid sm={2}>
                    <Image rounded={true} fluid src={_myPortraitImage} alt={_myPortraitImage}/>
                </Col>
                <Col>
                    <p style={textStyling}> Gilberto Moreno, I like making things & games</p>
                    <p style={textStyling}> I believe dreams shape the world,
                        so i dream to make games people will love </p>
                </Col>
            </Row>
            <Row>

                {/* Display recent blog posts */}
                <h2>Recent Blog Posts</h2>
                <GetBlogPosts/>
            </Row>
        </Container>
    </main>)
}

export default IndexPage
