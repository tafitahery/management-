import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
import { AppContext } from '../context/context';
import axios from 'axios';

const Container = styled.div`
  height: 60px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.33);
`;

const SelectAccount = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const AccountWrapper = styled.div`
  margin: 5px 20px;
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 1px;
  width: 200px;
  border: none;
  border-bottom: 1px solid gray;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  border-radius: 60px;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: teal;
  }
  ${({ del }) =>
    del &&
    `
    margin-left: 10px;
    background-color: transparent;
    color: red;
    width: 25px;
    height: 25px;
    `}
  ${({ del }) =>
    del &&
    css`
      &:hover {
        background-color: red;
        color: white;
        font-size: 18px;
        font-weight: 600;
      }
    `}
      
  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
  `}
  ${({ disabled }) =>
    disabled &&
    css`
      &:hover {
        background-color: gray;
      }
    `}
`;

const AddIcon = styled(BsPlusLg)`
  color: white;
`;

const Error = styled.span`
  margin-left: 10px;
  font-size: 12px;
  color: red;
`;

const Select = styled.select`
  padding: 1px;
  width: 200px;
  border: none;
  border-bottom: 1px solid gray;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option``;

const Title = styled.h1`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  color: teal;
`;

export default function Account() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);

  const {
    accounts,
    account,
    setAccount,
    selectAccount,
    setSelectAccount,
    accountSelected,
  } = useContext(AppContext);

  useEffect(() => {
    setTitle(accountSelected.name);
  }, [accountSelected]);

  useEffect(() => {
    if (accounts.find((item) => item.name === account.name)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [account.name, accounts]);

  const handleSetName = (e) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddAccount = async (e) => {
    e.preventDefault();
    if (!account.name) {
      return;
    }
    try {
      await axios.post('http://localhost:5000/accounts', {
        ...account,
        name: account.name,
      });
      setAccount({ ...account, name: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete('http://localhost:5000/accounts/' + selectAccount);
      setSelectAccount('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <SelectAccount>
          <AccountWrapper>
            <Form onSubmit={handleAddAccount}>
              <Input
                type="text"
                name="name"
                placeholder="Nouveau compte"
                required
                value={account.name}
                onChange={handleSetName}
              />
              <Button disabled={error}>
                <AddIcon />
              </Button>
            </Form>
            {error && <Error>Le compte existe deja</Error>}
          </AccountWrapper>
          <AccountWrapper>
            <Select
              value={selectAccount}
              onChange={(e) => setSelectAccount(e.target.value)}
            >
              <Option value="">Selectioner un compte</Option>
              {accounts?.map((account) => (
                <Option key={account.id} value={account.id}>
                  {account.name}
                </Option>
              ))}
            </Select>
          </AccountWrapper>
        </SelectAccount>
        {title && (
          <Title>
            {title}{' '}
            <Button del onClick={handleDelete}>
              X
            </Button>
          </Title>
        )}
      </Wrapper>
    </Container>
  );
}
