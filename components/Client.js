import React from 'react'
import Slider from 'react-slick'

function Client() {
    const settings = {
        infinite: true,
        
    }
  return (
    <div className='py-7' style={{backgroundColor: "#e3f6f9"}}>
      <div className='mx-auto w-max'>
      <h1 className='text-5xl font-semibold' style={{color: "#0a325a"}}>Our <span className='text-orange-400'>Clients</span></h1>
      </div>
      <div className='my-10'>
          <div className='w-3/4'>

          </div>
      </div>
    </div>
  )
}

export default Client
