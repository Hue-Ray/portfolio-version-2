import React from 'react'
import { Link } from 'react-router-dom'
import ProfilePics from '../assets/profile-picture.png'
import Socials from '../components/Socials'

function Home() {
  return (
    <div className='home p-4 flex-col justify-center items-center w-fit h-[] m-auto text-center'>
     <div className='h-[200px] w-[200px] m-auto'>
     <img src={ProfilePics} alt=''></img>
     </div>

     <div className=''>
     <div>
        <p className='text-lg  md:text-xl'>Hi!</p>
        <p className='text-xl   md:text2xl'>I'm Adepoju Oluwatobi. I'm a</p>
        <p className='text-3xl font-bold  md:text4xl'>Frontend</p>
        <p className='text-4xl font-bold  md:text-5xl'>Developer</p>
     </div>

    <Socials />

    <Link to = "/resume">
    <button className='bg-black text-white p-2 rounded-lg mt-2 px-4'>Download Resume</button>
    </Link>
     </div>
    </div>
  )
}

export default Home