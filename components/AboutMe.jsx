import React from 'react'
import Fade from 'react-reveal/Fade';
const AboutMe = () => {
  
  return (
    <div >
<div name='About Me' className=' h-screen items-center pt-3 w-full pb-80 bg-stone-700 dark:bg-violet-900'>
          <div className='max-w-screen-2xl p-4 mx-auto flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>

            <Fade bottom delay={500}>
            <div>
           <h2 className='text-4xl text-neutral-500 font-bold inline border-b-4 border-orange-500 sm:text-5xl dark:text-rose-800 dark:border-cyan-500'>About Me</h2> 
           </div>
           </Fade>
                    
                </div>
                
                <Fade left delay={300} >
                   <p className=' text-sm leading-2 sm:text-xl lg:leading-10 text-neutral-300 dark:text-white '>I have served in the Army for over a decade, thrived and reformed.   
                      I found a passion for web development in recent years and have been working on a career change. 
                      Through self study and attending College of San Mateo, Ive been able to apply my knowledge to assist local businesses in the Bay Area. 
                      My portfolio displays websites Ive created for those businesses. 
                      I specialize in frontend development though I have backend experience aswell. 
                       I continue to be an eager programmer that is always ready to rise up to the next innovative challenge.
                      
                      </p>  
                      </Fade> 
               
              
                                       
          </div>
</div>
    </div>
  )
}

export default AboutMe