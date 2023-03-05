import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/context';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #000000b5;
  top: 0;
  left: 0;
  ${({ show }) => (show ? `display: flex;` : `display: none;`)}
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

export default function ModifyEntry({ show, setShow }) {
  const { selectedDate, accountSelected, setAccount } = useContext(AppContext);

  const [entry, setEntry] = useState({
    date: '',
    amount: '',
    type: '',
    motifs: '',
  });

  const editedAccount = accountSelected.amounts?.find(
    (item) => item.date === selectedDate
  );

  useEffect(() => {
    setEntry((prev) => ({ ...prev, ...editedAccount }));
  }, [editedAccount]);

  const formatCalendarDate = (date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const stringMonth = month < 10 ? '0' + month : month;
    const day = new Date(date).getDate();
    const stringDay = day < 10 ? '0' + day : day;
    return `${year}-${stringMonth}-${stringDay}`;
  };

  const handleChange = (e) => {
    setEntry((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const deletedAccount = accountSelected.amounts.filter(
      (item) => item.date !== selectedDate
    );
    const accountEdit = [
      ...deletedAccount,
      {
        ...entry,
        date: new Date(entry.date).getTime(),
        amount: parseInt(entry.amount),
      },
    ];
    try {
      await axios.put('http://localhost:5000/accounts/' + accountSelected.id, {
        ...accountSelected,
        amounts: accountEdit,
      });
      setAccount({ name: '', amounts: [] });
      setShow(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container show={show}>
      <Form onSubmit={handleSubmit}>
        <Title>Modification</Title>
        <Input
          type="date"
          name="date"
          value={formatCalendarDate(entry.date)}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="amount"
          placeholder="montant"
          value={entry.amount}
          onChange={handleChange}
        />
        <Select name="type" value={entry.type} onChange={handleChange}>
          <Option value=""> --- </Option>
          <Option value="in">Entrée</Option>
          <Option value="out">Sortie</Option>
        </Select>
        <Input
          type="text"
          name="motifs"
          placeholder="motifs"
          value={entry.motifs}
          onChange={handleChange}
        />
        <Wrapper>
          <Button type="button" del onClick={() => setShow(false)}>
            Annuler
          </Button>
          <Button valid>Valider</Button>
        </Wrapper>
      </Form>
    </Container>
  );
}
