import React from 'react'
import Slider from 'react-slick'


function HeroSection() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  }
  const images = [
    {
      img: '/img/slider-1.jpg',
      alt: 'Slider 1',
      text: 'Do You Want To Hire Right Talent',
      color: 'text-white'
    },
    {
      img: '/img/slider-2.jpg',
      alt: 'Slider 2',
      text: 'Want To Have A Hassle Free Recruitment Service',
      color: 'text-orange-400'
    },
    {
      img: '/img/slider-3.png',
      alt: 'Slider 3',
      text: 'Experience World-Class Hiring Solutions',
      color: 'text-gray-500'
    },
    {
      img: '/img/slider-4.png',
      alt: 'Slider 4',
      text: 'Then This Website Is For You',
      color: 'text-orange-600'
    }
  ]
  return (
    <div className='' >
      <Slider {...settings}>
          {images.map(image =>(
            <div className='relative bg-slate-600'>
              <img src={image.img} className='object-contain mx-auto w-full bg-slate-600 opacity-80' alt={image.alt}/>
              <p className={`text-5xl font-extrabold absolute top-48 left-48 w-1/5 mx-auto ${image.color}`}>{image.text}</p>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default HeroSection
