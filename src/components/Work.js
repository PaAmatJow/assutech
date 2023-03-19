import React from 'react'
// animation
import {motion} from 'framer-motion'
import {scrollAnim} from '../animation/animation'

const Work = () => {
  return (
		<div className=' '>
			<motion.div
				transition={{ staggerChildren: 0.25 }}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.4 }}
				className='h-[60vh] work px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem]  lg:px-[10rem] lg:py-[2rem]  mx-auto'
			>
				<motion.div
					variants={scrollAnim}
					className='text-center md:text-start font-sans p-6 flex flex-col items-center justify-center lg:items-start space-y-8 max-w-[1440px] mx-auto'
				>
					<p className='font-mono text-center text-white text-lg tracking-wide lg:text-start max-w-[16rem]'>
						#WatooTijay
					</p>
					<h2 className='text-2xl lg:text-6xl text-white font-semibold'>
						You have ideas. We have solutions.
					</h2>
					<h2 className='text-2xl lg:text-6xl text-white font-semibold'>
						Time to join forces.
					</h2>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 1 }}
						className='text-[1rem] lg:text-[1.2rem] text-white font-sans bg-[#850400] px-6 py-3 font-semibold tracking-wider'
					>
						LET'S GET TO WORK
					</motion.button>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Work