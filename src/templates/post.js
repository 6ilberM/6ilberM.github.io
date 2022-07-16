import React from 'react'
import { graphql, Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import * as styles from '../scss/post.module.scss'
import NavigationBar from '../components/NavigationBar'
require('prismjs/themes/prism-twilight.css') //Adds the ability to see code blocks syntax highlited
const Post = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div className='wrapperJournal'>
      <NavigationBar />
      <Container className={styles.container} fluid='md'>
        <h1 text={post.frontmatter.title}> </h1>
        <Row>
          <Col>
            <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
          </Col>
        </Row>
      </Container>
      <div>
        <Link className='btn btn-dark' to='/blog'>
          return back
        </Link>
      </div>
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
