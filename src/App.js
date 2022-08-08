import React, { Component } from 'react'
import Form from './components/Form'
import About from './components/About'
import Courses from './components/Courses'
import Drive from './components/Drive'
import Footer from './components/Footer'
import Header from './components/Header'
import Info from './components/Info'
import Learn from './components/Learn'
import Our from './components/Our'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Marketing',
          img: 'MARKETING.jpg'
        },
        {
          id: 2,
          title: 'Design',
          img: 'UX DESIGN.jpeg'
        },
        {
          id: 3,
          title: 'Programing',
          img: 'PROGRAMING.jpg'
        },
        {
          id: 4,
          title: 'Business',
          img: 'BUSINESS.jpg'
        },
        {
          id: 5,
          title: 'Data Science',
          img: 'DATA SCIENCE.png'
        },
        {
          id: 6,
          title: 'Testing',
          img: 'TESTING.png'
        },
      ]
    }
    this.addToWishes = this.addToWishes.bind(this)
    this.deleteWish = this.deleteWish.bind(this)
  }
  render() {
    return (
      <>
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteWish}/>
        <Info />
        <Learn odAdd={this.addToWishes} items={this.state.items}/>
        <Courses odAdd={this.addToWishes} items={this.state.items}/>
        <Drive />
        <Our />
        <About odAdd={this.addToWishes} items={this.state.items}/>
        <Form />
        <Footer />
      </div>
      </>
    )
  }

  deleteWish(id) {
    this.setState({ orders: this.state.orders.filter(element => element.id !== id)})
  }

  addToWishes(item) {
    let isInArray = false
    this.state.orders.forEach(element => {
      if (element.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }

}

export default App