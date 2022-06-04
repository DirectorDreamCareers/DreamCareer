import React from 'react'
import Slider from 'react-slick'
import images from '../constants/HeroCarousal.json'
import settings from '../constants/HeroCarousalSettings.json'

function HeroSection() {
  return (
    <div className='relative' >
      <Slider {...settings}>
          {images.map(image => (
            <div className='relative bg-slate-600'>
              <img src={image.img} className='object-contain mx-auto w-full bg-slate-600 opacity-80' alt={image.alt} />
              <p className={`sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold absolute sm:top-12 sm:left-12 md:top-24 md:left-24 lg:top-48 lg:left-48 w-1/5 mx-auto ${image.color}`}>{image.text}</p>
            </div>
          ))
          }
        </Slider>
    </div>
  )
}

export default HeroSection
