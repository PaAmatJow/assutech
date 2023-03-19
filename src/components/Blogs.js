import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../data/blogs'
// animation
import { motion } from 'framer-motion';
import { scrollAnim } from '../animation/animation';

const Blogs = () => {
	return (
		<motion.div
			transition={{ staggerChildren: 0.25 }}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.2 }}
			className=' font-sans w-[100%] mx-auto py-[2rem] bg-gray-100'
		>
			<motion.div
				variants={scrollAnim}
				className='py-6 text-center font-sans w-[90vw]  mx-auto max-w-[1170px] lg:w-[95vw] my-[2rem]'
			>
				<h3 className='text-lg text-[#850400] font-semibold mb-[1rem]'>
					TECH TALKS
				</h3>
				<h2 className='text-2xl font-semibold mb-[1rem]'>
					We love talking tech. If you do too, this may be the space for you.
				</h2>
				<Link to='blog'>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 1 }}
						className='text-[1.2rem] text-white font-sans bg-[#850400] px-6 py-3 font-semibold tracking-wider'
					>
						EXPLORE ALL
					</motion.button>
				</Link>
			</motion.div>
			{/* cards */}
			<motion.div
				variants={scrollAnim}
				className='flex flex-wrap gap-6 my-[4rem] mx-auto px-[4rem] py-[2rem] max-w-[1440px] justify-center'
			>
				{Blog.slice(0, 3).map((blog) => {
					const { title, image, author, position } = blog;
					return (
						<div
							className='max-w-[22rem]  min-w-[20rem] max-h-[28rem] shadow-md rounded-md bg-white'
							key={title}
						>
							<div className='h-[40%] w-full'>
								<img
									src={image}
									alt={title}
									className='h-full w-full object-cover'
								/>
							</div>
							<div className='flex flex-wrap gap-1 text-xs items-center mx-[1rem] my-[1rem]'>
								{blog.tags.map((tag) => {
									return (
										<p className='bg-gray-300 px-2.5 py-1 rounded-full'>
											{tag.tag}
										</p>
									);
								})}
							</div>
							<div className='mb-[2rem] mx-auto px-[1.5rem]'>
								<h2 className='text-lg font-semibold mb-[1rem]'>{title}</h2>
								<h3 className='text-[#850400] font-semibold mb-[0.5rem]'>
									{author}
								</h3>
								<p className='font-mono text-xs'>{position}</p>
							</div>
						</div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};

export default Blogs;
