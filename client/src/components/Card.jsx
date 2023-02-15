import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 10px;
  margin: 0 30px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  -webkit-box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.33);
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: gray;
`;

const Amount = styled.div`
  font-size: 26px;
  font-weight: 500;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${({ label, amount }) =>
    label === 'Profit' && (amount < 0 ? 'color: red;' : 'color: green')}
`;

export default function Card({ label, amount }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Amount label={label} amount={amount}>
        {amount} Ar
      </Amount>
    </Container>
  );
}
