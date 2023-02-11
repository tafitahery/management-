import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background-color: #eeeeee;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const Input = styled.input`
  background-color: #eeeeee;
  padding: 10px 0;
  width: 120px;
  border: none;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const Currency = styled.span`
  color: gray;
  font-size: 18px;
`;

const Select = styled.select`
  background-color: #eeeeee;
  padding: 10px 0;
  width: 120px;
  height: 100%;
  border: none;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  color: gray;
`;

const Text = styled.textarea`
  background-color: #eeeeee;
  resize: none;
  width: 200px;
  height: 40px;
  border: none;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  &:placeholder-shown {
    font-size: 24px;
  }
`;

const Validation = styled.button`
  background-color: teal;
  border: none;
  color: white;
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
`;

export default function NewEntry() {
  return (
    <Container>
      <Form>
        <Wrapper>
          <Input type="number" autoFocus />
          <Currency>Ar</Currency>
        </Wrapper>
        <Wrapper>
          <Select>
            <Option> --- </Option>
            <Option>Entrée</Option>
            <Option>Sortie</Option>
          </Select>
        </Wrapper>
        <Wrapper>
          <Text placeholder="motifs" />
        </Wrapper>
        <Validation>Valider</Validation>
      </Form>
    </Container>
  );
}
