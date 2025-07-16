import React from 'react'
import './Home.css'
const Home = () => {
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
    </div>
  )
}

export default Home