import { useEffect, useState } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';



function MainRoute() {
  const [crypto, setCrypto] = useState([]);

  let navigate = useNavigate()
  

  useEffect(() =>{
    Axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=20").then((response) =>{
      setCrypto(response.data["data"])

    })
  }, [])

  return(
      <>
      <header className="App-header">
        <Navbar />
        </header>
        <div className='cryptoList'>
          {crypto.map((coin) =>{
            return(
              <div className='card'>
                <h1>{coin.symbol}</h1>
                <h3>{coin.name}</h3>
                <p className='price'>Price: ${coin.price_usd}</p>
                <p className='cap'>Market Cap: {coin.market_cap_usd}</p>
                <button className='button-arrow' onClick={() =>{navigate(`/currency/${coin.id}`)}}>
                  More Info</button>
              </div>
            )
          })}
        </div> 
        <Footer />
      </>
        )}

export default MainRoute;