import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/Coincontext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    const value = event.target.value;
    setInput(value);

    if (value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const filteredCoins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(filteredCoins);
  };

  useEffect(() => {
    if (Array.isArray(allCoin)) {
      setDisplayCoin(allCoin);
    } else {
      setDisplayCoin([]);
    }
  }, [allCoin]);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto MarketPlace</h1>
        <p>Welcome to the world’s largest cryptocurrency marketplace. Sign up to explore more about Crypto.</p>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            placeholder='Search Crypto'
            value={input}
            onChange={inputHandler}
          />
          <button type='submit'>Search</button>
        </form>
      </div>

      <div className='crypto-table'>
        <div className='table-layout'>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>

        {displayCoin.slice(0, 10).map((item, index) => (
          <div className='table-layout' key={index}>
            <p>{item.market_cap_rank}</p>
            <p>
              <Link to={`/coin/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={item.image} alt={item.name} width="20" /> {item.name}
              </Link>
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
