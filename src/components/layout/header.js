import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`;

const Header = ({ children, rest }) => {
  return <StyledHeader {...rest}>{children}</StyledHeader>;
};

export default Header;
