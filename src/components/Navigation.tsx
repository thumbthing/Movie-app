import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Navigation: React.FC = () => {
  return (
    <StyledNavContainer className='nav'>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/about'>About</StyledLink>
    </StyledNavContainer>
  );
};

export default Navigation;

const StyledNavContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 50px;
  left: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 5px;

  @media screen and (max-width: 1090px) {
    left: initial;
    top: initial;
    bottom: 0px;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0008fc;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  font-weight: 600;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
