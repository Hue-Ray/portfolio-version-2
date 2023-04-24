import React from 'react'
import ProfilePics from '../assets/profile-picture.png'
import Instagram from '../assets/insta.png'
import Linkedin from '../assets/linkedin.png'
import Telegram from '../assets/telegram.png'
import Github from '../assets/github.png'

function Home() {
  return (
    <div className='home p-4 flex-col justify-center items-center w-fit h-[100vh] m-auto text-center'>
     <div className='h-[200px] w-[200px] m-auto'>
     <img src={ProfilePics} alt=''></img>
     </div>

     <div className=''>
     <div>
        <p className='text-lg text-slate-600 md:text-xl'>Hi!</p>
        <p className='text-xl text-slate-400 md:text2xl'>I'm Adepoju Oluwatobi. I'm a</p>
        <p className='text-3xl font-bold text-slate-500 md:text4xl'>Frontend</p>
        <p className='text-4xl font-bold text-slate-600 md:text-5xl'>Developer</p>
     </div>

     <div>
        <div className='flex justify-evenly items-center mt-4 w-[280px] h-[65px] border box-border border-slate-400 rounded-[20px] lg:m-auto lg:mt-4 lg:mb-2'>
          <div>
            <img src={Instagram} alt=''></img>
          </div>
          <div>
            <img src={Linkedin} alt=''></img>
          </div>
          <div>
            <img src={Telegram} alt=''></img>
          </div>
          <div>
            <img src={Github} alt=''></img>
          </div>
        </div>
     </div>
     <button className='bg-black text-white p-2 rounded-lg mt-2 px-4'>Download Resume</button>
     </div>
    </div>
  )
}

export default Home