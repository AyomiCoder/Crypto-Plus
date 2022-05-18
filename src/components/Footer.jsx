import React from 'react'
import './style.css'

const d = new Date().getFullYear()

function Footer() {
  return (
    <p className='footer'>
      Developed by <a href='www.twitter.com/AyomiCoder'>(C)Ayomide Aluko</a> {d}
    </p>
  )
}

export default Footer