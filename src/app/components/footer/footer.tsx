'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "motion/react"
import gmail from '@/app/lib/utils/images/gmailIcon.png'
import linkedin from '@/app/lib/utils/images/linkedInIcon.png'
import github from '@/app/lib/utils/images/githubIcon.png'

//type Props = {}

const Footer = () => {
  return (
    <div className=' flex justify-between w-full md:w-1/2  rounded-md opacity-75' >
        
        <motion.div className=' justify-self-center self-center hover:bg-yellow-500 rounded-md hover:scale-125' >
        <Link className='' href='https://www.linkedin.com/in/julian-borner-709b91b7/?profileId=ACoAABjp17kBZWBPjm1poVjlER_t9U19uALJwbQ' ><Image className='' src={linkedin} alt='LinkedIn' /></Link>
        </motion.div>
        <motion.div className=' justify-self-center self-center hover:bg-yellow-500 rounded-md hover:scale-125' >
        <Link className='' href='https://github.com/julian934' ><Image className='' src={github} alt='GitHub' /></Link>
        </motion.div>
        <motion.div className='  justify-self-center self-center hover:bg-yellow-500 rounded-md hover:scale-125' >
        <Link className='' href='/contact' ><Image className='' src={gmail} alt='Contact Me-gmail image' /></Link>
        </motion.div>
       

        </div>
  )
}

export default Footer