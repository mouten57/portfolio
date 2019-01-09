import React, { Component } from 'react'
import Slider from 'react-slick'
import '../assets/css/carousel.css'
import pic1 from '../images/pic01.jpg'
import pic2 from '../images/pic01.jpg'
import pic3 from '../images/pic03.jpg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      appendDots: dots => (
        <div
          style={{
            borderRadius: '10px',
            padding: '10px',
          }}
        >
          <ul style={{ margin: '0px' }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: '30px',
          }}
        >
          {i + 1}
        </div>
      ),
    }
    return (
      <div className="featured-subheader">
        <h4> latest work</h4>
        <Slider {...settings}>
          <div>
            <h1>1</h1>
            <img src={pic1} alt="pic1" />
            <p>This is a placeholder paragraph.</p>
            <ul>
              Here's a list
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
          <div>
            <h1>2</h1>
            <img src={pic2} alt="pic2" />
            <p>This is a placeholder paragraph.</p>
            <ul>
              Here's a list
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
          <div>
            <h1>3</h1>
            <img src={pic3} alt="pic3" />
            <p>This is a placeholder paragraph.</p>
            <ul>
              Here's a list
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
          <div>
            <h1>4</h1>
          </div>
        </Slider>
      </div>
    )
  }
}
