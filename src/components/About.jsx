import React from 'react'
import { ABOUT } from '../constants'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <div className='container mx-auto' id="about">
        <motion.h2 initial={{y:"-20vh", opacity:0}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} viewport={{once:true}} className='mt-20 text-center text-4xl font-semibold'>
            About
        </motion.h2>
        <motion.h3 initial={{opacity:0,x:-100}}
                  whileInView={{opacity:1,x:0}} // start animation only when we scroll to this div
                  transition={{duration:1}}
                  viewport={{once:true}} // if we dont do this each time we scroll back the animation restarts again
        className='p-4 text-6xl uppercase lg:text-[8rem]'>
            {ABOUT.text1}
        </motion.h3>
        <motion.p initial={{x:100, opacity:0}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:true}} className='mr-24 pl-4 leading-loose text-lg'>{ABOUT.text2}</motion.p>
    </div>
  )
}

export default About
