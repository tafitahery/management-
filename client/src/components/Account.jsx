import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
import { BsCheckLg } from 'react-icons/bs';
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

const AddIcon = styled(BsPlusLg)`
  cursor: pointer;
  color: gray;
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

const CheckIcon = styled(BsCheckLg)`
  cursor: pointer;
  color: gray;
`;

const Option = styled.option``;

const Title = styled.h1`
  flex: 1;
  font-weight: 400;
`;

export default function Account() {
  const [title, setTitle] = useState('Nouveau compte');

  const {
    accounts,
    account,
    setAccount,
    selectAccount,
    setSelectAccount,
    accountSelected,
  } = useContext(AppContext);

  const handleSetName = (e) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddAccount = async () => {
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

  const handleSelectAccount = async (id) => {
    setTitle(accountSelected.name);
  };

  return (
    <Container>
      <Wrapper>
        <SelectAccount>
          <AccountWrapper>
            <Input
              type="text"
              name="name"
              placeholder="Nouveau compte"
              autoFocus
              value={account.name}
              onChange={handleSetName}
            />
            <AddIcon onClick={handleAddAccount} />
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
            <CheckIcon onClick={() => handleSelectAccount(selectAccount)} />
          </AccountWrapper>
        </SelectAccount>
        <Title>{title}</Title>
      </Wrapper>
    </Container>
  );
}
