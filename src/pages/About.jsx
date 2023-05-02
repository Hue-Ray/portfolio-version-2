import React from 'react'
import TechStack from '../components/TechStack'

function About() {
  return (
    <div>
      <div className='container'>
        <h1 className='text-2xl font-extrabold md:text-3xl lg:text-4xl'>About Me</h1>
        <div className='container shadow-xl rounded-lg'>
          <p className='text-xs md:text-sm lg:text-lg'>
          The passion for developing website and
           user friendly interface led me to the 
          study of front end development in which 
          i am  certified and proficient in HTML, 
          CSS, JavaScript, React Js, Next Js, Vite, 
          Tailwind Css, Sass and Boostrap using 
          these skills to create highly responsive 
          and user friendly websites. I have
           under gone a 4 years course in the field
           of computer science and also took some 
          online courses in which FreeCodeCamp 
          is one of them. Also, I am an enthusiastic 
          teacher who loves to impact knowledge. 
          With a teaching experience of 8 years 
          plus, I can say i have impacted more than
           i could have ever wished for. 
          </p>
        </div>
      </div>
      <TechStack />
    </div>
  )
}

export default About