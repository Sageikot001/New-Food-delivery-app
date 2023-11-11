import React from 'react'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className='Hero-l'>
            <h1>Your Favorite Food Delivery Partner</h1>
            <p>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. </p>
            <div className='input-container'>
            <input type="" placeholder='Enter your delivery  location' className='custom-input'/>
            <button className='order'>Order Now</button>
            </div>
            <div className='stores'>
            <img src="./Data/App Store Black Border.svg" alt="#" />
            <img src="./Data/Google Play Black Border.svg" alt="#" />
            </div>
        </div>
        <div className='Hero-r'>
            <img src="./Data/ImagesMan.svg" alt="#" className='Man' />
        </div>
    </div>
  )
}

export default Hero