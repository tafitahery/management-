import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

import { AppContext } from '../context/context';
import axios from 'axios';

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 55%;
`;

const Options = styled.div``;

const Table = styled.table`
  border-collapse: collapse;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 280px;
  -webkit-box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.33);
`;

const Thead = styled.thead``;

const Tbody = styled.tbody`
  overflow-y: auto;
  overflow-x: hidden;
`;

const Tr = styled.tr`
  transition: all 0.25s ease;
  ${({ normal }) =>
    normal &&
    css`
      &:hover {
        background-color: lightgray;
        color: white;
      }
    `}
`;

const Th = styled.th`
  border-bottom: 2px solid gray;
  font-size: 18px;
  color: gray;
  width: 200px;
  ${({ sm }) => sm && 'width: 150px;'}
  ${({ del }) => del && 'width: 50px;'}
`;

const Td = styled.td`
  padding: 10px;
  cursor: pointer;
  width: 200px;
  text-align: center;

  ${({ color }) => color && 'width: 150px;'}
  ${({ color }) => color && (color === 'in' ? 'color: green;' : 'color: red;')}
  ${(props) =>
    props.amount &&
    `display : flex; align-items: center; justify-content: center; width: 150px;`}
  ${({ del }) =>
    del &&
    `
    width: 30px; color: red; 
    transition: all 0.25s ease; 
    `}
  ${({ del }) =>
    del &&
    css`
      &:hover {
        color: white;
        background-color: red;
      }
    `}
`;

const IconUp = styled(BsFillCaretUpFill)`
  color: green;
  margin-left: 5px;
`;

const IconDown = styled(BsFillCaretDownFill)`
  color: red;
  margin-left: 5px;
`;

export default function ListAmount({ setShow }) {
  const { accountSelected, setAccount, setSeletedDate } =
    useContext(AppContext);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleEdit = (date) => {
    setShow(true);
    setSeletedDate(date);
  };

  const handleDelete = async (date) => {
    const removeElement = accountSelected.amounts.filter(
      (item) => item.date !== date
    );
    try {
      await axios.put('http://localhost:5000/accounts/' + accountSelected.id, {
        ...accountSelected,
        amounts: removeElement,
      });
      setAccount({ name: '', amounts: [] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Options></Options>
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th sm>Type</Th>
            <Th sm>Montant (Ar)</Th>
            <Th>Motifs</Th>
            <Th del></Th>
          </Tr>
        </Thead>
        <Tbody>
          {accountSelected.amounts
            ?.sort((a, b) => b.date - a.date)
            .map((item) => (
              <Tr key={item.date} normal>
                <Td onClick={() => handleEdit(item.date)}>
                  {formatDate(item.date)}
                </Td>
                <Td color={item.type} onClick={() => handleEdit(item.date)}>
                  {item.type === 'in' ? 'Entrée' : 'Sortie'}
                </Td>
                <Td amount onClick={() => handleEdit(item.date)}>
                  {item.amount} {item.type === 'in' ? <IconUp /> : <IconDown />}
                </Td>
                <Td onClick={() => handleEdit(item.date)}>{item.motifs}</Td>
                <Td del onClick={() => handleDelete(item.date)}>
                  X
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Container>
  );
}
