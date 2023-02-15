import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../context/context';

import Card from './Card';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 10px;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Amount() {
  const { amounts } = useContext(AppContext);

  const total = (type) => {
    return amounts?.reduce(
      (sum, item) => (type === item.type ? (sum += item.amount) : sum),
      0
    );
  };

  return (
    <Container>
      <Wrapper>
        <Card label="Entrée" amount={total('in')} />
        <Card label="Sortie" amount={total('out')} />
        <Card label="Profit" amount={total('in') - total('out')} />
      </Wrapper>
    </Container>
  );
}
