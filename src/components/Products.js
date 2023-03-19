import React from 'react'
import waychit from '../img/waychit.webp'
import marble from '../img/marble.webp'
// animation
import {motion} from 'framer-motion'
import {scrollAnim, fade} from '../animation/animation'

const Products = () => {
  return (
		<div>
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.4 }}
				className='px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem]  lg:px-[10rem] lg:py-[4rem] my-[2rem] flex flex-col items-center space-y-4 xl:flex-row lg:justify-between max-w-[1650px] mx-auto'
			>
				{/* left */}
				<motion.div
					variants={scrollAnim}
					className='text-center xl:text-start font-sans p-6 flex flex-col items-center lg:items-start space-y-4 w-[22rem] lg:w-[32rem]'
				>
					<h3 className='text-lg text-[#850400] font-semibold w-full'>
						RECENT PRODUCTS
					</h3>
					<h2 className='text-2xl font-semibold'>
						Modern problems require modern solutions
					</h2>
					<p className='font-mono max-w-[22rem] lg:max-w-[26rem]'>
						At Assutech, We Focus on People and Results. Our Teams Work Directly
						with Customers for Fast and Efficient Solutions.
					</p>
					<div className='w-full'>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 1 }}
							className=' text-[1.2rem] text-white font-sans bg-[#850400] px-6 py-3 font-semibold tracking-wider'
						>
							GET STARTED
						</motion.button>
					</div>
				</motion.div>
				{/* right */}
				<motion.div
					variants={scrollAnim}
					className='flex flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 2xl:space-x-10'
				>
					{/* single card */}
					<div className='bg-white rounded-md shadow-lg w-[22rem] h-[24rem] px-2 py-4 '>
						<div className='flex flex-col items-center space-y-4'>
							<div className='text-center font-sans p-6 flex flex-col items-center space-y-4 border-b'>
								<img src={waychit} alt='' className='w-14' />
								<h3 className='text-lg text-[#850400] font-lighter'>FINTECH</h3>
								<h2 className='text-2xl font-semibold'>Waychit</h2>
							</div>
							<p className='font-mono text-center lg:text-start max-w-[16rem]'>
								A fintech app to make buying & selling a tab easier. Also for
								online payments, bills and peer-transactions once out of the
								pipeline.
							</p>
						</div>
					</div>
					{/* end of single card */}
					{/* single card */}
					<div className='bg-white rounded-md shadow-lg w-[22rem] h-[24rem] px-2 py-4 '>
						<div className='flex flex-col items-center space-y-4'>
							<div className='text-center font-sans p-6 flex flex-col items-center space-y-4 border-b'>
								<img src={marble} alt='' className='w-14' />
								<h3 className='text-lg text-[#850400] font-lighter'>
									ELECTION
								</h3>
								<h2 className='text-2xl font-semibold'>Marble</h2>
							</div>
							<p className='font-mono text-center lg:text-start max-w-[16rem] mb-2'>
								Get Real-Time Election Results with Marble. Available for iOS
								and Android.
							</p>
						</div>
					</div>
					{/* end of single card */}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Products