import * as React from "react";
import styled from "styled-components";

const StyledNavItem = styled.li`
  padding-right: 2rem;
`;

const NavItem = ({ children, rest }) => {
  return <StyledNavItem {...rest}>{children}</StyledNavItem>;
};

export default NavItem;
