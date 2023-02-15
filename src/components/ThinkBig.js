import React from 'react'
import think from '../img/think.webp'

const ThinkBig = () => {
  return (
		<div className='px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem]  lg:px-[10rem] lg:py-[2rem] font-sans w-[90vw] mx-auto  lg:w-[95vw]'>
			<div className=''>
				<img src={think} alt='' className='mx-auto' />
				<div className='p-10 text-center'>
					<h2 className='text-2xl font-semibold'>
						Think Big. Think Different. Think{' '}
						<span className='text-[#850400]'>Assutech.</span>
					</h2>
				</div>
			</div>
		</div>
	);
}

export default ThinkBig