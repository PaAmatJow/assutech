import React from 'react'
import think from '../img/think.webp'
// animation
import {motion} from 'framer-motion'
import {scrollAnim} from '../animation/animation'

const ThinkBig = () => {
  return (
		<div className='px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem]  lg:px-[10rem] lg:py-[2rem] font-sans w-[90vw] mx-auto  lg:w-[95vw]'>
			<motion.div
				transition={{ staggerChildren: 0.25 }}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.6 }}
			>
				<img src={think} alt='' className='mx-auto' />
				<div className='p-10 text-center'>
					<motion.h2 variants={scrollAnim} className='text-2xl font-semibold'>
						Think Big. Think Different. Think{' '}
						<span className='text-[#850400]'>
							Assutech.
						</span>
					</motion.h2>
				</div>
			</motion.div>
		</div>
	);
}

export default ThinkBig