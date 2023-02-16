import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [entry, setEntry] = useState({
    date: Date.now(),
    amount: 0,
    type: '',
    motifs: '',
  });
  const [amounts, setAmounts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/amounts');
        setAmounts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [entry]);

  return (
    <AppContext.Provider value={{ entry, setEntry, amounts }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
