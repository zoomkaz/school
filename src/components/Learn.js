import React, { Component } from 'react'

export class Learn extends Component {
  render() {
    return (
      <>
      <div className='content'>
        <div className='learn_head'>
          <h1>Learn marketing strategy</h1>
          <div className='learn_text'>
            <p>Massa ultricies mi quis hendrerit. 
              Ac ut consequat semper viverra nam. 
              Libero id faucibus nisl tincidunt eget nullam non nisi est. 
              Arcu odio ut sem nulla. Amet tellus cras adipiscing enim. 
              Et magnis dis parturient montes. Imperdiet sed euismod nisi porta.
            </p>
            <button className='learn_btn' onClick={() => this.props.odAdd(this.props.items[0])}>LEARN MORE</button>
          </div>
        </div>
        <div className='learn_image_container'>
          <img className='learn_img' src={process.env.PUBLIC_URL + '/img/learnImg.jfif'} alt='Oopss..'/>
        </div>
      </div>
      <div className='learn_bg'></div>
      </>
    )
  }
}

export default Learn