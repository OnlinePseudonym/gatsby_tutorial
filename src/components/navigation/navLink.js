import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  color: black;
`;

const NavLink = ({ to, children, rest }) => {
  return (
    <StyledLink to={to} {...rest}>
      {children}
    </StyledLink>
  );
};

export default NavLink;
