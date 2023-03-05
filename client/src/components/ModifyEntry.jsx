import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000000b5;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

const Form = styled.form`
  width: 18%;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
`;

const Title = styled.h1`
  text-align: center;
  color: gray;
`;

const Input = styled.input`
  margin: 0 20px;
  padding: 10px;
  border-radius: 5px;
  font-size: inherit;
`;

const Select = styled.select`
  margin: 0 20px;
  padding: 10px;
  border-radius: 5px;
  font-size: inherit;
`;

const Option = styled.option``;

const Wrapper = styled.div`
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  ${({ del }) => del && `background-color: tomato;`}
  ${({ valid }) => valid && `background-color: teal;`}
`;

export default function ModifyEntry() {
  return (
    <Container>
      <Form>
        <Title>Modification</Title>
        <Input type="date" />
        <Input type="number" placeholder="montant" />
        <Select>
          <Option value=""> --- </Option>
          <Option value="in">Entrée</Option>
          <Option value="out">Sortie</Option>
        </Select>
        <Input type="text" placeholder="motifs" />
        <Wrapper>
          <Button del>Annuler</Button>
          <Button valid>Valider</Button>
        </Wrapper>
      </Form>
    </Container>
  );
}
