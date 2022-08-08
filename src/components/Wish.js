import React, { Component } from 'react'
import { GoX } from 'react-icons/go'

export class Wish extends Component {
  render() {
    return (
      <div className='item'>
        <img alt='Oopss..' src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <GoX onClick={() => this.props.onDelete(this.props.item.id)} className='delete' />
      </div>
    )
  }
}

export default Wish