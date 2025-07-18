import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/Coincontext';

const Coin = () => {
  const {coinid} = useParams();
 const {coinData, setcoinData} = useState();
const {currency} = useContext(CoinContext)

 
 const fetchCoinData = async ()=>{
  const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinData}`, options)
  .then(res => res.json())
  .then(res => setcoinData(res))
  .catch(err => console.error(err));
 }
  useEffect(() =>{
    fetchCoinData
  },[currency])

 if (coinData) {
  return (
    <div>
      <h2 className='coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt={coinData.name} />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
      </h2>
    </div>
  );
} else {
  return (
    <div className='spinner'> 
     <div className='spin'>
      
     </div>
    </div>
  );
}

  
}

export default Coin