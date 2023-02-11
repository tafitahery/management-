import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  padding: 10px;
`;

export default function Amount() {
  return (
    <Container>
      <Card label="Entrée" amount={2000} />
      <Card label="Sortie" amount={500} />
      <Card label="Profit" amount={1500} />
    </Container>
  );
}
