
import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className=" lg:mt-0  pt-5 text-center font-font2 text-white">
      <div className="justify-center flex items-center uppercase lg:leading-[7vw]  mt-20 leading-[10vw] lg:text-[9.5vw]  gap-1.5 text-[8vw] ">
        Easy to drive Smooth ride
      </div>
      <div className=" justify-center flex items-center uppercase lg:leading-[7vw]  mt-20 leading-[10vw] lg:text-[9.5vw] gap-1.5 text-[8vw]">
        Modern
        <div> <button className=" mt-8  w-24 h-15 rounded-xl overflow-hidden"> <Video /></button></div>
         design 
      </div>
      <div className="justify-center flex items-center uppercase lg:leading-[7vw] gap-1.5 mt-20 leading-[10vw] lg:text-[9.5vw] text-[8vw]">
        Speed Style
      </div>
    </div>
  )
}

export default HomeHeroText
