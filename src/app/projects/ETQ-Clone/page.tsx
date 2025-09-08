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
import home_page from '@/app/lib/utils/images/ETQ_Clone/revised/ETQ_Amsterdam_Clone.png'
import home_mobile from '@/app/lib/utils/images/ETQ_Clone/revised/Home_Mobile.png'
import products_desk from '@/app/lib/utils/images/ETQ_Clone/revised/Products_Desk.png'
import products_mobile from '@/app/lib/utils/images/ETQ_Clone/revised/Products_Mobile.png'
import main_desk from '@/app/lib/utils/images/ETQ_Clone/revised/Main-Page-Desk.png'
import product_desk from '@/app/lib/utils/images/ETQ_Clone/revised/product_page_desk.png'
import product_mobile from '@/app/lib/utils/images/ETQ_Clone/revised/product_page_mobile.png'
import checkout_desk from '@/app/lib/utils/images/ETQ_Clone/revised/checkout_page_desk.png'
import checkout_mobile from '@/app/lib/utils/images/ETQ_Clone/revised/checkout_page_mobile.png'

type Props = {}

const ETQ_Clone = (props: Props) => {
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
          <div className='flex flex-col  justify-self-center w-2/3 ' >
            <div className='flex justify-self-center' >
              <Image className='rounded-md 'src={main_desk} alt='ETQ_Clone_Home' />

            </div>
            <div className='flex flex-col space-y-8 max-sm:w-full ' >
              <h1 className='p-4 text-3xl '>ETQ Clone</h1>
              <hr className='w-full px-4' />
              <div className='flex max-sm:flex-col  ' >
                  <div className='flex flex-col md:w-1/2 md:py-4 ' >
                    <div className='flex justify-around '>
                      <h3>Category</h3>
                      <h3 className='' >Web Development</h3>
                    </div>
                    <div className='flex justify-around ' >
                      <h3>Year</h3>
                      <h3 className='' >2025</h3>
                    </div>
                    
                    <div className='flex justify-around ' >
                      <h3>Team</h3>
                      <div className='' >
                         <h3 className='' >
                            Julian Borner
                         </h3>
                      </div>
                   
                    </div>
                    <div className='flex justify-around ' >
                      <h3>Client</h3>
                      <h3 className='' >Freelance</h3>
                    </div>


                  </div>
                  <div className='border-2 border-slate-200  rounded-md' >
                <p className='p-4 max-sm:w-5/6 ' >This is freelance clone of the popular webshop ETQ-Amsterdam. 
                  This project features a full-stack Stripe payment system integration, user authentication 
                  with Next-Auth and a user-centric organic design. 

                </p>
                 <Link className='flex justify-self-center p-4 ' href='https://etq-clone3-4qqo.vercel.app/' >
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
            <Image className='rounded-md ' src={home_page} alt='Home_Desk' />
            <Image className='rounded-md ' src={home_mobile} alt='Home_Mobile' />
          </div>

          </div>
          <div className='flex flex-col  justify-self-center w-2/3  space-y-4 ' >
          <h1 className='flex justify-center p-4 text-2xl' >Products Page</h1>
          <div className='flex flex-col justify-center space-y-4 ' >
            <Image className='rounded-md' src={products_desk} alt='Product_Desk' />
            <Image className='rounded-md' src={products_mobile} alt='Product_Mobile' />
          </div>

          </div>
          <div className='flex flex-col  justify-self-center w-2/3  space-y-4 ' >
          <h1 className='flex justify-center p-4 text-2xl' >Product Page</h1>
          <div className='flex flex-col justify-center space-y-4 ' >
            <Image className='rounded-md' src={product_desk} alt='Product_Desk' />
            <Image className='rounded-md' src={product_mobile} alt='Product_Mobile' />
          </div>

          </div>
          <div className='flex flex-col  justify-self-center w-2/3 space-y-4 ' >
          <h1 className='flex justify-center p-4 text-2xl' >Checkout Page</h1>
          <div className='flex flex-col justify-center space-y-4 ' >
            <Image className='rounded-md' src={checkout_desk} alt='Checkout_Desk' />
            <Image className='rounded-md' src={checkout_mobile} alt='Checkout_Mobile' />
          </div>

          </div>

          <motion.div className='md:relative flex justify-center px-4 top-96  ' >
            <Footer/>

          </motion.div>
        </div>
  )
}

export default ETQ_Clone