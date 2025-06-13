import React from 'react'
import image1 from  '../images/image1.jpg'
import image2 from  '../images/image2.jpg'
import image3 from  '../images/image3.avif'
import image4 from  '../images/image4.jpg'


const Content = () => {
  return (
    <>
    <div className='w-full h-full sticky top-0'>
        <img className='w-full h-full' src={image1} alt="" />
    </div>
    <div className='w-full h-full sticky top-0'>
        <img className='w-full h-full' src={image2} alt="" />
    </div>
    <div className='w-full h-full sticky top-0'>
        <img className='w-full h-full' src={image3} alt="" />
    </div>
    <div className='w-full h-full sticky top-0'>
        <img className='w-full h-full' src={image4} alt="" />
    </div>
    </>
  )
}

export default Content
