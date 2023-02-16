import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { AppContext } from '../context/context';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 70px;
`;

const Form = styled.form`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background-color: #eeeeee;
  padding: 5px;
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
  cursor: pointer;
`;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 10px;
  width: 13px;
`;

export default function NewEntry() {
  const { entry, setEntry } = useContext(AppContext);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setEntry((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!entry.amount || !entry.type) {
      setError(true);
      return;
    }
    const data = {
      ...entry,
      amount: parseInt(entry.amount),
      date: Date.now(),
    };
    try {
      await axios.post('http://localhost:5000/amounts', data);
      setEntry({ amount: 0, type: '', motifs: '' });
      setError(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Wrapper>
          <Input
            type="number"
            name="amount"
            autoFocus
            value={entry.amount}
            onChange={handleChange}
          />
          <Currency>Ar</Currency>
        </Wrapper>
        <Wrapper>
          <Select name="type" value={entry.type} onChange={handleChange}>
            <Option value=""> --- </Option>
            <Option value="in">Entrée</Option>
            <Option value="out">Sortie</Option>
          </Select>
        </Wrapper>
        <Wrapper>
          <Text
            placeholder="motifs"
            name="motifs"
            value={entry.motifs}
            onChange={handleChange}
          />
        </Wrapper>
        <Validation>Valider</Validation>
      </Form>
      {error && <Error>Merci de bien remplir le formulaire</Error>}
    </Container>
  );
}
