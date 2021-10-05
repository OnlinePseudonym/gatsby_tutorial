import * as React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  color: rebeccapurple;
`;

const Heading = ({ level, children, ...rest }) => {
  return (
    <StyledHeading as={`h${level || 2}`} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
