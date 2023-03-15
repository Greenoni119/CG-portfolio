import React from 'react'
import Typewriter from 'typewriter-effect';
import {AiFillLinkedin,AiOutlineMail,AiFillGithub} from "react-icons/ai"
import {BsEye} from 'react-icons/bs';
import Image from 'next/image';
  import biker from '../public/subject.png';
  import Fade from 'react-reveal/Fade';
  import Flip from 'react-reveal/Flip';
const HomePage = () => {
  return (
    <div>
<div name='Home' className=' h-screen items-center flex flex-col xl:flex-row :flex-wrap justify-center w-full bg-stone-700 pt-10'>


        <div className=''>
          <div className='pb-1 max-w-screen-2xl mx-auto'>
            <Fade bottom>
            <h2 className='text-4xl text-center py-10  pb-10 text-orange-500  sm:text-6xl dark:text-orange-500'>Charles Greene</h2>
            </Fade>
                  <span className=' text-xl text-center sm:text-3xl text-orange-400'>
            <Typewriter
                  options={{
                  strings: ['Frontend Developer ', 'UI/UX Designer ','Living in the Bay Area '],
                  autoStart: true,
                    loop: true,
                }}
              />
                  </span>
          </div>
          <ul className='justify-center flex gap-3 m-10 text-neutral-400 text-sm lg:grid grid-cols-2 '>
              <li>  
                <Flip top delay={700}> 
                <div className='border-4 rounded-2xl border-orange-500 text-center h-25 justify-center p-2 hover:text-orange-400 hover:scale-105 duration-500'>
                  <a href="mailto:charles.j.greene9@gmail.com"><AiOutlineMail className='mx-auto text-xl lg:text-5xl'/>
                  <h1 className='py-3'> Contact  </h1></a>
                </div>
                </Flip>
                
                </li>
              <li>  
                <Flip top delay={800}> 
                <div className='border-4 rounded-2xl border-orange-500 text-center h-25 justify-center p-2 hover:text-purple-500 hover:scale-105 duration-500'>
                 <a href="../resume.pdf" target="_blank" rel="noreferrer"> <BsEye className='mx-auto text-xl lg:text-5xl'/>
                <h1 className='py-3'> Resume </h1></a>
                </div>
                </Flip>
                
                </li>
              <li>  
                <Flip top delay={900}> 
                <div className='border-4 rounded-2xl border-orange-500 text-center h-25 justify-center p-2 hover:text-blue-500 hover:scale-105 duration-500'>
                  <a href="https://www.linkedin.com/in/charles-greene-ba9a7a225/" target="_blank" rel="noreferrer"><AiFillLinkedin className='mx-auto text-xl lg:text-5xl'/>
                <h1 className='py-3'> Linkedin</h1></a> 
                </div>
                </Flip>
                
                </li>
              <li>  
                <Flip top delay={1000}> 
                 <div className='border-4 rounded-2xl border-orange-500 text-center h-25 justify-center p-2 hover:text-green-500 hover:scale-105 duration-500'>
                 <a href="https://github.com/Greenoni119?tab=repositories" target="_blank" rel="noreferrer"> <AiFillGithub className='mx-auto text-xl lg:text-5xl'/> 
                <h1 className='py-3'> GitHub </h1> </a>
                </div>
                </Flip>

               
                </li>
            </ul>
          </div>
    
    

    <div className='sm:m-10 md:m-10 lg:m-10'> 
          <Flip left >
        <div className=' relative rounded-3xl bg-gradient-to-t from-orange-500 max-w-xs mx-auto md:max-w-md'> 
          <Image src={biker} alt="an image of me looking very legendary" className="mx-auto rounded-3xl pt-5"/>
        </div>
        </Flip>
    </div>


    </div> 


    </div>
  )
}

export default HomePage

