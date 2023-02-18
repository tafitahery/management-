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
`;

const Form = styled.form`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background-color: #eeeeee;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const Input = styled.input`
  background-color: #eeeeee;
  padding: 10px 0;
  width: 125px;
  border: none;
  font-size: 18px;

  ${({ motifs }) => motifs && 'width: 200px;'}

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
  height: 13px;
`;

export default function NewEntry() {
  const { entry, setEntry, selectAccount, accountSelected } =
    useContext(AppContext);
  const [error, setError] = useState(false);

  const formatCalendarDate = (date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const stringMonth = month < 10 ? '0' + month : month;
    const day = new Date(date).getDate();
    return `${year}-${stringMonth}-${day}`;
  };

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
      date: new Date(entry.date).getTime(),
    };
    try {
      await axios.put('http://localhost:5000/accounts/' + selectAccount, {
        ...accountSelected,
        amounts: [...accountSelected.amounts, data],
      });
      setEntry({ amount: 0, type: '', motifs: '', date: Date.now() });
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
            type="date"
            name="date"
            value={formatCalendarDate(entry.date)}
            onChange={handleChange}
          />
        </Wrapper>
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
          <Input
            type="text"
            name="motifs"
            motifs
            placeholder="motifs"
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
