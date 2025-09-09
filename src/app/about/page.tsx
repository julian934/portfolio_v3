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
import JB_Professional_Pic from '@/app/lib/utils/images/Julian_Borner_Professional_Profile_Pic.jpg'
import HTML from '@/app/lib/utils/images/icons/icons8-html-50.png'
import CSS from '@/app/lib/utils/images/icons/icons8-css-50.png'
import JavaScript from '@/app/lib/utils/images/icons/icons8-javascript-50.png'
import ReactJS from '@/app/lib/utils/images/icons/icons8-react-js-48.png'
import TypeScript from '@/app/lib/utils/images/icons/icons8-typescript-48.png'
import NextJS from '@/app/lib/utils/images/icons/next v2.webp'
import NodeJS from '@/app/lib/utils/images/icons/icons8-nodejs-48.png'
import Solidity from '@/app/lib/utils/images/icons/icons8-solidity-50.png'
import UH_Logo from '@/app/lib/utils/images/icons/University_of_Houston_seal.svg.png'
import JS_Cert from '@/app/lib/utils/images/icons/jse_40_01.png'

type Props = {}

const About = (props: Props) => {
    const ctx=useContext(StoreStateContext);
  return (
    <div>
      <div className='flex justify-between md:self-center px-8' >
            <div className='flex ' >
                <Image className='md:h-28 md:w-36' src={Julians_Logo} alt='Logo' />
            </div>
            <div className='flex justify-around self-center ' >
              {/*<button className='text-white' >dark/light mode</button>*/}
              
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
        <div className='flex flex-col justify-self-center self-center w-3/5  max-sm:w-5/6  space-y-4' >
           <div className='' >
              <h1 className='p-4 font-semibold text-2xl ' >About Me </h1>
           </div>
           <div className='' >
               <hr className='border-white border-2  w-full' />
           </div>
           <div className='flex max-sm:flex-col md:h-full' >
            <div className='p-4 space-y-4  md:max-w-1/2 md:max-h-1/2' >
               <Image className='md:h-96 md:w-82 rounded-md ' quality={100} height={1000} width={1000}  src={JB_Professional_Pic} alt='Professional Image' />
               <div className='' >
                {/* <h1 className='text-xl px-2 ' >
                  Description
                </h1>*/}
                
                <p className='px-4 max-sm:p-0' >
                    I am a full-stack web engineer with expertise in modern JavaScript frameworks, cloud-based systems, and
                     user-centric design. Experienced in building scalable applications and delivering technical solutions
                     that meet both business and user needs.
                </p>
             </div>
            </div>
             <div className='space-y-2' >
                <div className='w-full px-4 space-y-4 ' >
              <h1 className='text-3xl' >Credentials</h1>
              <div className='px-4' >
                <Image className='w-20 h-20' src={UH_Logo} alt='University of Houston' />
                <h1 className='font-bold text-lg ' >University of Houston</h1>
                 <p>Bachelor of Science (B.S.) – Digital Media</p>
                 <p>Aug 2019 — Aug 2023</p>
              </div>
              <div className='px-4' >
                <Image className='w-20 h-20 rounded-md'  src={JS_Cert} alt='javascript certification' />
                <h1 className='font-bold text-lg ' >JS Institute</h1>
                  <p className='' >JSE-40-01 Certified – JavaScript Programmer Certification.</p>

              </div>

             </div>
             <div className='w-full max-sm:h-48  px-4 space-y-4 ' >
                 <h1 className='text-2xl' >Coding languages</h1>
                 <div className='flex max-sm:flex-wrap max-sm:space-x-2 max-sm:space-y-2 justify-around' >
                     <Image className='w-12 h-12 bg-white' src={HTML} alt='HTML5' />
                     <Image className='w-12 h-12 bg-white' src={CSS} alt='CSS' />
                     <Image className='w-12 h-12 bg-white' src={JavaScript} alt='JavaScript' />
                     <Image className='w-12 h-12 ' src={NodeJS} alt='Node.js' />
                     <Image className='w-12 h-12 ' src={ReactJS} alt='React.js' />
                     <Image className='w-12 h-12 ' src={NextJS} alt='Next.js' />
                     <Image className='w-12 h-12 ' src={TypeScript} alt='typeScript' />
                      <Image className='w-12 h-12 bg-white rounded-md' src={Solidity} alt='Solidity' />
                 </div>
             </div>
             <motion.div className='w-full px-4 space-y-4 ' >
              <div className='flex  w-full' >
                  <Image className='rotate-45  ' src={triangle} alt='Symbol' />
                <Link className='' href='https://www.linkedin.com/in/julian-borner-709b91b7/details/featured/1757458639853/single-media-viewer/?profileId=ACoAABjp17kBZWBPjm1poVjlER_t9U19uALJwbQ' >Resume</Link>
              </div>
              
             </motion.div>
             </div>
            
 
           </div>

        </div>
        <div className='flex justify-self-center w-1/2' >
            <Footer/>
        </div>
      
      </div>
  )
}

export default About