import React from 'react';
import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
import { BsCheckLg } from 'react-icons/bs';

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

const SelectAcount = styled.div`
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
  return (
    <Container>
      <Wrapper>
        <SelectAcount>
          <AccountWrapper>
            <Input type="text" placeholder="Nouveau compte" autoFocus />
            <AddIcon />
          </AccountWrapper>
          <AccountWrapper>
            <Select>
              <Option>Selectioner un compte</Option>
              <Option>1</Option>
              <Option>2</Option>
            </Select>
            <CheckIcon />
          </AccountWrapper>
        </SelectAcount>
        <Title>Nouvel Enregistrement</Title>
      </Wrapper>
    </Container>
  );
}
