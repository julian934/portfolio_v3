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

const About = (props: Props) => {
    const ctx=useContext(StoreStateContext);
  return (
    <div>
      <div className='flex justify-between md:self-center px-8' >
            <div className='flex ' >
                <Image className='md:h-28 md:w-36' src={Julians_Logo} alt='Logo' />
            </div>
            <div className='flex justify-around self-center border-2 border-white' >
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
        <div className='flex flex-col justify-self-center self-center w-1/2 ' >
           <div className='' >
              <h1 className='' >About</h1>
           </div>
           <div className='' >
               <hr className='border-white border-2  w-1/2' />
           </div>
           <div className='flex' >
             <div className='' >
                <h1>
                  Description
                </h1>
             </div>
             <div className='' >
              <h1>Credentials</h1>

             </div>
             <div>
                 <h1 className='' >Coding languages</h1>
             </div>
             <motion.div className='' >
              <Image className='rotate-45' src={triangle} alt='Symbol' />
                <Link className='' href='' >Resume</Link>
             </motion.div>
 
           </div>

        </div>
        <div className='flex justify-self-center w-1/2' >
            <Footer/>
        </div>
      
      </div>
  )
}

export default About