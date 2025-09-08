'use client'
import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Image from 'next/image'
import Link from 'next/link'
import Julians_Logo from '@/app/lib/utils/images/Julian_Borner_Logo.png'
import {motion} from "motion/react"
import triangle from '@/app/lib/utils/images/triangle.png'
import { useState,useEffect,useContext } from 'react'
import { StoreStateContext } from '../lib/context/storeContext'
type Props = {}

const Home = (props: Props) => {
    const [active,setActive]=useState<boolean>(false);
    const [projActive,setProjActive]=useState<boolean>(false);
    const [aboutActive, setAboutActive]=useState<boolean>(false);
    

    const ctx=useContext(StoreStateContext);
  return (
    <div className='' >
        
        <div className='flex justify-between md:self-center px-8 z-[9999] ' >
            <div className='flex ' >
              <Link href='/home' >
                <Image className='md:h-36 md:w-46' src={Julians_Logo} alt='Logo' />
                </Link>
            </div>
            <div className='flex justify-around self-center z-[9999]' >
              <button className='text-white' >dark/light mode</button>
            <NavBar/>
            </div>
            
        </div>
        {ctx.navStatus!=undefined && ctx.navStatus!=null && ctx.navStatus==true && <motion.div className=' absolute bg-black z-[9999] w-screen h-screen ' >
                 
                 <div className='flex flex-col justify-self-center  justify-around self-center w-1/2 h-3/4 ' >
                   <motion.div className='flex  self-center w-1/4' >
                   <Link className='flex  ' href='/home' ><motion.div className='flex justify-self-around w-full'><Image className='rotate-45 ' src={triangle} alt='selector' /><motion.div  className='' whileHover='active' variants={{
              active:{
                y:-10
              },
              inactive:{
                x:0

              }
             }} ><h3 className='text-4xl hover:text-yellow-600 ' >Home</h3></motion.div></motion.div></Link>

                   </motion.div>
                   <motion.div className='flex  self-center  w-1/4' >
                   <Link className='flex  ' href='/about' ><motion.div className='flex justify-self-around w-full'><Image className='rotate-45 ' src={triangle} alt='selector' /><motion.div  className='' whileHover='active' variants={{
              active:{
                y:-10
              },
              inactive:{
                x:0

              }
             }} ><h3 className='text-4xl hover:text-yellow-600 ' >About</h3></motion.div></motion.div></Link>

                   </motion.div>
                   <motion.div className='flex  self-center w-1/4' >
                   <Link className='flex  ' href='/projects' ><motion.div className='flex justify-self-around w-full'><Image className='rotate-45 ' src={triangle} alt='selector' /><motion.div  className='' whileHover='active' variants={{
              active:{
                y:-10
              },
              inactive:{
                x:0

              }
             }} ><h3 className='text-4xl hover:text-yellow-600 ' >Projects</h3></motion.div></motion.div></Link>

                   </motion.div>
                   <motion.div className='flex  self-center w-1/4' >
                   <Link className='flex  ' href='/contact' ><motion.div className='flex justify-self-around w-full'><Image className='rotate-45 ' src={triangle} alt='selector' /><motion.div  className='' whileHover='active' variants={{
              active:{
                y:-10
              },
              inactive:{
                x:0

              }
             }} ><h3 className='text-4xl hover:text-yellow-600 ' >Contact </h3></motion.div></motion.div></Link>

                   </motion.div>

                 </div>

          </motion.div>}
        <motion.div className=' relative  md:w-[60vw] md:h-[60vh] md:top-20  flex flex-col md:justify-self-center  ' >
            <motion.div 
            initial={{opacity:0,scale:0,x:-400, y:-200}} 
            animate={{opacity:1, scale:1, x:0,y:0}}
            transition={{ease:"easeOut", duration:1}}>
              <Image className='md:-ml-10' src={Julians_Logo} alt='Logo' />
              </motion.div>
          <div className='w-3/4 text-center flex flex-col self-center justify-center md:space-y-4 ' >
            <h1 className=' max-sm:text-xl md:text-4xl ' >Hi, My name is <span className='text-yellow-500' >Julian Borner</span></h1>
             <h3 className='text-lg' >I&apos;m a Full-Stack Web Developer &amp; UI/UX Designer</h3>
             <div className='flex md:flex-col w-1/3 md:self-start md:relative md:left-28 ' >
             <motion.div >
                    <Link className='w-1/2' href='/projects' ><motion.div ><Image className='rotate-45 ' src={triangle} alt='selector' /><motion.div  className='' whileHover='active' variants={{
              active:{
                y:-10
              },
              inactive:{
                x:0

              }
             }} ><h3 className='text-xl' >See My Projects</h3></motion.div></motion.div></Link>
                 </motion.div>
                 <motion.div className=' ' >
                    <Link className='w-1/2' href='/about' ><Image className='rotate-45' src={triangle} alt='selector' /><motion.div  className='' whileHover='active' variants={{
              active:{
                y:-10
              },
              inactive:{
                x:0

              }
             }} ><h3 className='text-xl' >About Me</h3></motion.div></Link>
                 </motion.div>
 
             </div>

          </div>
            
        </motion.div>
        <div className=' flex justify-center relative top-60 w-full ' >
            <Footer/>
        </div>

        </div>
  )
}

export default Home