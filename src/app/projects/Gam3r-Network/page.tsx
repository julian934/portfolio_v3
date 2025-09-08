'use client'
import React from 'react'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Image from 'next/image'
import Link from 'next/link'
import Julians_Logo from '@/app/lib/utils/images/Julian_Borner_Logo.png'
import {motion} from "motion/react"
import triangle from '@/app/lib/utils/images/triangle.png'
import { useState,useEffect,useContext } from 'react'
import { StoreStateContext } from '../../lib/context/storeContext'
import Thumbnail from '@/app/lib/utils/images/Gam3rs/revised/Gam3rs_Desk_Home.png'
import Home_Mobile from '@/app/lib/utils/images/Gam3rs/revised/Gam3rs_mobile_home.png'

import Forums from '@/app/lib/utils/images/Gam3rs/revised/Gam3rs_Desk_Forums.png'
import Mobile_Forums from '@/app/lib/utils/images/Gam3rs/revised/gam3rs_mobile_forums.png'
import Videos from '@/app/lib/utils/images/Gam3rs/Gam3rs Videos.png'
import Games from '@/app/lib/utils/images/Gam3rs/Gam3rs_Games.png'
import Mobile_Games from '@/app/lib/utils/images/Gam3rs/revised/Gam3rs_mobile_home.png'
//import Games_Mobile from '@/app/lib/utils/images/Gam3rs/'
import Upload from '@/app/lib/utils/images/Gam3rs/Gam3rs_Upload.png'


type Props = {}

const Gam3r_Network = (props: Props) => {
   const ctx=useContext(StoreStateContext);
  return (
    <div>
      
      
      <div className='flex justify-between md:self-center px-8' >
            <div className='flex ' >
                <Image className='md:h-28 md:w-36' src={Julians_Logo} alt='Logo' />
            </div>
            <div className='flex justify-around self-center ' >
              <button className='text-white max-sm:invisible' >dark/light mode</button>
              <div className='max-sm:w-20 max-sm:h-10 max-sm:z-50 max-sm:px-2 ' >
                 <NavBar/>
              </div>
            
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
          <div className='flex flex-col  justify-self-center w-2/3 max-sm:w-5/6' >
            <div className='flex justify-self-center' >
              <Image className='rounded-md 'src={Thumbnail} alt='The Gam3r Network' />

            </div>
            <div className='flex flex-col space-y-8 max-sm:w-full ' >
              <h1 className='p-4 text-3xl '>The Gam3r Network</h1>
              <hr className='w-full px-4' />
              <div className='flex max-sm:flex-col  ' >
                  <div className='flex flex-col md:w-5/6 md:p-4 ' >
                    <div className='flex  md:space-x-4  '>
                      <h3>Category</h3>
                      <h3 className='' >Web Development</h3>
                    </div>
                    <div className='flex justify-around md:space-x-12 ' >
                      <h3>Year</h3>
                      <h3 className='' >2025</h3>
                    </div>
                    
                    <div className='flex justify-around  md:space-x-6 ' >
                      <h3>Team</h3>
                      <div className='' >
                         <h3 className='' >
                            Julian Borner
                         </h3>
                      </div>
                   
                    </div>
                    <div className='flex justify-between  ' >
                      <h3>Client</h3>
                      <h3 className='' >The Gam3r Network</h3>
                    </div>


                  </div>
                  <div className='border-2 border-slate-200  rounded-md' >
                <p className='p-4' >Design and Developed the Gam3rs website for the Gam3r Network YouTube Channel. 
                  The Gam3r website is a full-stack web development project created on the Next.js and React frameworks, 
                  featuring user account creation via the Next-Auth Api, video uploads utilizing the MUX video Api, 
                  forum creation and an upcoming built-in webshop utilizing the Stripe Api.
                   Formulated a project plan, complete with a timeline and budget, 
                   to ensure the project's completion within the designated time frame.

                </p>
                 <Link className='flex justify-self-center p-4 ' href='https://www.gam3rnetwork.com' >
                 <Image className='rotate-45' src={triangle} alt='arrow' />
                 <h3 className='' >View The Website</h3>
                 </Link>

              </div>
              </div>
             

            </div>
            <div>

            </div>

          </div>
            <div className='flex flex-col  justify-self-center w-2/3 space-y-4 ' >
          <h1 className='flex justify-center p-4 text-2xl' >Home Page</h1>
          <div className='flex flex-col justify-center space-y-4 ' >
            <Image className='rounded-md ' src={Thumbnail} alt='Home_Desk' />
            <Image className='rounded-md  md:h-96 md:w-64 ' src={Home_Mobile} alt='Home_Mobile' />
          </div>

          </div>
          <div className='flex flex-col  justify-self-center w-2/3 space-y-4 ' >
          <h1 className='flex justify-center p-4 text-2xl' >Forums Page</h1>
          <div className='flex flex-col justify-center space-y-4 ' >
            <Image className='rounded-md ' src={Forums} alt='Forums_Desk' />
            <Image className='rounded-md  md:h-96 md:w-64 ' src={Mobile_Forums} alt='Forums_Mobile' />
          </div>

          </div>
           <div className='flex flex-col  justify-self-center w-2/3 space-y-4 ' >
          <h1 className='flex justify-center p-4 text-2xl' >Games Page</h1>
          <div className='flex flex-col justify-center space-y-4 ' >
            <Image className='rounded-md ' src={Games} alt='Games_Desk' />
            <Image className='rounded-md  md:h-96 md:w-64 ' src={Mobile_Games} alt='Games_Mobile' />
          </div>

          </div>


          <motion.div className='md:relative flex justify-center px-4 top-96  ' >
            <Footer/>

          </motion.div>
      </div>
  )
}

export default Gam3r_Network