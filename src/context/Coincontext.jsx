import React, { createContext, useState, useEffect } from 'react';

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$"
  });

const fetchAllCoin = async () => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`
    );
    const data = await response.json();
    setAllCoin(data);
  } catch (error) {
    console.error("Error fetching coins:", error);
  }
};


  useEffect(() => {
    fetchAllCoin();
  }, [currency.name]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
''