import React from 'react';
import ReactLogo from '../assets/react-logo.svg';
import TailwindLogo from '../assets/tailwind.svg';
import ViteLogo from '../assets/vite-logo.svg';
import NextLogo from '../assets/next-logo.svg';
import HtmlLogo from '../assets/html-logo.svg';
import CssLogo from '../assets/css-logo.svg';
import JsLogo from '../assets/js-logo.svg';
import TsLogo from '../assets/ts-logo.svg';
import GitHubLogo from '../assets/github-logo.svg';
import GitLogo from '../assets/git-logo.svg';


function TechStack() {
  return (
    <div className='container'>
      <p className='text-2xl font-bold pb-4'>Tech Stack</p>

    <div className='pb-8'>
            <p className='text-sm font-bold'>Technologies</p>
          <div className='flex justify-evenly shadow-lg p-4 rounded-lg'>
            <img src={ReactLogo} alt=''></img>
            <img src={TailwindLogo} alt=''></img>
            <img src={ViteLogo} alt=''></img>
            <img src={NextLogo} alt=''></img>
          </div>  
    </div>

    <div className='pb-8'>
       <p className='text-sm font-bold'>Languages</p>
        <div className='flex justify-evenly shadow-lg p-4 rounded-lg'>
            <img src={HtmlLogo} alt=''></img>
            <img src={CssLogo} alt=''></img>
            <img src={JsLogo} alt=''></img>
            <img src={TsLogo} alt=''></img>
        </div> 
    </div>

    <div className='pb-8'>
            <p className='text-sm font-bold'>Version Control</p>
          <div className='flex justify-evenly shadow-lg p-4 rounded-lg'>
            <img src={GitHubLogo} alt=''></img>
            <img src={GitLogo} alt=''></img>
          </div>  
    </div>

    
    </div>
  )
}

export default TechStack