import React, { Component } from 'react'
import Slider from 'react-slick'
import '../assets/css/carousel.css'
import CaitlinMayConsulting from '../components/my_work/CaitlinMayConsulting'
import CakedInButter from '../components/my_work/CakedInButter'
import ShopNShare from '../components/my_work/ShopNShare'
import TMC from '../components/my_work/TexasMathCentral'
import OutenBabyTracker from '../components/my_work/OutenBabyTracker'
import WikiSpot from '../components/my_work/WikiSpot'
import Emaily from '../components/my_work/Emaily'
import FamChat from '../components/my_work/FamChat'
import Connect from '../components/my_work/Connect'
import Budget from '../components/my_work/Budget'
import ClassicStream from '../components/my_work/ClassicStream'
import ChuckNorris from '../components/my_work/ChuckNorris'
import MariMaraist from '../components/my_work/MariMaraist'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      appendDots: (dots) => (
        <div
          style={{
            borderRadius: '10px',
            padding: '10px',
          }}
        >
          <ul style={{ margin: '0px' }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
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
          <MariMaraist/>
          <TMC />
          <ChuckNorris />
          <CaitlinMayConsulting />
          {/* <CakedInButter /> */}
          <ShopNShare />
          <OutenBabyTracker />
          <WikiSpot />
          {/* <Emaily /> */}
          <FamChat />
          <Connect />
          {/* <Budget /> */}
          <ClassicStream />
        </Slider>
      </div>
    )
  }
}
