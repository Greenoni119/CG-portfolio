import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Head from 'next/head';
import {Link} from "react-scroll";
import FadeIn from 'react-fade-in';
import { useState } from "react";
import {GiMoonOrbit} from 'react-icons/gi';
  
const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [nav, setNav] = useState(false);
const links = [
  {
    id: 1,
    link:"Home"
  },
  {
    id: 2,
    link:"About Me"
  },
  {
    id: 3,
    link:"Skills"
  },
  {
    id: 4,
    link:"Projects"
  },
];
return (
    
 <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Charles Greene portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <FadeIn>
       <div className=' px-4 flex justify-between items-center w-full h-20 fixed bg-stone-700 opacity-90 z-10 dark:bg-violet-900'>
            <div className='opacity-0'>
            <GiMoonOrbit onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-5xl text-neutral-400 dark:text-rose-800"/>
            </div>
            <ul className='gap-10 hidden lg:flex'>
                {links.map(({id,link}) => (
                <li key={id} className='text-2xl cursor-pointer text-neutral-300 hover:scale-110 duration-200 dark:text-cyan-500 hover:text-neutral-500 dark:hover:text-white'>
                 <Link to={link} smooth duration={500}>{link}</Link>
                </li>

                ))}
            </ul>
              <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-neutral-400 lg:hidden hover:scale-110 duration-200 hover:text-neutral-500 dark:text-cyan-500 dark:hover:text-white'>

                { nav ? <FaTimes size={30} /> : <FaBars size={30} /> }

              </div>

            { nav && (
                <ul className='gap-20 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-stone-600  dark:bg-purple-900'>
                    {links.map(({id,link}) => (
                <li key={id} className='text-5xl cursor-pointer text-neutral-300 hover:scale-110 duration-200 hover:text-neutral-500 dark:text-cyan-500 dark:hover:text-white '>
                 <Link onClick= {()=>setNav(!nav)}to={link}  smooth duration={500} >{link}</Link>
                </li>

                ))}
                </ul>
                      )}         
       </div>
       </FadeIn>

    </div>
  )
}

export default NavBar