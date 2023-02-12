import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../context/context';

import Card from './Card';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  padding: 10px;
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
      <Card label="Entrée" amount={total('in')} />
      <Card label="Sortie" amount={total('out')} />
      <Card label="Profit" amount={total('in') - total('out')} />
    </Container>
  );
}
