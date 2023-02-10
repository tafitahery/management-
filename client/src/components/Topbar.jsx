import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px -1px 44px 2px rgba(0, 0, 0, 0.43);
  box-shadow: 0px -1px 44px 2px rgba(0, 0, 0, 0.43);
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 42px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  font-size: 24px;
`;

const Menu = styled.li`
  margin-left: 20px;
  color: lightgray;
  font-weight: 400;
  &:hover {
    color: gray;
  }
`;

export default function Topbar() {
  return (
    <Container>
      <Logo>
        <StyledLink to="/">.lebo</StyledLink>
      </Logo>
      <Navigation>
        <Menu>
          <StyledLink to="/">Acceuil</StyledLink>
        </Menu>
        <Menu>
          <StyledLink to="/report">Rapport</StyledLink>
        </Menu>
      </Navigation>
    </Container>
  );
}
