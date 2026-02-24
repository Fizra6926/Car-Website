import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 text-white'>
      <Link className='text-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-4 leading-[7vw] border-white rounded-full pt-4 px-8 uppercase' to='projects'> Projects</Link>
      <Link  className='text-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-4 leading-[7vw] border-white rounded-full pt-4 px-8 uppercase ' to='/agence'> Agance</Link>
    </div>
  )
}

export default HomeBottomText