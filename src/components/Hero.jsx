import React from 'react'
import { PROFILE } from '../constants'
import profilePic from '../assets/robertButcher1.jpg'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className='relative flex min-h-screen items-end justify-center' id="hero">
        {/* inset is short form for top, bottom, left,right */}
        <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} src={profilePic} alt={PROFILE.name} className='absolute inset-0 z-10 h-full w-full object-cover'/>
        {/* add image overlay */}
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}} className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% md:from-30% to-black'></motion.div>
        <motion.div initial={{opacity:0,x:'-100vw'}} animate={{opacity:1,x:0}} transition={{duration:1, delay:1,type:"spring", mass:1.5}} className='z-20 mx-4 max-w-3xl pb-20'>
            <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'>
                {PROFILE.name}
            </h1>
            <p className='pt-2 font-semibold'>{PROFILE.info}</p>
        </motion.div>
    </div>
  )
}

export default Hero
