import React from 'react'
import Input from './Input'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <div className='subscribe'>
            <div>
            <h2>Subscribe our newsletter</h2>
            <p>Browse local restaurants and businesses for delivery by entering your address below.</p>
            </div>
            <Input placeholder="Enter your email address..." command="Send" />
        </div>
    </div>
  )
}

export default Newsletter