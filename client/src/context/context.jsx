import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [entry, setEntry] = useState({
    date: Date.now(),
    amount: '',
    type: '',
    motifs: '',
  });
  const [account, setAccount] = useState({
    name: '',
    amounts: [],
  });
  const [selectAccount, setSelectAccount] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [accountSelected, setAccountSelected] = useState({});

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/accounts');
        setAccounts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAccounts();
  }, [account, selectAccount]);

  useEffect(() => {
    const getAccountById = async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:5000/accounts/' + selectAccount
        );
        setAccountSelected(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAccountById();
  }, [selectAccount, entry, account]);

  return (
    <AppContext.Provider
      value={{
        entry,
        setEntry,
        account,
        setAccount,
        selectAccount,
        accountSelected,
        setSelectAccount,
        accounts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
