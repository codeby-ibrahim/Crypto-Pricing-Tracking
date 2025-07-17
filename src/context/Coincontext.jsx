const { createContext, useState, useEffect } = require("react")


export const Coincontext = createContext();

const CoincontextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setcurrency] = useState({
    name: "usd",
    Symbol: "$"
  });

  const fetchAllCoin = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-91Na3gF37jLkMimFB9B4Ftwp'
    }
  };

  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
    .then(response => response.json())
    .then(data => setAllCoin(data))
    .catch(err => console.error(err));
};


useEffect (() =>{
   fetchAllCoin();
},[])





  const contexvalue = {

  }
  return (
    <Coincontext.Provider value={contexvalue}>
      {props.children}
    </Coincontext.Provider>
  )
}

export default CoincontextProvider;