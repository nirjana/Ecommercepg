import React from 'react'
import img from "../image/hero.jpg"
import img1 from "../image/hero2.jpg"

import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <img src={img} alt="hero img" className='h-[800px] w-[1400px] pt-[0px]'/> 
    {/* <div className='h-[800px] w-[1400px] pt-[0px]' >
    <Slider {...settings} >
      <div className='h-[20px] w-[20px] pt-[0px] bg-[red]'>
        <h3 className="bg-[red]">1</h3>
      </div>
      <div className='h-[20px] w-[20px] pt-[0px]  bg-[blue]'>
        <h3>2</h3>
      </div>
      <div className='h-[20px] w-[20px] pt-[0px]'>
        <h3>3</h3>
      </div>
      <div className='h-[20px] w-[20px] pt-[0px]'>
        <h3>4</h3>
      </div>
      <div className='h-[20px] w-[20px] pt-[0px]'>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div> */}
    
    </>
    // <><div className="h-[800px] w-[1100px]">
    //       <Carousel>
    //     <div>
    //       <img src={img} alt=""/>
    //     </div>
    //   </Carousel>
    //   </div>
    // </>
  )
}

export default Hero