import React, { Component } from 'react'

export class Info extends Component {
  render() {
    return (
      <div className='info'>
        <div className='info_bg_box'></div>
        <div className='content'>
          <img src={process.env.PUBLIC_URL + '/img/info.png'} className='info_img' alt='Oops..'/>
          <div className='info_comp'>
          <div className='white_box'>
            <img src={process.env.PUBLIC_URL + '/img/COMPUTING.png'} alt='Oopss..'/>
            <h4>COMPUTING &amp; IT</h4>
          </div>
          <div className='white_box'>
            <img src={process.env.PUBLIC_URL + '/img/DATA ANALYTICS.png'} alt='Oopss..'/>
            <h4>DATA ANALYTICS</h4>
          </div>
          <div className='white_box'>
            <img src={process.env.PUBLIC_URL + '/img/DEVELOPMENT.jpg'} alt='Oopss..'/>
            <h4>DEVELOPMENT</h4>
          </div>
          </div>
        </div>
      </div>
    )
  }
}  

export default Info