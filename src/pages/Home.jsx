import React from 'react'
import ProfilePics from '../assets/profile-picture.png'

function Home() {
  return (
    <div className='p-4 flex-col justify-center items-center w-fit h-fit m-auto text-center'>
     <div className=''>
     <img src={ProfilePics} alt=''></img>
     </div>
     <div>
        <p className='text-lg'>Hi!</p>
        <p className='text-xl font-bold'>I'm Adepoju Oluwatobi. I'm a</p>
        <p className='text-4xl font-bold'>Frontend</p>
        <p className='text-5xl font-bold'>Developer</p>
     </div>
    </div>
  )
}

export default Home