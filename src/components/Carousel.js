import React, { Component } from 'react'
import Slider from 'react-slick'
import '../assets/css/carousel.css'
import Budget from '../components/my_work/Budget'
import ClassicStream from '../components/my_work/ClassicStream'
import TMC from '../components/my_work/TexasMathCentral'

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
          <Budget />
          <ClassicStream />
          <TMC />
          <Budget />
          <Budget />
        </Slider>
      </div>
    )
  }
}
