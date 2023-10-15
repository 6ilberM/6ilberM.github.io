import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

const GetBlogPosts = () => {
    const textStyling = {
        color: 'white',
        // Other text styling properties...
    };

    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              image
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);

    const blogPosts = data?.allMarkdownRemark?.edges || [];

    return (
        <>
            {blogPosts.map(({node}) => (
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
};

export default GetBlogPosts;