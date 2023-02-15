import React from 'react';
import { motion } from 'framer-motion';
import { introAnim, titleAnim } from '../animation/animation';

const Intro = () => {
	return (
		<motion.div
			className='intro fixed top-0 left-0 w-screen min-h-screen z-50'
			variants={introAnim}
			animate='show'
		>
			<h1 className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-sans font-semibold text-4xl'>
				<div className='overflow-hidden inline-block'>
					<motion.h2
						variants={titleAnim}
						initial='hidden'
						animate='show'
						className=''
					>
						ASSUTECH.
					</motion.h2>
				</div>
			</h1>
		</motion.div>
	);
};

export default Intro;
