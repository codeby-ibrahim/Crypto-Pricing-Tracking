import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/Coincontext';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]); // ✅ fixed typo
 
  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
        setDisplayCoin(allCoin);
    }
}

  const searchHandler = async(event) => {
    event.preventDefault();
    const coin = await allCoin.falter((item) => {
   return item.name.toLowerCase().includes(input.toLowerCase)
    })
    setDisplayCoin(coin);
  }
   


  useEffect(() => {
    if (Array.isArray(allCoin)) {
      setDisplayCoin(allCoin);
    } else {
      setDisplayCoin([]); // fallback to empty array
    }
  }, [allCoin]);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto MarketPlace</h1>
        <p>Welcome to the world’s largest cryptocurrency marketplace. Sign up to explore more about Crypto.</p>
        <form>
          <input type="text" placeholder='Search Crypto' />
          <button type='submit'>Search</button>
        </form>
      </div>

      <div className='crypto-taple'>
        <div className='table-layout'>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>

        {Array.isArray(displayCoin) &&
          displayCoin.slice(0, 10).map((item, index) => (
            <div className='table-layout' key={index}>
              <p>{item.market_cap_rank}</p>
              <p>
                <img src={item.image} alt={item.name} width="20" /> {item.name}
              </p>
              <p>{currency.symbol}{item.current_price}</p>
              <p style={{ textAlign: 'center', color: item.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
                {item.price_change_percentage_24h?.toFixed(2)}%
              </p>
              <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
