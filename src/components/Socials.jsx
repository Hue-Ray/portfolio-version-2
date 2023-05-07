import React from 'react'
import Instagram from '../assets/insta.png'
import Linkedin from '../assets/linkedin.png'
import Telegram from '../assets/telegram.png'
import Github from '../assets/github.png';

function Socials() {
  return (
    <div>
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
    </div>
  )
}

export default Socials