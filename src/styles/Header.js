import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${(props) => props.color || "black"};
  text-align: center;
`;

export const Heading = ({ children, color }) => (
  <StyledHeading color={color}>{children}</StyledHeading>
);