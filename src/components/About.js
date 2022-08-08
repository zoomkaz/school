import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div className='about_bg'>
        <div className='content'>
          <div className='about_head'>
            <div className='about_us'>about us</div>
            <div className='about_us__text'>
              <p>
                Pharetra magna ac placerat vestibulum lectus mauris ultrices. 
                Ut pharetra sit amet aliquam id diam maecenas ultricies mi. 
                Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras sed felis eget. 
                Amet risus nullam eget felis eget nunc. Lacus vestibulum sed arcu non odio euismod. 
                Consectetur adipiscing elit duis tristique.
              </p>
            </div>
          </div>
          <div className='about_text'>
            <div className='about_text__left'>
              <p>
              Article evident arrived express highest men did boy. 
              Mistress sensible entirely am so. Quick can manor smart money hopes worth too. 
              Comfort produce husband boy her had hearing. Law others theirs passed but wishes. 
              You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. 
              Oh feel if up to till like.
              </p>
              <p>
              Inquietude attachment if ye an solicitude to. Remaining so continued concealed as knowledge happiness. 
              Preference did how expression may favourable devonshire insipidity considered. 
              An length design regret an hardly barton mr figure. He went such dare good mr fact. 
              The small own seven saved man age no offer. 
              Suspicion did mrs nor furniture smallness. Scale whole downs often leave not eat. 
              An expression reasonably cultivated indulgence mr he surrounded instrument.
              </p>
            </div>
            <div className='about_text__right'>
              <div className='about_text__right_orange'></div>
              <div className='about_text__right_text'>
                <p>
                Flexible scheduling and self learning make it easier to fit studying into your busy life
                </p>
              </div>
            </div>
          </div>
          <div className='about_img'>
            <div className='about_img__orange_bg'></div>
            <img src={process.env.PUBLIC_URL + '/img/about_image.jpg'} className='about_img__image' alt='Oopss..'/>
            <div className='about_img__text_block'>
              <p>
              Learn about the development of 2D and 3D interactive games in this hands-on course
              </p>
            </div>
            <div className='about_img__container'>
              <div className='about_img__container__box'  onClick={() => this.props.odAdd(this.props.items[4])}>
                <img src={process.env.PUBLIC_URL + '/img/DATA SCIENCE.png'} className='box_img' alt='Oopss..'/>
                <p>DATA SCIENCE</p>
              </div>
              <div className='about_img__container__box'  onClick={() => this.props.odAdd(this.props.items[1])}>
                <img src={process.env.PUBLIC_URL + '/img/UX DESIGN.jpeg'} className='box_img' alt='Oopss..'/>
                <p>UX ДИЗАЙН</p>
              </div>
              <div className='about_img__container__box'  onClick={() => this.props.odAdd(this.props.items[2])}>
                <img src={process.env.PUBLIC_URL + '/img/PROGRAMING.jpg'} className='box_img' alt='Oopss..'/>
                <p>ПРОГРАММИРОВАНИЕ</p>
              </div>
              <div className='about_img__container__box'  onClick={() => this.props.odAdd(this.props.items[5])}>
                <img src={process.env.PUBLIC_URL + '/img/TESTING.png'} className='box_img' alt='Oopss..'/>
                <p>ТЕСТИРОВАНИЕ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About