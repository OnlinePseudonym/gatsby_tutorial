import * as React from "react";
import styled from "styled-components";

const StyledItems = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`;

const NavItems = ({ children, rest }) => {
  return <StyledItems {...rest}>{children}</StyledItems>;
};

export default NavItems;
