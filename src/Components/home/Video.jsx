import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full'>
    <video  className='w-screen h-screen object-cover' autoPlay loop muted src="../../public/video.mp5.mp4"></video>
    </div>
  )
}

export default Video