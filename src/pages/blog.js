import * as React from 'react'
import * as styles from '../scss/blog.module.scss'
import { Container, Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import NavigationBar from '../components/NavigationBar'

import { graphql, Link } from 'gatsby'

const BlogPage = ({ data }) => {
  return (
    <main>
      <NavigationBar />
      <Container className={styles.mainContent}>
        <h1>The Blog</h1>
        <Container>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Row>
              <Link className='btn' to={node.fields.slug}>
                <article>
                  <Col>
                    <strong>{node.frontmatter.title}</strong>
                  </Col>
                  <Col>
                    <p>{node.excerpt}</p>
                  </Col>
                </article>
              </Link>
            </Row>
          ))}
        </Container>
      </Container>
    </main>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image
            date(formatString: "MMMM YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage
