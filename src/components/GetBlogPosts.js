import {graphql} from "gatsby";
import * as React from "react";

function GetBlogPosts({blogPost}) {
    return (
        <>
            {Array.isArray(blogPost) && blogPost.map(({node}) => (
                <div key={node.id}>
                    <h3 style={textStyling}>{node.frontmatter.title}</h3>
                    <p>{node.frontmatter.date}</p>
                    {/* Add image if available */}
                    {node.frontmatter.image && <img src={node.frontmatter.image} alt={node.frontmatter.title}/>}
                    <p>{node.excerpt}</p>
                    <a href={node.fields.slug}>Read more</a>
                </div>
            ))}
        </>
    );
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
export default GetBlogPosts;