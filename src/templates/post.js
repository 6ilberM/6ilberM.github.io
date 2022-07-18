import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import * as styles from '../scss/post.module.scss'
import NavigationBar from '../components/NavigationBar'
require('prismjs/themes/prism-twilight.css') //Adds the ability to see code blocks syntax highlited
const Post = ({ data }) => {
  const post = data.markdownRemark

  const titleStyle = { color: 'white' }

  return (
    <div className='wrapperJournal'>
      <NavigationBar />
      <Container fluid md={10}>
        <h1 className={styles.funkyTitle}>{post.frontmatter.title}</h1>
        <Container className={styles.postContentContainer}>
          <Row>
            <Col>
              <p
                dangerouslySetInnerHTML={{ __html: post.html }}
                style={titleStyle}
              ></p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
        category
      }
    }
  }
`
