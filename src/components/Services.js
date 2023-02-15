import React from 'react';
import app from '../img/app.webp';
import ai from '../img/ai-icon.webp';
import web from '../img/web.webp';
import business from '../img/business.webp';
import growth from '../img/growth.webp';
// animation
import {motion} from 'framer-motion'
import {scrollAnim} from '../animation/animation'

const Services = () => {
	return (
		<div className='bg-gray-100 '>
			<motion.div
				transition={{staggerChildren:0.25}}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.4 }}
				className='px-[2rem] py-[2rem] md:px-[4rem] md:py-[2rem]  lg:px-[2rem] lg:py-[4rem]'
			>
				{/* title */}
				<div className='py-6 text-center font-sans'>
					<motion.h3 variants={scrollAnim} className='text-lg text-[#850400] font-semibold'>
						Custom Solutions for You.
					</motion.h3>
					<motion.h2 variants={scrollAnim} className='text-2xl font-semibold'>
						Works Everywhere on Any Device.
					</motion.h2>
				</div>
				{/* cards container */}
				<motion.div variants={scrollAnim} className='flex flex-wrap gap-6 justify-center max-w-[1000px] my-[2rem] mx-auto'>
					{/* single card */}
					<div className='bg-white rounded-md shadow-sm max-w-[22rem] max-h-[16rem] p-4 '>
						<div className='flex flex-col items-center space-y-4'>
							<img src={app} alt='' className='w-14' />
							<div className='text-center font-sans'>
								<h3 className='text-lg font-semibold mb-4'>
									AI & Machine Learning
								</h3>
								<p className='font-mono max-w-[16rem]'>
									From customized user experiences to digitizing paper-based
									documents.
								</p>
							</div>
						</div>
					</div>
					{/* end of single card */}
					{/* single card */}
					<div className='bg-white rounded-md shadow-sm max-w-[22rem] max-h-[16rem] p-4 '>
						<div className='flex flex-col items-center space-y-4'>
							<img src={ai} alt='' className='w-14' />
							<div className='text-center font-sans'>
								<h3 className='text-lg font-semibold mb-4'>
									AI & Machine Learning
								</h3>
								<p className='font-mono max-w-[16rem]'>
									From customized user experiences to digitizing paper-based
									documents.
								</p>
							</div>
						</div>
					</div>
					{/* end of single card */}
					{/* single card */}
					<div className='bg-white rounded-md shadow-sm max-w-[22rem] max-h-[16rem] p-4 '>
						<div className='flex flex-col items-center space-y-4'>
							<img src={web} alt='' className='w-14' />
							<div className='text-center font-sans'>
								<h3 className='text-lg font-semibold mb-4'>
									Website Development
								</h3>
								<p className='font-mono max-w-[16rem]'>
									Highly performant and user friendly websites, inherently
									seo-optimized.
								</p>
							</div>
						</div>
					</div>
					{/* end of single card */}
					{/* single card */}
					<div className='bg-white rounded-md shadow-sm max-w-[22rem] max-h-[16rem] p-4 '>
						<div className='flex flex-col items-center space-y-4'>
							<img src={business} alt='' className='w-14' />
							<div className='text-center font-sans'>
								<h3 className='text-lg font-semibold mb-4'>
									Business Process Automation
								</h3>
								<p className='font-mono max-w-[16rem]'>
									Fully Automate Your Processes with Our Hardware and Software
									Solutions.
								</p>
							</div>
						</div>
					</div>
					{/* end of single card */}
					{/* single card */}
					<div className='bg-white rounded-md shadow-sm max-w-[22rem] max-h-[16rem] p-4 '>
						<div className='flex flex-col items-center space-y-4'>
							<img src={growth} alt='' className='w-14' />
							<div className='text-center font-sans'>
								<h3 className='text-lg font-semibold mb-4'>Growth Hacking</h3>
								<p className='font-mono max-w-[16rem]'>
									Boost Your Business Growth with Our Marketing and Software
									Expertise.
								</p>
							</div>
						</div>
					</div>
					{/* end of single card */}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Services;
