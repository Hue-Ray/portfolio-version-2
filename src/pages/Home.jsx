import React from 'react'
import ProfilePics from '../assets/profile-picture.png'
import Instagram from '../assets/insta.png'
import Linkedin from '../assets/linkedin.png'
import Telegram from '../assets/telegram.png'
import Github from '../assets/github.png';

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

     <div>
        <div className='flex justify-evenly items-center mt-4 w-[280px] h-[65px] border box-border border-slate-400 rounded-[20px] lg:m-auto lg:mt-4 lg:mb-2'>
          <div>
            <img src={Instagram} alt=''></img>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/oluwatobi-adepoju-4a242898/'>
            <img src={Linkedin} alt=''></img>
            </a>
          </div>
          <div>
           <a href=' https://t.me/Tobi_Forex'>
           <img src={Telegram} alt=''></img>
           </a>
          </div>
          <div>
           <a href='https://github.com/Hue-Ray'>
           <img src={Github} alt=''></img>
           </a>
          </div>
        </div>
     </div>
     <button className='bg-black text-white p-2 rounded-lg mt-2 px-4'>Download Resume</button>
     </div>
    </div>
  )
}

export default Home