import React from 'react'
import glimse2 from "../assests/glimses 2.png";
const Glimses = () => {
    return (
      <div className='glimse'>
        <h1>Glimses from our event</h1>
        <p>Enjoy the event through these picture</p>
        <div className='upper'>
          <div className='image-container'>
            <img src={glimse2} alt="Graphics"/>
          </div>
          <div className='image-container'>
            <img src={glimse2} alt="Graphics"/>
          </div>
          <div className='image-container'>
            <img src={glimse2} alt="Graphics"/>
          </div>
        </div>
        <div className='lower'>
        <div className='image-container2'>
            <img src={glimse2} alt="Graphics"/>
          </div>
          <div className='image-container2'>
            <img src={glimse2} alt="Graphics"/>
          </div>
          <div className='image-container2'>
            <img src={glimse2} alt="Graphics"/>
          </div>
        </div>
        </div>
    )
  }

export default Glimses