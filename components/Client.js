import React from 'react'
import Slider from 'react-slick'
import settings from '../constants/ClientCarousalSettings.json'

function Client() {
    const images = [
      {
        img: "./img/patner_1.png",
        alt: "Patner 1"
      },
      {
        img: "./img/patner_2.png",
        alt: "Patner 2"
      },
      {
        img: "./img/patner_3.png",
        alt: "Patner 3"
      },
      {
        img: "./img/patner_4.png",
        alt: "Patner 4"
      },
      {
        img: "./img/patner_5.png",
        alt: "Patner 5"
      },
      {
        img: "./img/patner_6.png",
        alt: "Patner 6"
      }
    ]
  return (
    <div className='py-7' style={{backgroundColor: "#e3f6f9"}}>
      <div className='mx-auto w-max'>
      <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold' style={{color: "#0a325a"}}>Our <span className='text-orange-400'>Clients</span></h1>
      </div>
      <div className='my-10'>
          <div className='w-3/4 mx-auto'>
            <Slider {...settings}>
              {images.map(image =>(
                <div className='mx-auto'>
                  <img className='w-28' src={image.img} alt={image.alt} />
                </div>
              ))}
            </Slider>
          </div>
      </div>
    </div>
  )
}

export default Client
