import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios';
import Navbar from '../components/Navbar';
import './info.css'

function Currency() {
    let {id} = useParams()

    const [coin, setCoin] = useState({name: "", 
                                      symbol: "", 
                                      rank: 0, 
                                      price_usd: "", 
                                      volume24: 0,
                                      percent_change_24h: 0,
                                      csupply: 0,
                                      tsupply: 0})

    useEffect(() => {
        Axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then((response) =>{
           console.log(response.data[0])
           setCoin({
            name: response.data[0].name, 
            symbol: response.data[0].symbol, 
            rank: response.data[0].rank, 
            price_usd: response.data[0].price_usd, 
            volume24: response.data[0].volume24,
            percent_change_24h: response.data[0].percent_change_24h,
            csupply: response.data[0].csupply,
            tsupply: response.data[0].tsupply
           })
          });
    }, [])
    
  return (
    <>
    <Navbar />
    <div className='card-info'>
      <h1>{coin.name}</h1>
      <h3>{coin.symbol}</h3>
      <p>Rank: {coin.rank}</p>
      <p>Price in USD: ${coin.price_usd}</p>
      <p>Value in last 24hrs: {coin.volume24}</p>
      <p>Pecentage Change in 24hr:  {coin.percent_change_24h}</p>
      <p>Current token supply: {coin.csupply}</p>
      <p>Total token supply: {coin.tsupply}</p>
      <Link to='/'><button className='button-arrow'>Go back</button></Link>
    </div>
    
    </>
  )
}

export default Currency