import React, { use, useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/Coincontext'
const Home = () => {
   const {allCoin, currency} = useContext(CoinContext);
   const [displayCoin,setdesplaycoin] = useState([]);

  useEffect(() =>{
      setdesplaycoin(allCoin);

  },[allCoin])

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto MarketPlace</h1>
        <p>Wellcome to the worlds largest carptocurrency MarketPlace. Sign up to explore more about Crypto</p>
        <form>
          <input type="text" placeholder='search Crypto' />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='crypto-taple'>
        <div className='table-layout'>
           <p>#</p>
           <p>Coins</p>
           <p>Price</p>
           <p style={{textAlign:'center'}}>24H Change</p>
           <p className='market-cap'>Market Cap</p>
        </div>
          {
              
      displayCoin.slice(0, 10).map((item,index) =>(
     
     <div className='table-layout' key={index}>
       <p>{item.market_cap_rank}</p>
       </div>
      ))
        
      
          }
      </div>
    </div>

    
  )
}

export default Home