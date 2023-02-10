import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightblue;
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

const Navigation = styled.ul``;

const Menu = styled.li``;

export default function Topbar() {
  return (
    <Container>
      <Logo>.lebo</Logo>
      <Navigation>
        <Menu>
          <Link to="/">Acceuil</Link>
        </Menu>
        <Menu>
          <Link to="/report">Rapport</Link>
        </Menu>
      </Navigation>
    </Container>
  );
}
