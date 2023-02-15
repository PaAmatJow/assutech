import React from 'react';
import wunder from '../img/wunderpen.webp';
import itc from '../img/ITC.webp';
import gcci from '../img/gcci.webp';
import taf from '../img/taf.webp';
import asabina from '../img/asabina.webp';
import iri from '../img/iri.webp';
import afrimoney from '../img/afrimoney.webp';
// animation
import {motion} from 'framer-motion'
import {scrollAnim} from '../animation/animation'

const Companies = () => {
	return (
		<motion.div className='py-6 text-center font-sans w-[90vw] my-[3rem] mx-auto max-w-[1240px] lg:w-[95vw] overflow-hidden'>
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 1 }}
				className=' lg:flex lg:items-center lg:ml-[4rem]'
			>
				<div className='mb-6 font-sans font-semibold tracking-wider md:text-lg lg:text-xl lg:mb-0'>
					<motion.h4
						variants={scrollAnim}
						className='lg:px-4 lg:mr-2 lg:border-r'
					>
						Trusted by
					</motion.h4>
				</div>
				<motion.div
					variants={scrollAnim}
					className='flex flex-wrap gap-6 mx-auto justify-center max-w-[1000px]'
				>
					<img src={wunder} alt='' className='w-[100px]' />
					<img src={itc} alt='' className='w-[100px]' />
					<img src={gcci} alt='' className='w-[100px]' />
					<img src={taf} alt='' className='w-[100px]' />
					<img src={asabina} alt='' className='w-[100px]' />
					<img src={iri} alt='' className='w-[100px]' />
					<img src={afrimoney} alt='' className='w-[100px]' />
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Companies;
