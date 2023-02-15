import React from 'react'

const Work = () => {
  return (
		<div className=' '>
			<div className='h-[60vh] work px-[2rem] py-[1rem] md:px-[4rem] md:py-[2rem]  lg:px-[10rem] lg:py-[2rem]  mx-auto'>
				<div className='text-center md:text-start font-sans p-6 flex flex-col items-center justify-center lg:items-start space-y-8 max-w-[1440px] mx-auto'>
					<p className='font-mono text-center text-white text-lg tracking-wide lg:text-start max-w-[16rem]'>
						#WatooTijay
					</p>
					<h2 className='text-2xl lg:text-6xl text-white font-semibold'>
						You have ideas. We have solutions.
					</h2>
					<h2 className='text-2xl lg:text-6xl text-white font-semibold'>
						Time to join forces.
					</h2>
					<button className='text-[1rem] lg:text-[1.2rem] text-white font-sans bg-[#850400] px-6 py-3 font-semibold tracking-wider'>
						LET'S GET TO WORK
					</button>
				</div>
			</div>
		</div>
	);
}

export default Work