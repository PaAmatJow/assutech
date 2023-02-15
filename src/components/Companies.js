import React from 'react';
import wunder from '../img/wunderpen.webp';
import itc from '../img/ITC.webp';
import gcci from '../img/gcci.webp';
import taf from '../img/taf.webp';
import asabina from '../img/asabina.webp';
import iri from '../img/iri.webp';
import afrimoney from '../img/afrimoney.webp';

const Companies = () => {
	return (
		<div className='py-6 text-center font-sans w-[90vw] my-[3rem] mx-auto max-w-[1170px] lg:w-[95vw] overflow-hidden'>
			<div className=' lg:flex lg:items-center lg:ml-[8rem]'>
				<div className='mb-6 font-sans font-semibold tracking-wider md:text-lg lg:text-xl lg:mb-0'>
					<h4 className='lg:px-4 lg:mr-2 lg:border-r'>Trusted by</h4>
				</div>
				<div className='flex flex-wrap gap-6 mx-auto justify-center max-w-[1000px]'>
					<img src={wunder} alt='' className='w-[100px]' />
					<img src={itc} alt='' className='w-[100px]' />
					<img src={gcci} alt='' className='w-[100px]' />
					<img src={taf} alt='' className='w-[100px]' />
					<img src={asabina} alt='' className='w-[100px]' />
					<img src={iri} alt='' className='w-[100px]' />
					<img src={afrimoney} alt='' className='w-[100px]' />
				</div>
			</div>
		</div>
	);
};

export default Companies;
