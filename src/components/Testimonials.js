import React, {useState, useEffect} from 'react'
import { FaAngleRight, FaAngleLeft, FaQuoteRight } from 'react-icons/fa';
import data from '../data'
// animation
import {motion} from 'framer-motion'
import {scrollAnim} from '../animation/animation'

const Testimonials = () => {
  const [people ,setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = people.length - 1;
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  },[index, people]);

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex(index + 1);
    }, 4000);
    return ()=> clearInterval(slider)
  }, [index]);

  return (
		<motion.div
			transition={{ staggerChildren: 0.25 }}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.4 }}
		>
			<motion.div variants={scrollAnim} className='py-6 text-center font-sans w-[90vw] my-[5rem] mx-auto max-w-[1170px] lg:w-[95vw]'>
				<h3 className='text-lg text-[#850400] font-semibold'>
					DON’T JUST TAKE OUR WORD FOR IT
				</h3>
				<h2 className='text-2xl font-semibold'>
					Take it from clients that trust our work and commitment to deliver.
				</h2>
			</motion.div>
			<div className='mx-auto my-[2rem] w-[90vw] h-[600px] max-w-[800px] text-center relative flex overflow-hidden '>
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					let position = 'nextSlide';
					if (personIndex === index) {
						position = 'activeSlide';
					}

					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = 'lastSlide';
					}

					return (
						<article className={position} key={id}>
							<img
								src={image}
								alt={name}
								className='rounded-full mx-auto mb-[1rem] w-[100px] h-[100px] object-cover border-4 border-[#85040091] shadow-md'
							/>
							<h4 className='text-md text-[#850400] font-semibold'>{name}</h4>
							<p className='text-md font-semibold'>{title}</p>
							<p className='font-mono text-sm lg:text-base text-justify max-w-[30em] lg:max-w-[34em] mx-auto mt-[2rem]'>
								{quote}
							</p>
							<FaQuoteRight className='opacity-50 text-[3rem] mx-auto mt-[1rem] text-[#850400]' />
						</article>
					);
				})}
				<button
					className='absolute left-0 top-[200px] translate-y-[-50%] w-[1.25rem] h-[1.25rem] grid place-items-center text-[1rem] cursor-pointer'
					onClick={() => setIndex(index - 1)}
				>
					<FaAngleLeft className='opacity-50 text-[2rem]' />
				</button>
				<button
					className='absolute right-0 top-[200px] translate-y-[-50%] w-[1.25rem] h-[1.25rem] grid place-items-center text-[1rem] cursor-pointer'
					onClick={() => setIndex(index + 1)}
				>
					<FaAngleRight className='opacity-50 text-[1.9rem]' />
				</button>
			</div>
		</motion.div>
	);
}

export default Testimonials