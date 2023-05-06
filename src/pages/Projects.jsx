import React from 'react';
import NetflixCloneImg from '../assets/netflix-clone-image.png';
import HeritageImg from '../assets/3heritage-img.png';
import BabySittingImg from '../assets/babysiting-img.png';

function Projects() {
  return (
    <div className='container m-auto'>
      <h1 className='heading'>Projects</h1>
      <div className='projects pb-10 md:flex justify-evenly w-[100%] gap-5'>
       <div className=''>
       <img className='rounded-xl w-auto' src={NetflixCloneImg} alt="" />
       </div>
      <div className=''>
      <div className=''>
       <p className='sub-heading'>Netflix Clone</p>
        <p className='description'>A collaborated project to polish my skill in fetching API and using the css framework ”Tailwind” as a main styling tool. I developed the landing page while the signUp page was developed by <a href=''>Boluwatife Awoyemi</a> This project took 2 days to complete and i am still working on it to make it better.</p>
       </div>
        <div>
        <p className='sup-heading'>Technologies</p>
        <ul className='description'>
          <li>React Js</li>
          <li>Tailwind CSS</li>
          <li>Typescript</li>
        </ul>
        </div>
        <div className='mt-4'>
      <a href='https://github.com/Hue-Ray/netflix-project'>
      <button className='btn bg-black p-2 px-4 mr-4 rounded-lg text-white font-light text-xs md:text-sm lg:text-lg hover:bg-white hover:border box-border border-black hover:text-black'>View Code</button>
      </a>
       <a href='https://netflix-project-dusky.vercel.app/'>
       <button className='btn border box-border border-black p-2 px-4 rounded-lg text-black font-light text-xs md:text-sm lg:text-lg hover:bg-black hover:text-white transition-all ease-in-out'>View Demo</button> 
       </a>
       </div>
      </div>
      </div>

      <div className='projects pb-10 md:flex justify-evenly w-[100%] gap-5'>
       <div className=''>
       <img className='rounded-xl w-auto' src={HeritageImg} alt="" />
       </div>
      <div className=''>
      <div className=''>
       <p className='sub-heading'>3Heritage</p>
        <p className='description'>
          A website I developed for 3heritage, a hotel booking and reservation company. This project took almost a week to complete.
        </p>
       </div>
        <div>
        <p className='sup-heading'>Technologies</p>
        <ul className='description'>
          <li>React Js</li>
          <li>Tailwind CSS</li>
          <li>Typescript</li>
        </ul>
        </div>
        <div className='mt-4'>
      <a href='#'>
      <button className='btn bg-black p-2 px-4 mr-4 rounded-lg text-white font-light text-xs md:text-sm lg:text-lg hover:bg-white hover:border box-border border-black hover:text-black'>View Code</button>
      </a>
       <a href='#'>
       <button className='btn border box-border border-black p-2 px-4 rounded-lg text-black font-light text-xs md:text-sm lg:text-lg hover:bg-black hover:text-white transition-all ease-in-out'>View Demo</button> 
       </a>
       </div>
      </div>
      </div>

      <div className='projects pb-10 md:flex justify-evenly w-[100%] gap-5'>
       <div className=''>
       <img className='rounded-xl w-auto' src={BabySittingImg} alt="" />
       </div>
      <div className=''>
      <div className=''>
       <p className='sub-heading'>Mother Daughter New Born Services</p>
        <p className='description'>
          This website was developed for a small business of a mother and daughter who was into baby sitting. This website took about a week to complete.
        </p>
       </div>
        <div>
        <p className='sup-heading'>Technologies</p>
        <ul className='description'>
          <li>React Js</li>
          <li>Tailwind CSS</li>
          <li>Typescript</li>
        </ul>
        </div>
        <div className='mt-4'>
      <a href='#'>
      <button className='btn bg-black p-2 px-4 mr-4 rounded-lg text-white font-light text-xs md:text-sm lg:text-lg hover:bg-white hover:border box-border border-black hover:text-black'>View Code</button>
      </a>
       <a href='https://motherdaughternewbornservices.com/'>
       <button className='btn border box-border border-black p-2 px-4 rounded-lg text-black font-light text-xs md:text-sm lg:text-lg hover:bg-black hover:text-white transition-all ease-in-out'>View Demo</button> 
       </a>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Projects