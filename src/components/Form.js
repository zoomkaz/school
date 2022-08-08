import React, { Component } from 'react'
import { FaFacebook, FaInstagramSquare, FaGooglePlus } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

export class Form extends Component {
  render() {
    return (
      <div className='content'>
        <div className='form_container'>
          <div className='form_left'>
            <div className='place_container'>
              <h3>место нахождения</h3>
              <h5>
                28 Jackson Blvd Ste 1020 Chicago
                IL 60604-2340
              </h5>
            </div>
            <div className='subscribe_container'>
              <h3>Подписывайтесь на нас</h3>
              <div className='social'>
                <FaFacebook className='icon' />
                <AiFillTwitterCircle className='icon' />
                <FaInstagramSquare className='icon' />
                <FaGooglePlus className='icon'/>
              </div>
              <p>© 2021 Политика конфиденциальности</p>
            </div>
          </div>
          <div className='form_right'>
            <h3>Форма обратной связи</h3>
            <form>
              <input type='text' placeholder='Enter your Name' />
              <input type='email' placeholder='Enter a valid e-mail address' />
              <textarea placeholder='Enter your message'></textarea>
              <button type='submit' className='form_btn'>ПРЕДСТАВИТЬ НА РАССМОТРЕНИЕ</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form