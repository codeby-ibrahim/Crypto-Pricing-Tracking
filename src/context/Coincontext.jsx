const { createContext, useState } = require("react")


export const Coincontext = createContext();

const CoincontextProvider = (props) => {
    const [allcoin, setallcoin] = useState([]);
    const [currency, setcurrency] = useState({
        name: "usd",
        Symbol: "$"
    });

  const featchallcoin = async() =>{
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
  headers: {
    'x-cg-pro-api-key': 'CG-rtgdhp1Ms21yJinz79N9xKsB'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));


  }


    const contexvalue = {

    }
    return (
        <Coincontext.Provider value={contexvalue}>
            {props.children}
        </Coincontext.Provider>
    )
}

export default CoincontextProvider;