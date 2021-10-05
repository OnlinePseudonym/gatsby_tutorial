import * as React from "react";
import Container from "./layout/conatiner";
import Heading from "./typography/heading";
import NavItems from "./navigation/navItems";
import NavItem from "./navigation/navItem";
import NavLink from "./navigation/navLink";
import Header from "./layout/header";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Header>{data.site.siteMetadata.title}</Header>
      <nav>
        <NavItems>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/blog">Blog</NavLink>
          </NavItem>
        </NavItems>
      </nav>
      <main>
        <Heading level="1">{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
