'use client'

import React from 'react'
import NavBar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Image from 'next/image'
import { useState,useEffect,useContext } from 'react'
import { useRef } from 'react'
import Link from 'next/link'
import Julians_Logo from '@/app/lib/utils/images/Julian_Borner_Logo.png'
import {motion} from "motion/react"
import triangle from '@/app/lib/utils/images/triangle.png'
import { StoreStateContext } from '../lib/context/storeContext'
import emailjs from '@emailjs/browser'


type Props = {}

const Contact = (props: Props) => {
  const form=useRef<any>(null);
  const name=useRef<any>(null);
  const email=useRef<any>(null);
  const message=useRef<any>(null);
  const [activeForm,setActiveForm]=useState<boolean | null | undefined>(null);
   const ctx=useContext(StoreStateContext);

   const submitForm=(e:any)=>{
    e.preventDefault();
    const data={
      name:name,
      email:email,
      message:message
    }
    emailjs.sendForm(`${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`,`${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,form.current, {
      publicKey:`${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`
    }).then(()=>{
      console.log('SUCCESS!');
    },
  (error)=>{
    console.log('FAILED...', error.text);
  })
   }
  return (
    <div className='' >
      <div className='flex justify-between md:self-center px-8' >
        <Link href='/home' >
            <div className='flex ' >
                <Image className='md:h-28 md:w-36' src={Julians_Logo} alt='Logo' />
            </div>
            </Link>
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
     
      <div className=' flex flex-col max-sm:h-full border-2 border-white self-center  flex-col w-full' >
        <div className=' flex flex-col  justify-between self-center w-1/2 max-sm:w-5/6 space-y-4 ' >
        <h1 className=' text-4xl ' > Contact </h1>
        <hr className='border-2 border-white' />
          <div className='flex max-sm:justify-around  w-full h-full flex-row justify-around' >

            <motion.div  className='' whileHover='active' variants={{
              active:{
                y:-10
              },
              inactive:{
                x:0

              }
             }} ><a href="mailto:jborner111@gmail.com" className=' hover:text-yellow-600  text-xl self-start' onClick={()=>setActiveForm(!activeForm)} >Mail</a></motion.div>
            <div className='flex justify-self-around flex-row  w-2/3 ' >
              <h1 className=' h-full justify-self-end text-xl'  >Social Medias</h1>
              <div className='flex flex-col w-1/2' >
              <motion.div className='flex  self-center ' >
                   <Link className='flex  ' href='/' ><motion.div className='flex justify-self-around w-full'><Image className='rotate-45 ' src={triangle} alt='selector' /><motion.div  className='' whileHover='active' variants={{
              active:{
                y:-10
              },
              inactive:{
                x:0

              }
             }} ><h3 className='text-2xl hover:text-yellow-600 ' >GitHub</h3></motion.div></motion.div></Link>

                   </motion.div>
                   <motion.div className='flex  self-center ' >
                   <Link className='flex  ' href='/' ><motion.div className='flex justify-self-around w-full'><Image className='rotate-45 ' src={triangle} alt='selector' /><motion.div  className='' whileHover='active' variants={{
              active:{
                y:-10
              },
              inactive:{
                x:0

              }
             }} ><h3 className='text-2xl hover:text-yellow-600 ' >LinkedIn</h3></motion.div></motion.div></Link>

                   </motion.div>


              </div>


            </div>

            </div>
           

        </div>

        {/*activeForm?
           <motion.div className='flex flex-col space-y-[5vh] self-center h-[60vh] flex-col w-3/4 max-sm:w-full rounded-md ' >
            <div className='flex flex-col  justify-between self-center w-1/2 py-4 ' >
          <h1 className='text-3xl' > Contact Me</h1>
        </div>
        <div className='' >
          <form className='flex flex-col justify-center h-full w-full space-y-[5vh] ' ref={form} onSubmit={submitForm} >
            <div  className='flex flex-col self-center border-2 rounded-md border-yellow-300 w-2/3 ' >
              
              <input className=' p-2 text-xl ' type='text' name='user_name' placeholder='Name...' />
            </div>
            <div className='flex flex-col self-center border-2 rounded-md border-yellow-300 w-2/3 ' >
              
               <input className='p-2 text-xl' type='text' name='user_email' placeholder='Email...'   />
            </div>
            <div className='flex flex-col self-center border-2 rounded-md border-yellow-300 w-2/3 ' >
              
              <input className='p-2 text-xl'  type='text' name='message' placeholder='Message...'  />
            </div>
            <div className='flex flex-col self-center rounded-md bg-yellow-600 w-1/5 max-sm:w-3/5 min-h-8' >
              <button className='rounded-md  ' type='submit'  >Submit</button>

            </div>

          </form>

        </div>

        </motion.div>:
              <div className='' >


          </div>*/}
        

      </div>
      <div className='flex justify-center' >
           <Footer/>
      </div>

      </div>
  )
}

export default Contact