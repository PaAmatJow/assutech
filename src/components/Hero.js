import React from 'react';
import '../index.css';
import Wave from './Wave'
// import heroImg from '../img/hero-img.jpg'
import heroImg from '../img/hero-img-2.png';
import Assutech from '../lottie/Assutech.json'
import Lottie from 'lottie-react'

// animation
import { motion } from 'framer-motion';
import { heroTitleAnim, fade, photoAnim } from '../animation/animation';

const Hero = () => {
	return (
		<div className=' hero px-[2rem] md:px-[4rem] lg:px-[10rem] py-[6rem] font-sans  mx-auto   lg:min-h-[60vh] xl:min-h-[90vh]  '>
			<div className='flex items-center h-[60vh] justify-center lg:justify-between mx-auto max-w-[1440px]'>
				<div className='text-[2rem] md:text-[3rem] 2xl:text-[4rem] text-center md:text-start md:pr-4 z-30'>
					<div className='overflow-hidden '>
						<motion.h2 variants={heroTitleAnim} initial='hidden' animate='show'>
							Software{' '}
							<span className='text-[#850400] font-semibold'>solutions</span>
						</motion.h2>
					</div>
					<div className='overflow-hidden'>
						<motion.h2 variants={heroTitleAnim} initial='hidden' animate='show'>
							that deliver
						</motion.h2>
					</div>
					<div className='overflow-hidden'>
						<motion.h2 variants={heroTitleAnim} initial='hidden' animate='show'>
							business{' '}
							<span className='text-[#850400] font-semibold'>goals</span>
						</motion.h2>
					</div>
					<motion.button
						variants={fade}
						initial='hidden'
						animate='show'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 1 }}
						className='text-[1.2rem] text-white font-sans bg-[#850400] px-6 py-3  font-semibold tracking-wider'
					>
						START NOW
					</motion.button>
				</div>
				<div className='hidden md:block w-[50%] z-30'>
					{/* <motion.img
						variants={photoAnim}
						initial='hidden'
						animate='show'
						src={heroImg}
						alt='assutech logo'
						className='w-full h-[70vh] object-cover overflow-hidden '
					/> */}
					<Lottie loop={true} animationData={Assutech} />
				</div>
				<Wave />
			</div>
		</div>
	);
};

export default Hero;
