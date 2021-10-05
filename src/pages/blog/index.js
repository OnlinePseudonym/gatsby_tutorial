import * as React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import Heading from "../../components/typography/heading";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {data?.allMdx?.posts?.length &&
        data.allMdx.posts.map((post) => (
          <article key={post.id}>
            <Link to={`/blog/${post.slug}`}>
              <Heading>{post.frontmatter?.title}</Heading>
            </Link>
            <p>Posted: {post.frontmatter?.date}</p>
          </article>
        ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      posts: nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
