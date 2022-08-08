import React, { Component } from 'react'

export class Our extends Component {
  render() {
    return (
      <div className='content'>
        <div className='our_box'>
          <div className='our_box__text'>
            <h4>our teachers</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <img src={process.env.PUBLIC_URL + '/img/man.jpg'} alt='Oopss..'/>
        </div>
        <div className='our_box'>
          <div className='our_box__text'>
            <h4>our goals</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <img src={process.env.PUBLIC_URL + '/img/woman.jpg'} alt='Oopss..'/>
        </div>
        <div className='our_img_bg'>
        <img className='our_img' src={process.env.PUBLIC_URL + '/img/our_img.jpeg'} alt='Oopss..'/>
        </div>
      </div>
    )
  }
}

export default Our