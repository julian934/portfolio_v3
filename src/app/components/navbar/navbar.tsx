'use client'
import React,{useState,useEffect,useContext} from 'react'
import { StoreStateContext } from '@/app/lib/context/storeContext'
import Image from 'next/image'
//import Link from 'next/link'
//import {motion} from "motion/react"
import MenuIcon from '@/app/lib/utils/images/icons8-menu-50.png'

//type Props = {}

const NavBar = () => {
  const [active,setActive]=useState<any>(null);
  const ctx=useContext(StoreStateContext);
  const changeNavStatus=()=>{
    setActive(!active)
    ctx.navSet(active);
  }
  console.log('Testing NavBar: ', ctx.navStatus);
  return (
    <div className=' bg-white rounded-md hover:bg-yellow-500 h-10 w-10' > 
      
      <button className='relative top-2  left-2' onClick={changeNavStatus} >
        {/*active?<motion.div>
          

        </motion.div>:<motion.div className='' >
          <h1>Inactive Nav</h1>
          </motion.div>*/}
          <Image className='w-6 h-6 ' src={MenuIcon} alt='NavBar Menu' />
      </button>
      </div>
  )
}

export default NavBar