import React from 'react';
import blog1 from '../img/blog-1.webp';
import blog2 from '../img/blog-2.webp';
import blog3 from '../img/blog-3.webp';
// animation
import {motion} from 'framer-motion'
import {scrollAnim} from '../animation/animation'

const Blogs = () => {
	return (
		<motion.div
			transition={{ staggerChildren: 0.25 }}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			className=' font-sans w-[100%] mx-auto py-[2rem] bg-gray-100'
		>
			<motion.div variants={scrollAnim} className='py-6 text-center font-sans w-[90vw]  mx-auto max-w-[1170px] lg:w-[95vw] my-[2rem]'>
				<h3 className='text-lg text-[#850400] font-semibold mb-[1rem]'>
					TECH TALKS
				</h3>
				<h2 className='text-2xl font-semibold mb-[1rem]'>
					We love talking tech. If you do too, this may be the space for you.
				</h2>
				<button className='text-[1.2rem] text-white font-sans bg-[#850400] px-6 py-3 font-semibold tracking-wider'>
					EXPLORE ALL
				</button>
			</motion.div>
			{/* cards */}
			<motion.div variants={scrollAnim} className='flex flex-wrap gap-6 my-[4rem] mx-auto px-[4rem] py-[2rem] max-w-[1440px] justify-center'>
				{/* single card */}
				<div className='max-w-[22rem]  min-w-[20rem] max-h-[28rem] shadow-md rounded-md bg-white'>
					<div className='h-[40%] w-full'>
						<img src={blog1} alt='' className='h-full w-full object-cover' />
					</div>
					<div className='flex flex-wrap gap-1 text-xs items-center mx-[1rem] my-[1rem]'>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>
							Software Development
						</p>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>Outsourcing</p>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>Tech Hub</p>
					</div>
					<div className='mb-[2rem] mx-auto px-[1.5rem]'>
						<h2 className='text-lg font-semibold mb-[1rem]'>
							Top 6 Advantages of outsourcing software development to The Gambia
						</h2>
						<h3 className='text-[#850400] font-semibold mb-[0.5rem]'>
							By Ebrima Y. Jallow
						</h3>
						<p className='font-mono text-xs'>
							Growth Lead, Assutech · February 07, 2023
						</p>
					</div>
				</div>
				{/* end of single card */}
				{/* single card */}
				<div className='max-w-[22rem] min-w-[20rem] max-h-[28rem] shadow-md rounded-md bg-white'>
					<div className='h-[40%] w-full'>
						<img src={blog2} alt='' className='h-full w-full object-cover' />
					</div>
					<div className='flex flex-wrap gap-1 text-xs items-center mx-[1rem] my-[1rem]'>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>
							Mobile Payment
						</p>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>
							Payment Aggregator
						</p>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>Fintech</p>
					</div>
					<div className='mb-[2rem] mx-auto px-[1.5rem]'>
						<h2 className='text-lg font-semibold mb-[1rem]'>
							Streamline Your Business Payments with Waychit: The Ultimate
							Payment Aggregator for Business Owners
						</h2>
						<h3 className='text-[#850400] font-semibold mb-[0.5rem]'>
							By Ebrima Y. Jallow
						</h3>
						<p className='font-mono text-xs'>
							Growth Lead, Assutech · February 07, 2023
						</p>
					</div>
				</div>
				{/* end of single card */}
				{/* single card */}
				<div className='max-w-[22rem] min-w-[20rem] max-h-[28rem] shadow-md rounded-md bg-white'>
					<div className='h-[40%] w-full'>
						<img src={blog3} alt='' className='h-full w-full object-cover' />
					</div>
					<div className='flex flex-wrap gap-1 text-xs items-center mx-[1rem] my-[1rem]'>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>Waychit</p>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>
							Mobile Payments
						</p>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>Fuel Payment</p>
						<p className='bg-gray-300 px-2.5 py-1 rounded-full'>
							Cashless Payment
						</p>
					</div>
					<div className='mb-[2rem] mx-auto px-[1.5rem]'>
						<h2 className='text-lg font-semibold mb-[1rem]'>
							Top 6 Advantages of outsourcing software development to The Gambia
						</h2>
						<h3 className='text-[#850400] font-semibold mb-[0.5rem]'>
							By Ebrima Y. Jallow
						</h3>
						<p className='font-mono text-xs'>
							Growth Lead, Assutech · February 07, 2023
						</p>
					</div>
				</div>
				{/* end of single card */}
			</motion.div>
		</motion.div>
	);
};

export default Blogs;
