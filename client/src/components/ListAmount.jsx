import React, { useContext } from 'react';
import styled from 'styled-components';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

import { AppContext } from '../context/context';

const Container = styled.div`
  margin: 20px 100px;
  display: flex;
  flex-direction: column;
`;

const Options = styled.div``;

const Table = styled.table`
  -webkit-box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.33);
`;

const Tr = styled.tr``;

const Th = styled.th`
  border-bottom: 2px solid gray;
  font-size: 18px;
  color: gray;
  width: 50px;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  cursor: pointer;
  background-color: lightgray;
  border-radius: 5px;

  ${(props) => props.color && 'color: white;'}
  ${(props) =>
    props.color &&
    (props.color === 'in'
      ? 'background-color: lightgreen;'
      : 'background-color: tomato;')}
  ${(props) =>
    props.amount &&
    `display : flex; align-items: center; justify-content: center;`}

  &:hover {
    background-color: gray;
    color: white;
  }
`;

const IconUp = styled(BsFillCaretUpFill)`
  color: green;
  margin-left: 5px;
`;

const IconDown = styled(BsFillCaretDownFill)`
  color: red;
  margin-left: 5px;
`;

export default function ListAmount() {
  const { amounts } = useContext(AppContext);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  return (
    <Container>
      <Options></Options>
      <Table>
        <thead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Montant (Ar)</Th>
            <Th>Motifs</Th>
          </Tr>
        </thead>
        <tbody>
          {amounts
            ?.sort((a, b) => b.date - a.date)
            .map((item) => (
              <Tr key={item.id}>
                <Td>{formatDate(item.date)}</Td>
                <Td color={item.type}>
                  {item.type === 'in' ? 'Entrée' : 'Sortie'}
                </Td>
                <Td amount>
                  {item.amount} {item.type === 'in' ? <IconUp /> : <IconDown />}
                </Td>
                <Td>{item.motifs}</Td>
              </Tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}
