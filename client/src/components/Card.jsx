import React from 'react';
import styled from 'styled-components';
import { BsFillCaretDownFill } from 'react-icons/bs';

const Container = styled.div`
  flex: 1;
  margin: 30px 60px 30px 30px;
  padding: 10px;
  height: 70px;
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
`;

const Amount = styled.div`
  font-size: 42px;
  font-weight: 500;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled(BsFillCaretDownFill)`
  font-size: 24px;
  color: red;
`;

export default function Card({ label, amount }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Amount>
        {amount} Ar
        <Icon />
      </Amount>
    </Container>
  );
}
