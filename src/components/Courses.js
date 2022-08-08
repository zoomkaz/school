import React, { Component } from 'react'

export class Courses extends Component {
  render() {
    return (
      <div className='course_bg'>
        <div className='content'>
          <div className='course_head'>
            <h1><b>Our Courses</b></h1>
          </div>
          <div className='course_container'>
            <div className='course_box'>
              <h4>DESIGN</h4>
              <i>Sample text. Click to select the text box. Click again or double click to start editing the text.</i>
              <button onClick={() => this.props.odAdd(this.props.items[1])}>LEARN MORE</button>
            </div>
            <div className='course_box'>
              <h4>PROGRAMMING</h4>
              <i>Sample text. Click to select the text box. Click again or double click to start editing the text.</i>
              <button onClick={() => this.props.odAdd(this.props.items[2])}>LEARN MORE</button>
            </div>
            <div className='course_box'>
              <h4>MARKETING</h4>
              <i>Sample text. Click to select the text box. Click again or double click to start editing the text.</i>
              <button onClick={() => this.props.odAdd(this.props.items[0])}>LEARN MORE</button>
            </div>
            <div className='course_box'>
              <h4>BUSINESS</h4>
              <i>Sample text. Click to select the text box. Click again or double click to start editing the text.</i>
              <button onClick={() => this.props.odAdd(this.props.items[3])}>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Courses