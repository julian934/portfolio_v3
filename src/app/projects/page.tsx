'use client'
import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Image from 'next/image'
import Link from 'next/link'
import Julians_Logo from '@/app/lib/utils/images/Julian_Borner_Logo.png'
import {motion} from "motion/react"
import triangle from '@/app/lib/utils/images/triangle.png'
import { useState,useContext } from 'react'
import { StoreStateContext } from '../lib/context/storeContext'
import ETQ from '@/app/lib/utils/images/ETQ_Amsterdam_Clone.jpg'
import Gam3rs from '@/app/lib/utils/images/Gam3rs/Gam3rs_thumbnail_pic.png'

//type Props = {}

const Projects = () => {
  const ctx=useContext(StoreStateContext);
  const [etq_state,setETQState]=useState<boolean | null | undefined>(null);
  const [gam3r_state, setGam3rState]=useState<boolean | null>(null);
  
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
          <motion.div className=' max-sm:flex max-sm:relative max-sm:h-[50vh] md:h-[75vh] md:w-[50vw] md:top-72 md:-left-12 md:absolute rounded-3xl' >
            {gam3r_state==true? <Image className='w-full md:w-[60vw] h-full rounded-3xl ' width={5000} height={2000} quality={100}  src={Gam3rs} alt='Gam3r Network Preview' />:null}
            {etq_state==true? <Image className='w-full h-full rounded-3xl ' width={3000} height={2000} quality={100} src={ETQ} alt='ETQ_Clone Preview' />:null}
            

          </motion.div>
          <motion.div className=' z-[9999] flex flex-col space-y-4 justify-self-center relative md:left-24 md:top-36 md:max-w-[40vw]  max-sm:max-w-[50vw] ' >
            {/*Projects */}
              <h1 className='text-4xl' > Projects </h1>
              <hr className='w-48' />
              <div className='flex flex-col space-y-4 ' >
                 <Link href='/projects/ETQ-Clone' >
                <motion.div onHoverStart={()=>setETQState(true)} onHoverEnd={()=>setETQState(false)}  >
                 
                   <h1 className='hover:text-yellow-500' >ETQ Clone</h1>
                </motion.div>
                </Link>
                   <hr className='w-48' />
              <Link href='/projects/Gam3r-Network' >
                <motion.div onHoverStart={()=>setGam3rState(true)} onHoverEnd={()=>setGam3rState(false)}  >
                  
                   <h1 className='hover:text-yellow-500 ' >Gam3r Network</h1>
                  
                </motion.div>
                </Link>
               
               
              </div>

          </motion.div>
          <motion.div>
            {/* Project Preview location if hovering */}
          </motion.div>
          <motion.div className='md:relative flex justify-end px-4 top-96  ' >
            <Footer/>

          </motion.div>

      </div>
  )
}

export default Projects